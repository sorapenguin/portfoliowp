import img01 from '../assets/images/img01.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="about-title">
          自己紹介 <span className="sub-title">Self introduction</span>
        </h2>

        <p className="example">
          TechQuiz・RouteLab・puzzle-web など、資格学習・ネットワーク演習・パズルコンテンツを題材にした Web サービスを複数 VPS 上で設計・実装・公開運用しています。
          バックエンド（Django・Ktor）からインフラ（Docker・Traefik・Prometheus）・Android（Kotlin・Jetpack Compose・MVVM）まで、一気通貫で手がけています。
          <br />
          <br />
          ローカル LLM（Ollama / qwen2.5:14b）と Python を組み合わせた問題生成パイプラインを構築し、生成・レビュー・反映・品質ゲートを分けた継続運用フローを整備しています。
          「動くサービスとして公開・運用している」ことをゴールに据え、要件定義からリリース・運用まで一人で担当しています。
        </p>

        <div className="about-image">
          <img src={img01} alt="ポートフォリオ紹介画像" />
        </div>

        <div className="card-area">
          <div className="card left-card">
            <h3 className="card-title">得意・興味のある分野</h3>
            <h3 className="card-subtitle">Interests</h3>
            <ul className="card-list">
              <li>Webサービス開発・本番VPS運用（Django・Ktor・Docker・Traefik）</li>
              <li>Android アプリ開発（Kotlin・Jetpack Compose・MVVM）</li>
              <li>インフラ・監視設計（Prometheus・Grafana・Cloudflare）</li>
              <li>ローカルLLM活用・自動化パイプライン（Ollama・Python）</li>
            </ul>
          </div>

          <div className="card right-card">
            <h3 className="card-title">関連リンク</h3>
            <h3 className="card-subtitle">Links</h3>
            <ul className="card-list">
              <li><a href="https://github.com/sorapenguin" target="_blank" rel="noopener noreferrer">GitHub（ホーム）</a></li>
              <li><a href="https://github.com/sorapenguin/games-android/releases" target="_blank" rel="noopener noreferrer">GitHub（Android ゲーム・APK 配布）</a></li>
              <li><a href="https://github.com/sorapenguin/portfoliowp" target="_blank" rel="noopener noreferrer">GitHub（このポートフォリオのソース）</a></li>
              <li><a href="https://quiz.sorapenguin.dev/" target="_blank" rel="noopener noreferrer">TechQuiz — IT 資格学習 Web サービス</a></li>
              <li><a href="https://routelab.sorapenguin.dev" target="_blank" rel="noopener noreferrer">RouteLab — CCNA/CCNP CLI シミュレーション問題集</a></li>
              <li><a href="https://jet.sorapenguin.dev" target="_blank" rel="noopener noreferrer">JET — Java コードトレース問題集（253 問）</a></li>
              <li><a href="https://puzzle.sorapenguin.dev" target="_blank" rel="noopener noreferrer">puzzle-web — ノノグラム・ヌリカベ・カックロ・ピクセルアート</a></li>
              <li><a href="https://stellarrise-web.sorapenguin.dev" target="_blank" rel="noopener noreferrer">StellarRise Web — Android RPG のブラウザ体験版</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}