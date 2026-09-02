const skillGroups = [
  {
    label: 'サーバーサイド / フロントエンド',
    accent: '#4B52A7',
    lead: '題材に合わせて選び、本番まで持っていったものだけを挙げています。',
    items: [
      { name: 'Python / Django', used: 'TechQuiz（1 万問超の演習サービス）' },
      { name: 'TypeScript / React', used: 'RouteLab・JET・WallLab・CLIDrillLab' },
      { name: 'Kotlin / Ktor', used: 'Web パズルサービス・StellarRise の API' },
      { name: 'Go', used: 'GoLab（HTTP 経路トレース学習）' },
      { name: 'C# / .NET・Blazor', used: 'InfraLab（障害対応演習）' },
      { name: 'Java / Spring Boot', used: 'EC サイト（Ktor への移植元）' },
      { name: 'PostgreSQL / Redis', used: '問題データと進捗管理・セッション' },
    ],
  },
  {
    label: 'インフラ・運用',
    accent: '#2e7d6e',
    lead: 'VPS 1 台に 6 サービスを同居させ、監視と自動デプロイまで組んでいます。',
    items: [
      { name: 'Docker / Docker Compose', used: '全サービスをコンテナで配置' },
      { name: 'Traefik', used: 'マルチドメイン振り分け + 証明書自動更新' },
      { name: 'Prometheus / Grafana', used: '常時監視・Discord へ障害通知' },
      { name: 'GitHub Actions', used: 'CI と本番への自動デプロイ' },
      { name: 'Cloudflare / nginx', used: 'DNS・前段・静的配信' },
      { name: 'AWS / Terraform', used: '構成の再設計案とハンズオン学習' },
      { name: 'Linux（Ubuntu）運用', used: 'バックアップ・Runbook 整備' },
    ],
  },
  {
    label: 'モバイル・ゲーム / 品質管理',
    accent: '#8B5CA7',
    lead: '手を動かす部分と、それを壊さないための仕組みの両方を作っています。',
    items: [
      { name: 'Kotlin / Jetpack Compose', used: 'StellarRise・AlchemyGame ほか 5 本を配布' },
      { name: 'Kotlin Multiplatform（KorGE）', used: 'StarSaga を Android / PC / ブラウザへ' },
      { name: 'Unity / C#', used: 'IdleMine' },
      { name: 'Ollama + Python パイプライン', used: '問題の下書き生成（46 科目）' },
      { name: 'AI エージェントによる可解性検証', used: '出題を実際に解かせて破綻を検出' },
      { name: '自動回帰テスト', used: 'vitest / JUnit / go test で出題品質を固定' },
    ],
  },
]

const otherSkills = [
  'Vite', 'Zustand', 'TailwindCSS', 'Gunicorn', 'FreeMarker', 'JWT', 'BCrypt',
  'Clean Architecture', 'MVVM', 'StateFlow / Coroutines', 'Hilt', 'Room',
  'DataStore', 'WorkManager', 'Retrofit', 'AdMob', 'IAP', 'PHP',
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          技術スタック <span className="sub-title">Skills</span>
        </h2>
        <p className="section-lead">
          触ったことがある技術ではなく、どのプロダクトで使ったかを添えています。
        </p>

        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.label} style={{ borderTopColor: g.accent }}>
              <h3 className="skill-group-label" style={{ color: g.accent }}>
                {g.label}
              </h3>
              <p className="skill-group-lead">{g.lead}</p>
              <ul className="skill-list">
                {g.items.map((s) => (
                  <li className="skill-item" key={s.name}>
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-used">{s.used}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skill-other">
          <p className="skill-other-label">そのほか使用経験のあるもの</p>
          <div className="skill-other-tags">
            {otherSkills.map((s) => (
              <span className="skill-other-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
