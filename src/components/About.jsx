import img01 from '../assets/images/img01.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="about-title">
          自己紹介 <span className="sub-title">Self introduction</span>
        </h2>

        <p className="example">
          IT 学習系を中心とした Web サービス 6 本以上を、1 台の VPS 上で本番運用しています。「作って終わり」ではなく「公開して運用し、改善し続ける」を開発の軸にしています。
          TechQuiz（10 科目超・1 万問超）、RouteLab（Cisco CLI 演習・538 シナリオ）、InfraLab（障害対応演習・1,000 コンテンツ超）、GoLab（HTTP 経路学習）、JET（Java トレース 606 問）、puzzle-web（自動生成パズル 1,000 問超）— いずれも要件定義から設計・実装・デプロイ・監視・ユーザーフィードバック対応まで一人で担当しています。
          <br />
          <br />
          技術面では、題材に合わせて Python/Django・Kotlin/Ktor・TypeScript/React・C#/.NET・Go を使い分け、インフラは Docker / Traefik / Prometheus / Grafana / Cloudflare で共通基盤化。
          さらにローカル LLM（Ollama）+ Python の問題生成パイプライン（46 科目対応）や、AI エージェントに問題を実際に解かせる可解性検証など、「生成・レビュー・検証・反映」を分離した AI 活用の品質管理フローを設計・運用しているのが強みです。
        </p>

        <div className="about-image">
          <img src={img01} alt="ポートフォリオ紹介画像" />
        </div>

        <div className="card-area">
          <div className="card left-card">
            <h3 className="card-title">得意・興味のある分野</h3>
            <h3 className="card-subtitle">Interests</h3>
            <ul className="card-list">
              <li>バックエンド開発（Django・Ktor・ASP.NET Core・Go）</li>
              <li>本番VPS運用・インフラ監視（Docker・Traefik・Prometheus・Grafana）</li>
              <li>Android アプリ開発（Kotlin・Jetpack Compose・MVVM・KMP）</li>
              <li>LLM活用・コンテンツ品質パイプライン（Ollama・Python・AI検証）</li>
            </ul>
          </div>

          <div className="card right-card">
            <h3 className="card-title">関連リンク</h3>
            <h3 className="card-subtitle">Links</h3>
            <ul className="card-list">
              <li><a href="https://github.com/sorapenguin" target="_blank" rel="noopener noreferrer">GitHub（ホーム）</a></li>
              <li><a href="https://github.com/sorapenguin/games-android/releases" target="_blank" rel="noopener noreferrer">GitHub（Android ゲーム・APK 配布）</a></li>
              <li><a href="https://github.com/sorapenguin/portfolio-public" target="_blank" rel="noopener noreferrer">GitHub（ポートフォリオ・公開用）</a></li>
              <li><a href="https://quiz.sorapenguin.dev/" target="_blank" rel="noopener noreferrer">TechQuiz — IT 資格学習 Web サービス</a></li>
              <li><a href="https://routelab.sorapenguin.dev" target="_blank" rel="noopener noreferrer">RouteLab — CCNA/CCNP CLI シミュレーション問題集</a></li>
              <li><a href="https://runbook-lab.sorapenguin.dev" target="_blank" rel="noopener noreferrer">InfraLab — インフラ障害対応シナリオ演習（.NET / Blazor）</a></li>
              <li><a href="https://path-trace-lab.sorapenguin.dev" target="_blank" rel="noopener noreferrer">GoLab — HTTP 通信経路トレース学習（Go）</a></li>
              <li><a href="https://jet.sorapenguin.dev" target="_blank" rel="noopener noreferrer">JET — Java コードトレース問題集</a></li>
              <li><a href="https://puzzle.sorapenguin.dev" target="_blank" rel="noopener noreferrer">puzzle-web — ノノグラム・ヌリカベ・カックロ・ピクセルアート</a></li>
              <li><a href="https://stellarrise-web.sorapenguin.dev" target="_blank" rel="noopener noreferrer">StellarRise Web — Android RPG のブラウザ体験版</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}