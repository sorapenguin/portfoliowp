// 各作品の「最終更新日」を、作品ソースのリポジトリの直近コミット日時から自動で集める。
// ここで書き出した src/data/updated.json をサイトが読む。
// ソースが手元に無い環境（他マシン・CI）では既存の updated.json をそのまま残す。
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(here, '../src/data/updated.json')

// 作品ソースの置き場所（モノレポ）
const REPO = 'C:/dev/WrokSpringboot/AndroidKotlin'

// slug → リポジトリ内のディレクトリ
const MAP = {
  'project-routelab': 'RouteLab',
  'project-a': 'quiz-app-python',
  'project-starterra': 'StarTerra',
  'project-ai-infra': 'infrastructure',
  'project-mathlab': 'MathLab',
  'project-chemlab': 'ChemLab',
  'project-infralab': 'InfraLab',
  'project-wlclab': 'WlcLab',
  'project-walllab': 'WallLab',
  'project-gogolab': 'GogoLab',
  'project-cdlab': 'CDLab',
  'project-jet': 'JET',
  'project-golab': 'GoLab',
  'project-m': 'puzzle-web',
  'project-e': 'AlchemyGame',
  'project-c': 'IdleGame',
  'project-j': 'StarForge',
  'project-f': 'IdleMine',
  'project-d': 'Nonogram',
  'project-h': 'IslandDevKot',
  'project-starsaga': 'StarSaga',
}

function lastCommit(dir) {
  try {
    const out = execSync(`git -C "${REPO}" log -1 --format=%cI -- "${dir}"`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return out || null
  } catch {
    return null
  }
}

export function collectUpdated() {
  if (!fs.existsSync(REPO)) {
    console.log('[updated] 作品ソースが見つからないため既存の updated.json を維持します')
    return
  }
  const prev = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf-8')) : {}
  const result = { ...prev }
  let found = 0
  for (const [slug, dir] of Object.entries(MAP)) {
    const iso = lastCommit(dir)
    if (iso) {
      result[slug] = iso
      found++
    }
  }
  fs.writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n')
  console.log(`[updated] ${found} 件の最終更新日を書き出しました`)
}

const entry = process.argv[1] || ''
if (entry.endsWith('collect-updated.mjs')) collectUpdated()
