import img01 from '../assets/images/img01.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="about-title">
          自己紹介 <span className="sub-title">Self introduction</span>
        </h2>

        <p className="example">
          バックエンド（Django・Spring Boot・Ktor）・Androidアプリ（Kotlin・Jetpack Compose・MVVM）・インフラ（Docker・VPS・Traefik・PostgreSQL）まで、設計から本番デプロイまでを一貫して手がけています。
          JWT認証・BCryptハッシュ・サーバー時刻ベースのチート耐性設計など、運用を意識したセキュリティ設計を各プロダクトで実践してきました。
          <br />
          <br />
          「動くコードを書く」だけでなく、なぜその技術スタックを選ぶのか・どう責務を分離するのかを意識した設計を重視しています。
          制作物はいずれも実際に公開・配布しており、要件定義からリリースまでを一人で担当しています。
        </p>

        <div className="about-image">
          <img src={img01} alt="ポートフォリオ紹介画像" />
        </div>

        <div className="card-area">
          <div className="card left-card">
            <h3 className="card-title">得意・興味のある分野</h3>
            <h3 className="card-subtitle">Interests</h3>
            <ul className="card-list">
              <li>Webアプリ開発（Django / Spring Boot）</li>
              <li>API設計・DB設計（PostgreSQL）</li>
              <li>Dockerを用いた環境構築・デプロイ</li>
            </ul>
          </div>

          <div className="card right-card">
            <h3 className="card-title">関連リンク</h3>
            <h3 className="card-subtitle">Links</h3>
            <ul className="card-list">
              <li><a href="https://github.com/sorapenguin" target="_blank" rel="noopener noreferrer">GitHub（ホーム）</a></li>
              <li><a href="https://github.com/sorapenguin/portfolio-public" target="_blank" rel="noopener noreferrer">GitHub（Portfolio）</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}