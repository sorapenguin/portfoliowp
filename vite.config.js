import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { execSync } from 'node:child_process'
import { collectUpdated } from './scripts/collect-updated.mjs'

// サイトの最終更新日は手で書かない。直近のコミット日時を自動で埋め込む。
// （git が使えない環境ではビルド日時にフォールバックする）
function resolveLastUpdated() {
  try {
    return execSync('git log -1 --format=%cI', { encoding: 'utf-8' }).trim()
  } catch {
    return new Date().toISOString()
  }
}


// public/learning/*.md のフロントマターを読み取り manifest.json を自動生成するプラグイン
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const result = {}
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    if (key) result[key] = val
  })
  return result
}

function learningManifestPlugin() {
  const learningDir = path.resolve('public/learning')

  function generate() {
    if (!fs.existsSync(learningDir)) return
    const entries = fs.readdirSync(learningDir)
      .filter(f => f.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(learningDir, file), 'utf-8')
        const fm = parseFrontmatter(content)
        if (!fm || !fm.exam) return null
        return { id: file.replace('.md', ''), ...fm }
      })
      .filter(Boolean)
    fs.writeFileSync(
      path.join(learningDir, 'manifest.json'),
      JSON.stringify(entries, null, 2)
    )
    console.log(`[learning-manifest] ${entries.length} entries written to manifest.json`)
  }

  return {
    name: 'learning-manifest',
    buildStart: generate,
    configureServer(server) {
      server.watcher.add(learningDir)
      const handler = (file) => {
        if (file.endsWith('.md') && file.includes(`${path.sep}learning${path.sep}`)) {
          generate()
          server.ws.send({ type: 'full-reload' })
        }
      }
      server.watcher.on('add', handler)
      server.watcher.on('change', handler)
    },
  }
}

// 各作品の最終更新日を、作品ソースの直近コミットから毎回集め直す
function updatedDatesPlugin() {
  return {
    name: 'updated-dates',
    buildStart: collectUpdated,
    configureServer: collectUpdated,
  }
}

export default defineConfig({
  plugins: [react(), learningManifestPlugin(), updatedDatesPlugin()],
  base: '/portfoliowp/',
  define: {
    __SITE_LAST_UPDATED__: JSON.stringify(resolveLastUpdated()),
  },
})
