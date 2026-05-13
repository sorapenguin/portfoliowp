import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

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

export default defineConfig({
  plugins: [react(), learningManifestPlugin()],
  base: '/portfoliowp/',
})
