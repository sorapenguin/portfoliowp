import gallery01 from '../assets/images/gallery01.jpg'

const base = import.meta.env.BASE_URL

export const projects = [
  {
    slug: 'project-a',
    title: 'TechQuiz',
    thumbnail: gallery01,
    description: 'Python / AWS / Dockerなど実務直結のIT知識を、XP・レベル・スタミナ等のゲーミフィケーションで継続学習できるクイズ型Webアプリです。\nVPS上でDocker＋Nginx＋Django（Gunicorn）＋PostgreSQLを本番構成で運用し、SSL対応や管理画面の二重認証などセキュリティも意識して設計しました。',
    detail: `IT技術系クイズ学習プラットフォーム

PythonやAWS・Dockerなど実務直結のIT知識を、ゲーム的な仕掛けで継続学習できるWebアプリです。AI駆動開発によりスピード感を持って設計・実装し、「まず動くサービスとして使えるもの」をゴールに据えました。

インフラ面では、VPS（Linux）上にDockerでコンテナを分離し、nginxをリバースプロキシとして配置。Let's Encrypt によるSSL/HTTPS対応、Gunicorn＋Django でWSGIサーバーを構成、PostgreSQLを本番DBとして採用しています。管理画面はnginxのBasic認証＋Django独自認証の二重防御とURL難読化で保護し、本番運用を意識したセキュリティ設計にしています。

機能面では、XP・レベルアップ・スタミナ・ジェム（通貨）といったゲーミフィケーション要素を組み込み、学習継続を促す仕組みを実装。フリー・月額・生涯プランのサブスクリプション設計、ジェムによる追加コンテンツ解放、回答フィルタリング・学習カレンダー（GitHub風ヒートマップ）など、将来的に本サービスとして展開できる機能設計を意識しました。

UXでは「学習のハードルを下げながら継続意欲を高める」を軸に、トースト通知・プログレスバー・スタミナ回復カウントダウンなど即時フィードバックを丁寧に実装。デモアカウントで課金フローも体験できます。`,
    tech: ['Python', 'Django', 'PostgreSQL', 'Docker', 'nginx', 'VPS', "Let's Encrypt"],
    productUrl: 'https://quiz.sorapenguin.dev/',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-a/project-a-1-1.png`,
          `${base}images/works/project-a/project-a-1-2.png`,
          `${base}images/works/project-a/project-a-1-3.png`,
          `${base}images/works/project-a/project-a-1-4.png`,
        ],
        caption: 'ポートフォリオ閲覧専用のワンクリックログイン機能を備えた認証画面では、通常ログインに加えて課金ユーザー向けの別ルートも用意しています。トップページではカテゴリー一覧の表示と同時にジェム購入プランの選択モーダル・クレジットカード入力フォームをオーバーレイ表示し、マイページではレベル・累計XP・ジェム数と過去1年の学習カレンダーで進捗を一望できます。',
      },
      {
        images: [
          `${base}images/works/project-a/project-a-2-1.png`,
          `${base}images/works/project-a/project-a-2-2.png`,
          `${base}images/works/project-a/project-a-2-3.png`,
          `${base}images/works/project-a/project-a-2-4.png`,
        ],
        caption: '問題選択画面では挑戦モード（新問・同一・間違い）や出題対象（未出題・ミス・ヒット・コンボ）、問題数、正答率による絞り込みを細かく設定できます。自動再生モードを有効にすると解答後に設定秒数で次の問題へ自動遷移し、解説を読みながらのながら学習をサポート。連続学習が完了すると自動再生完了画面に遷移し、今回の解答履歴や過去の履歴一覧へのナビゲーションが表示されます。',
      },
      {
        images: [
          `${base}images/works/project-a/project-a-3-1.png`,
          `${base}images/works/project-a/project-a-3-2.png`,
          `${base}images/works/project-a/project-a-3-3.png`,
          `${base}images/works/project-a/project-a-3-4.png`,
        ],
        caption: '解答履歴一覧ページでは、カテゴリーごとに全問題の習熟ステータス（未出題・ミス・ヒット・コンボ）をカラーバーで可視化しつつ、過去の各セッションを解答日時・問題数・正解数・正答率とともに一覧表示します。詳細ボタンからはセッション内の個別問題ごとの正誤確認もでき、学習の振り返りを詳細に行える設計です。',
      },
    ],
  },
  {
    slug: 'project-b',
    title: 'ECサイト',
    thumbnail: `${base}images/works/project-b/project-b-1-3.png`,
    description: 'PHP + Spring Boot を組み合わせて構築したECサイトです。商品検索・カート・クーポン・お気に入りといったユーザー向け購入フローに加え、売上グラフ・注文管理・クーポン発行を備えた管理者ダッシュボードを実装しています。',
    detail: `ECサイト型Webアプリケーション

PHPとSpring Bootを組み合わせた構成で、実際のECサービスを意識した購入フローと管理機能を一から実装したプロジェクトです。フロントは描画のみを担うPHPシェルとし、ビジネスロジックはすべてSpring Boot REST APIに集約することでフロントとバックエンドの責務を明確に分離。バニラJSのfetch()でAPIを呼び出す構成にすることで、フレームワークに頼らずDOM操作・非同期処理・エラーハンドリングを自前で実装する力を養うことを意図しています。

インフラはDocker Composeで4サービス（nginx / PHP / Spring Boot / PostgreSQL）をコンテナ分離し、nginxをリバースプロキシとして配置。/api/* へのリクエストをSpring Bootへ転送することでCORSを回避し、フロントとAPIを同一オリジン構成にまとめています。認証にはJWT（JJWT）を採用し、一般ユーザーとADMINロールをJWTクレームで管理。管理者ログインにはワンタイムコードによる2段階認証を実装し、本番運用を見据えたセキュリティ設計にしています。

ユーザー向け機能として、キーワード・カテゴリ・価格帯・在庫状態での複合絞り込み検索とページネーションを備えた商品一覧、お気に入り登録、クーポンコードの割引適用、カートの数量変更・削除・購入フロー、注文履歴閲覧を実装しています。管理者側はChart.jsを用いた月別売上グラフ・人気商品ドーナツチャートのダッシュボード、商品CRUD（カテゴリ管理・公開フラグ切り替え含む）、注文ステータス管理、クーポン発行・一覧の4機能を備え、実際の運用シーンを想定した管理画面設計を意識しました。`,
    tech: ['PHP', 'Spring Boot', 'Java', 'PostgreSQL', 'Docker', 'nginx', 'JWT', 'JavaScript', 'Chart.js'],
    productUrl: 'https://ec.sorapenguin.dev/login.php',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-b/project-b-1-1.png`,
          `${base}images/works/project-b/project-b-1-2.png`,
          `${base}images/works/project-b/project-b-1-3.png`,
          `${base}images/works/project-b/project-b-1-4.png`,
        ],
        caption: 'ポートフォリオ閲覧用のワンクリックデモログイン（管理者・一般ユーザー）を備えたログイン画面と、入力バリデーション付きの会員登録画面。商品一覧ではキーワード検索・価格帯フィルター・在庫ありのみ絞り込み・カテゴリタブ切り替えに対応し、各商品カードのハートボタンからお気に入り登録が可能です。商品詳細では画像・価格・在庫状態・説明を確認しながらお気に入りに追加できます。',
      },
      {
        images: [
          `${base}images/works/project-b/project-b-2-1.png`,
          `${base}images/works/project-b/project-b-2-2.png`,
          `${base}images/works/project-b/project-b-2-3.png`,
          `${base}images/works/project-b/project-b-2-4.png`,
        ],
        caption: 'カートページでは商品の数量変更とクーポンコードの適用が可能で、合計金額を確認しながら購入手続きを進められます。購入完了画面では注文番号・注文日時・合計金額と注文内容の詳細が表示されます。注文履歴ではステータス（未処理・完了）とともに過去の全注文を一覧確認でき、お気に入りページではハート登録した商品をまとめて閲覧できます。',
      },
      {
        images: [
          `${base}images/works/project-b/project-b-3-1.png`,
          `${base}images/works/project-b/project-b-3-2.png`,
          `${base}images/works/project-b/project-b-3-3.png`,
          `${base}images/works/project-b/project-b-3-4.png`,
        ],
        caption: '管理者ログイン後は6桁コードによる二段階認証が必要で、ポートフォリオ閲覧用に認証コードは自動入力済みです。ダッシュボードでは月間売上・注文件数・在庫切れ商品数のサマリーに加え、月別売上グラフと人気商品TOP10のドーナツチャートでビジネス状況を可視化しています。商品管理では商品名の自動生成・カテゴリ管理・画像選択で商品を追加でき、注文管理ではステータスの更新管理が行えます。',
      },
      {
        images: [
          `${base}images/works/project-b/project-b-4-1.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'クーポン管理画面では、クーポンコード・割引率（%）・有効期限を指定して新規クーポンを発行できます。発行したクーポンはカートページでユーザーが適用でき、合計金額から割引が反映されます。',
      },
    ],
  },
  {
    slug: 'project-c',
    title: '放置バトルゲーム',
    thumbnail: `${base}images/works/project-c/project-c-1-1.png`,
    description: 'Kotlin + Ktor のフルスタック構成で開発した放置型RPGゲームアプリです。MVVM × StateFlow × Coroutines による状態管理と、Room・DataStore・クラウドセーブの3層永続化を組み合わせており、オフライン時間の報酬計算をサーバー時刻ベースで行うチート耐性設計など、プロダクションを意識した設計を実装しています。',
    detail: `IdleGame — 放置型RPGゲーム（Android × Ktor API）

Kotlin × Ktor のフルスタック構成で開発した放置型クリッカーRPGです。武器を自動生成・合成して攻撃力を高め、ステージを進めていくゲームとして設計しました。広告・クラウドセーブ・オフライン報酬・プレステージ（周回システム）など、リリースを見据えたゲームの標準的な機能を実際に組み込み、設計水準を意識しながら実装しています。

Android側はMVVM + AndroidViewModel + StateFlowで状態管理を行い、1秒ごとの武器自動生成・自動合成・60秒ごとのバトル判定をCoroutinesのtimerで制御しています。ローカル保存はRoom + DataStoreの2層構成とし、ネットワーク通信はRetrofit + OkHttpで実装。クラウドセーブは5分インターバルの非同期保存に制限してサーバー負荷を抑えています。バックエンドはKtor 3.1 + Exposed ORM + PostgreSQL + HikariCPの構成で、Docker Composeでコンテナ化。Traefikをリバースプロキシとして配置し、レート制限とヘルスチェックも実装しています。

機能面では8つのナビゲーション画面（メイン・武器管理・ショップ・星生成強化・プレステージ・実績・レシピ・設定）を実装。武器は星レベルに応じて攻撃力が2.2倍ずつ指数的に増加し、削除時に素材（鉄・銀・金の欠片）を生成してレシピクラフトに使用するシステムを持ちます。Prestige（永久アップグレード）は攻撃力・コイン獲得・オフライン時間延長・ジェムドロ率の4系統を用意し、周回プレイの動機付けとしています。

設計面で特に意識したのはオフライン報酬のチート耐性設計です。クライアントの端末時計ではなく /idlegame/time で取得したサーバー時刻を基準にオフライン経過時間を計算することで、端末時計の操作による不正取得を防いでいます。JWTトークンはEncryptedSharedPreferences（AES256-GCM）に暗号化して保存し、パスワードはBCryptハッシュで管理。クラウドセーブの登録はユーザー名の入力を不要とし（サーバー側でランダム生成）、パスワードのみでセーブデータを紐づける設計にすることでUXとセキュリティを両立しています。`,
    tech: ['Kotlin', 'Android MVVM', 'AndroidViewModel', 'StateFlow', 'Coroutines', 'Retrofit', 'OkHttp', 'Room', 'DataStore', 'Navigation Component', 'EncryptedSharedPreferences', 'AdMob', 'Ktor', 'Exposed ORM', 'PostgreSQL', 'HikariCP', 'BCrypt', 'JWT', 'Docker'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/idlegame-v1.0.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-c/project-c-1-1.png`,
          `${base}images/works/project-c/project-c-1-2.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'ホーム画面ではステージ番号・コイン・ジェムの現在値、デイリーミッション（武器合成・プレイ時間・広告視聴）の進捗と冒険ログをリアルタイム表示。武器画面では各武器の星レベル・攻撃力を確認しながら手動合成・自動合成（3分間無料）・ジェム消費によるジェム合成が可能で、スロットが満杯になると合成を促すメッセージが表示されます。',
      },
      {
        images: [
          `${base}images/works/project-c/project-c-2-1.png`,
          `${base}images/works/project-c/project-c-2-2.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: '強化画面では武器スロット拡張（コイン消費・指数的コスト増加）、コイン消費による攻撃力ボーナスの段階強化、ジェム消費の★2/★3生成確率解除（★3はLv.50解放）、輝石によるプレミアム強化を管理。ショップ画面では広告視聴（ジェム+10・1日5回上限）、10分インターバルのコイン獲得広告、15分インターバルの攻撃力2倍ブーストを利用できます。',
      },
      {
        images: [
          `${base}images/works/project-c/project-c-3-1.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: '設定画面ではSEエフェクト・振動のON/OFFを切り替えられるほか、アカウントセクションからクラウドセーブのログイン・登録が可能です（ゲストモード時はデータを端末のみで管理）。記録セクションから実績一覧と累計撃破数・最大到達ステージ・総獲得コインなどの統計を確認できます。',
      },
    ],
  },
  {
    slug: 'project-d',
    title: 'ノノグラム',
    thumbnail: `${base}images/works/project-d/project-d-1-1.png`,
    description: 'Jetpack Compose + Hilt + Room で構築した Android ノノグラム（お絵かきロジック）パズルゲームです。Python 製の制約充足ソルバーによるパズル自動生成・難易度評価パイプラインと、Ktor + PostgreSQL バックエンドを組み合わせ、スタミナ回復・広告報酬・ヒント購入といったゲーム内経済システムも実装しています。',
    detail: `ノノグラムパズル Android アプリ

数字ヒントを手がかりにマス目を塗りつぶすロジックパズル「ノノグラム」をスマートフォン向けに実装したアプリです。パズルのクオリティを担保するため、ゲームロジックを Python で先行開発し、論理的に一意解が導けるパズルだけを選別してバックエンドに投入する自動生成パイプラインを構築しました。「推測なしで解ける」という制約を設計の起点に置いたことが特徴です。

アプリアーキテクチャは MVVM + Repository パターンを採用し、Hilt で依存性を一元管理しています。UI は Jetpack Compose (Material3) で構築し、状態管理には StateFlow を使用。ローカルデータは Room（パズル進捗）と DataStore Preferences（スタミナ・ヒント数・スキップチケット）で管理し、バックエンド（Ktor + PostgreSQL）とは Retrofit で同期します。WorkManager によるバックグラウンド処理でパズルのプリフェッチとスタミナ回復通知を実装し、起動時のラグを最小化しています。

パズル生成・難易度評価は Python で独立したパイプラインとして構築しました。制約充足ソルバー（バックトラックなし・制約伝播のみ）が論理的一意解を検証し、充填率・連結性・ヒント長の上限といった複数フィルタを通過したものだけを採用。難易度スコアは「ソルバーの反復回数」と「最難パスのボトルネック」を主軸とした 1〜5 段階評価で定量化し、MINI（5×5）・NORMAL（10×10）・LARGE（15×15）の 3 カテゴリに分類して bulk API で一括登録します。

ゲーム内経済は AdMob 報酬動画広告と連動しており、広告視聴でスタミナ・ヒント・スキップチケットを補充できる設計になっています。スタミナは 10 分ごとに 1 回復（最大 8）、ヒントは初期 10 枚・広告視聴で +10 枚、スキップチケットは初期 3 枚・1 日 3 回広告で補充可能という具体的な数値で経済バランスを調整しました。ポートフォリオ配布用に広告なしビルドバリアント（portfolio フレーバー）も用意し、デモ配布と製品配布を Gradle ビルドで切り替えています。インフラは Docker Compose + Traefik + Let's Encrypt で本番構成を組み、Prometheus + Grafana でメトリクス監視も整備しています。`,
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'DataStore', 'WorkManager', 'Retrofit', 'AdMob', 'Ktor', 'Exposed ORM', 'PostgreSQL', 'JWT', 'Docker', 'Traefik', "Let's Encrypt", 'Python'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [
      {
        images: [
          `${base}images/works/project-d/project-d-1-1.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'パズル一覧画面では Mini 5×5 / Normal 10×10 / Large 15×15 のカテゴリタブでステージを切り替えられ、右上にクリア済み問題数を表示。スタミナ（最大8・7分で1回復）が不足しているステージにはロックと「⚡解除」ボタンが表示され、スタミナ消費と解放の動線が一目でわかる設計です。',
      },
      {
        images: [
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'ゲームプレイ画面では上部に列ヒント数字・左端に行ヒント数字が表示され、中央のグリッドをタップで「塗り」、長押しで「×マーク（除外）」と操作を切り替えられます。右上のヒントボタンで解の一部を開示でき、消費枚数はリアルタイムで残量表示されます。解答完了時にはアニメーションとともにクリア確認が行われ、進捗がローカル DB とバックエンドに保存されます。',
      },
      {
        images: [
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'ショップ画面では「ヒント補充」「スタミナ回復」「スキップチケット取得」それぞれのボタンから AdMob 報酬動画広告を再生でき、視聴完了後に即時付与されます。1 日あたりの視聴上限や 10 分クールダウンもリアルタイムでカウントダウン表示され、過剰消費を防ぐゲームバランス上の制約が UI に反映されています。',
      },
    ],
  },
  {
    slug: 'project-e',
    hidden: true,
    title: 'このポートフォリオ',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'React + Vite で構築したポートフォリオサイト。GitHub Actions による自動デプロイ、OGP 設定、ESLint / Prettier によるコード品質管理を実装しています。',
    detail: `ポートフォリオサイト

React + Vite で構築した SPA ポートフォリオです。GitHub Pages にホスティングし、master ブランチへの push で GitHub Actions が自動ビルド・デプロイする CI/CD パイプラインを構築しています。

OGP（og:image / og:title / og:description）と Twitter Card を設定し、SNS やメッセージアプリでのリンク共有時にサムネイルが表示されるよう対応しています。

ESLint（react-hooks / react-refresh）と Prettier を導入し、コードスタイルの一貫性を担保しています。`,
    tech: ['React', 'Vite', 'JavaScript', 'GitHub Actions', 'GitHub Pages'],
    productUrl: 'https://sorapenguin.github.io/portfoliowp/',
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-f',
    hidden: true,
    title: '準備中',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: '現在準備中です。',
    detail: '',
    tech: [],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
  {
    slug: 'project-g',
    hidden: true,
    title: '準備中',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: '現在準備中です。',
    detail: '',
    tech: [],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
  {
    slug: 'project-h',
    hidden: true,
    title: '準備中',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: '現在準備中です。',
    detail: '',
    tech: [],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
]
