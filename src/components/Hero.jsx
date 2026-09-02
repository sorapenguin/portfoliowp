const stats = [
  { value: '6', unit: 'サービス', label: '本番稼働中の Web サービス' },
  { value: '21', unit: '件', label: '公開した制作物' },
  { value: '21', unit: '個', label: '保有資格（AWS 11 冠 ほか）' },
  { value: '1', unit: '台', label: 'すべてを載せている VPS' },
]

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Web / インフラ / Android — 個人開発</p>

        <h2 className="hero-headline">
          作ったものを<span className="hero-em">本番で動かし続ける</span>
          <br />
          ところまでを、ひとりでやっています。
        </h2>

        <p className="hero-lead">
          要件定義から実装・デプロイ・監視・ユーザー対応まで一貫して担当し、学習系の Web
          サービス 6 本を 1 台の VPS で公開しています。下のリンクからすべて実際に触れます。
        </p>

        <div className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">
                {s.value}
                <span className="hero-stat-unit">{s.unit}</span>
              </span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a
            className="hero-btn hero-btn-primary"
            href="#works"
            onClick={(e) => scrollTo(e, 'works')}
          >
            制作物を見る
          </a>
          <a
            className="hero-btn hero-btn-ghost"
            href="https://routelab.sorapenguin.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            稼働中のサービスを触る ↗
          </a>
        </div>
      </div>
    </section>
  )
}
