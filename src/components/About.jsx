const pillars = [
  {
    no: '01',
    title: '公開して、運用して、直し続ける',
    body: '作って終わりにせず、ドメインを取り、VPS に載せ、監視を付けて公開しています。障害通知の設定も、証明書の自動更新も、バックアップも自分で組みました。「動いている状態を保つ」ところまでが開発だと思っています。',
  },
  {
    no: '02',
    title: '題材に合わせて言語を選ぶ',
    body: 'CLI 演習は React、障害対応演習は .NET、経路トレースは Go、パズル配信は Ktor、問題演習は Django。慣れた 1 つに寄せず、その題材で自然な選択をしてきた結果、複数の言語で本番運用の経験が積み上がりました。',
  },
  {
    no: '03',
    title: 'AI は使うより検証する',
    body: 'ローカル LLM で問題の下書きを作り、レビュー・検証・反映を別工程に分けています。CLI 演習では AI エージェントに実際に問題を解かせ、解けない出題を機械的に洗い出しています。生成物をそのまま信じない仕組み作りが強みです。',
  },
]

const links = [
  { href: 'https://github.com/sorapenguin', label: 'GitHub（ホーム）' },
  { href: 'https://github.com/sorapenguin/portfolio-public', label: 'GitHub（ポートフォリオ公開用）' },
  { href: 'https://github.com/sorapenguin/games-android/releases', label: 'Android アプリ APK 配布' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          自己紹介 <span className="sub-title">About</span>
        </h2>
        <p className="section-lead">
          学習サービスを中心に個人開発をしています。進め方は 3 つに集約できます。
        </p>

        <div className="pillar-grid">
          {pillars.map((p) => (
            <div className="pillar" key={p.no}>
              <span className="pillar-no">{p.no}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="about-links">
          <span className="about-links-label">リンク</span>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
