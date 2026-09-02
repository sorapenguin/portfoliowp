import { Link } from 'react-router-dom'

const facts = [
  { label: '本番稼働中の Web サービス', value: '6' },
  { label: '公開した制作物', value: '21' },
  { label: '保有資格', value: '21' },
  { label: '載せている VPS', value: '1 台' },
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

        <dl className="hero-facts">
          {facts.map((f) => (
            <div className="hero-fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <p className="hero-actions">
          <Link
            className="hero-btn"
            to="/"
            onClick={(e) => scrollTo(e, 'works')}
          >
            制作物を見る
          </Link>
          <a
            className="hero-textlink"
            href="https://routelab.sorapenguin.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            稼働中のサービスを触ってみる ↗
          </a>
        </p>
      </div>
    </section>
  )
}
