import { Link } from 'react-router-dom'

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
          要件を決めるところから実装・公開・運用まで、ひとりで担当しています。学習系の Web
          サービスを中心に、いまも手を入れ続けているものを下に並べています。
        </p>

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
