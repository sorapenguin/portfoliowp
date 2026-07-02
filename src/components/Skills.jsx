const skillCategories = [
  {
    label: 'インフラ・DevOps',
    accent: '#2e7d6e',
    skills: [
      'Docker', 'Docker Compose', 'Traefik', 'nginx', 'Cloudflare',
      'VPS（Ubuntu / Linux）', "Let's Encrypt", 'GitHub Actions', 'AWS', 'Terraform',
    ],
  },
  {
    label: 'バックエンド・Web',
    accent: '#4B52A7',
    skills: [
      'Python', 'Django', 'Gunicorn',
      'Kotlin / Ktor', 'Go', 'Java / Spring Boot', 'PHP',
      'TypeScript', 'React', 'Vite', 'Zustand', 'TailwindCSS', 'JavaScript',
      'PostgreSQL', 'Redis', 'JWT', 'BCrypt', 'FreeMarker',
    ],
  },
  {
    label: 'Android',
    accent: '#8B5CA7',
    skills: [
      'Kotlin', 'Jetpack Compose', 'Clean Architecture', 'MVVM',
      'StateFlow', 'Coroutines', 'Hilt', 'Room', 'DataStore',
      'WorkManager', 'Retrofit', 'Navigation Component', 'AdMob', 'IAP',
    ],
  },
  {
    label: '本番運用基盤',
    accent: '#27AE60',
    skills: [
      'VPS 6サービス同時稼働',
      'Traefik マルチドメイン管理',
      'Prometheus + Grafana 常時監視',
      'GitHub Actions 自動デプロイ',
      'PostgreSQL 自動バックアップ',
      'Discord 障害検知通知',
      "Let's Encrypt 自動更新",
      'Ollama + Python 問題生成パイプライン',
      'Runbook 整備済み',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="skills-heading">
          技術スタック <span className="sub-title">Skills</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div
              className="skill-category"
              key={cat.label}
              style={{ borderTopColor: cat.accent }}
            >
              <h3 className="skill-category-label" style={{ color: cat.accent }}>
                {cat.label}
              </h3>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
