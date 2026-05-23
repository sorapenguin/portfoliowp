import gallery01 from '../assets/images/gallery01.jpg'

const base = import.meta.env.BASE_URL

export const projects = [
  {
    slug: 'project-a',
    title: 'TechQuiz',
    thumbnail: gallery01,
    description: 'IT 知識をゲーミフィケーションで継続学習できるクイズ型 Web アプリ。VPS 本番構成・CI/CD・Prometheus 監視まで整備済み。',
    detail: `IT技術系クイズ学習プラットフォーム

PythonやAWS・Dockerなど実務直結のIT知識を、ゲーム的な仕掛けで継続学習できるWebアプリです。AI駆動開発によりスピード感を持って設計・実装し、「まず動くサービスとして使えるもの」をゴールに据えました。

インフラ面では、VPS（Linux）上にDockerでコンテナを分離し、Traefikをリバースプロキシとして配置。Cloudflare → Traefik（HTTPS終端・Let's Encrypt）→ Django（Gunicorn）→ PostgreSQL という構成でサービスを提供しています。GitHub Actions（deploy-quiz.yml）によりmasterへのpushでSSH・migrate・restartを自動化するCI/CDパイプラインを構築。django-prometheusによるメトリクス計装でPrometheus + Grafanaの統合監視に接続し、停止検知からDiscord通知まで自動化しています。管理画面はDjango独自認証とURL難読化で保護し、Traefikレイヤーでセキュリティヘッダー（middlewares.yml）を一括適用しています。

機能面では、XP・レベルアップ・スタミナ・ジェム（通貨）といったゲーミフィケーション要素を組み込み、学習継続を促す仕組みを実装。フリー・月額・生涯プランのサブスクリプション設計、ジェムによる追加コンテンツ解放、回答フィルタリング・学習カレンダー（GitHub風ヒートマップ）など、将来的に本サービスとして展開できる機能設計を意識しました。

UXでは「学習のハードルを下げながら継続意欲を高める」を軸に、トースト通知・プログレスバー・スタミナ回復カウントダウンなど即時フィードバックを丁寧に実装。デモアカウントで課金フローも体験できます。`,
    tech: ['Python', 'Django', 'Gunicorn', 'PostgreSQL', 'Docker', 'Traefik', 'VPS', "Let's Encrypt", 'GitHub Actions', 'Prometheus'],
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
    slug: 'project-c',
    title: '放置バトルゲーム',
    thumbnail: `${base}images/works/project-c/project-c-1.png`,
    description: 'Kotlin + Ktor フルスタック構成の放置型 RPG Android アプリ。Clean Architecture・デュアルセーブ・サーバー時刻ベースのオフライン計算を実装。',
    detail: `IdleGame（StellarRise）— 放置型RPGゲーム（Android × Ktor API）

Kotlin × Ktor のフルスタック構成で開発した放置型クリッカーRPGです。武器を自動生成・合成して攻撃力を高め、ステージを進めていくゲームとして設計しました。広告・クラウドセーブ・オフライン報酬・プレステージ（周回システム）など、リリースを見据えたゲームの標準的な機能を実際に組み込み、設計水準を意識しながら実装しています。

Android側はClean Architecture + MVVM + Repository パターンで設計し、MainViewModelがStateFlowでゲーム状態を一元管理、Coroutinesの1秒周期タイマーで戦闘シミュレーション・武器自動生成・合成を制御しています。ローカル保存はRoom（スキーマv10・10世代マイグレーション管理）+ DataStoreの2層構成とし、クラウドセーブはWorkManagerによる5分インターバルのバックグラウンド同期を採用。タイムスタンプ比較によるサーバー優先の競合解決と、ApiResult<T> sealed classによるオフライン/エラー状態管理を実装しています。バックエンド（GameApi）はKtor 3.1 + Exposed ORM + PostgreSQLの構成で、Dockerマルチステージビルド（Gradle Alpine → JRE Alpine）によりVPSイメージサイズを最小化。Traefikをリバースプロキシとして配置し、レート制限とヘルスチェックも実装しています。

機能面では11のFragment画面（メイン・武器管理・ショップ・星生成強化・プレステージ・実績・レシピ・設定ほか）を実装。武器は星レベルに応じて攻撃力が2.2倍ずつ指数的に増加し（★99で約10^25）、削除時に素材（鉄・銀・金の欠片）を生成してレシピクラフトに使用するシステムを持ちます。Prestige（永久アップグレード）は攻撃力・コイン獲得・オフライン時間延長・ジェムドロ率の4系統を用意し、ワールド制（10ワールド、Easy/Normal各5）でワールドごとに武器ステートを管理しています。

設計面で特に意識したのはオフライン報酬のチート耐性設計です。クライアントの端末時計ではなく /idlegame/time で取得したサーバー時刻を基準にオフライン経過時間を計算することで、端末時計の操作による不正取得を防いでいます。JWTトークンはEncryptedSharedPreferences（AES256-GCM）に暗号化して保存し、パスワードはBCryptハッシュで管理。クラウドセーブの登録はユーザー名の入力を不要とし（サーバー側でランダム生成）、パスワードのみでセーブデータを紐づける設計にすることでUXとセキュリティを両立しています。`,
    tech: ['Kotlin', 'Clean Architecture', 'MVVM', 'StateFlow', 'Coroutines', 'WorkManager', 'Retrofit', 'OkHttp', 'Room', 'DataStore', 'Navigation Component', 'EncryptedSharedPreferences', 'AdMob', 'Ktor', 'Exposed ORM', 'PostgreSQL', 'BCrypt', 'JWT', 'Docker', 'Traefik'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/idlegame-v1.1.0',
    githubUrl: null,
    sections: [
      {
        images: [`${base}images/works/project-c/project-c-2-1.png`],
        caption: 'ホーム画面。ステージ数・コイン・ジェムの現在値を上部に表示し、次のマイルストーン報酬の達成条件をバナーで確認できます。デイリーミッション受け取り通知と冒険ログ（1分ごとに更新）も表示されます。',
      },
      {
        images: [`${base}images/works/project-c/project-c-3-1.png`],
        caption: '武器画面。武器・レシピ・スロット・図鑑の4タブ構成で、総攻撃力と最高★数を確認しながら手動合成・自動合成（無料残り回数表示）・ジェム合成を操作できます。スロット満杯時は合成を促すメッセージが表示されます。',
      },
      {
        images: [`${base}images/works/project-c/project-c-4-1.png`],
        caption: '強化画面（輝石タブ）。攻撃力倍率・コイン倍率・オフライン延長・ジェムドロップUPのプレステージアップグレードをレベル上限付きで管理します。輝石はボス撃破で獲得でき、各強化の現在レベルと次レベルの効果が表示されます。',
      },
      {
        images: [`${base}images/works/project-c/project-c-5-1.png`],
        caption: 'ショップ画面。スキップ券・ジェム+10・コイン取得・攻撃力×2緊急強化・落下防止シールドの各広告視聴ボタンが並びます。1日の視聴回数上限と残り回数がリアルタイムで表示されます。',
      },
      {
        images: [`${base}images/works/project-c/project-c-6-1.png`],
        caption: '設定画面。SEエフェクト・振動のON/OFFを切り替えられるほか、アカウントセクションからクラウドセーブのログイン・登録が可能です（ゲストモードでは端末のみ保存）。記録セクションから実績・称号・統計を閲覧できます。',
      },
    ],
  },
  {
    slug: 'project-d',
    title: 'ノノグラム',
    thumbnail: `${base}images/works/project-d/project-d-1-1.png`,
    description: 'Jetpack Compose + Clean Architecture 構成の Android ノノグラムパズルゲーム。Python ソルバーによるパズル自動生成（100問投入済み）と Ktor バックエンドを組み合わせています。',
    detail: `ノノグラムパズル Android アプリ

数字ヒントを手がかりにマス目を塗りつぶすロジックパズル「ノノグラム」をスマートフォン向けに実装したアプリです。パズルのクオリティを担保するため、ゲームロジックを Python で先行開発し、論理的に一意解が導けるパズルだけを選別してバックエンドに投入する自動生成パイプラインを構築しました。「推測なしで解ける」という制約を設計の起点に置いたことが特徴です。

アプリアーキテクチャは MVVM + Clean Architecture + Repository パターンを採用し、Hilt で依存性を一元管理しています。UI は Jetpack Compose (Material3) で構築し、状態管理には StateFlow を使用。ローカルデータは Room（パズル進捗を 500ms debounce 後に JSON 保存）と DataStore Preferences（スタミナ・ヒント数・スキップチケット）で管理し、Cache-first 設計（Room キャッシュ → 不足時に API フェッチ）で通信コストを最小化。常時5問表示＋5問バッファをクリア後に自動補充する表示管理も実装しています。WorkManager によるバックグラウンド処理でパズルのプリフェッチとスタミナ回復通知を行い、起動時のラグを最小化しています。

パズル生成は Python で独立したパイプラインとして構築しました。solver.py（制約伝播ソルバー・バックトラックなし）が論理的一意解を検証し、generator.py が密度・連結性・対称性の美的フィルタを適用して採用パズルを選別。validator.py で solution/ヒントを検証後、upload.py が bulk API で一括登録します。計100問（5×5=34問 / 10×10=33問 / 15×15=33問）を自動生成・投入済みです。バックエンド側には FreeMarker 管理画面でパズルデータの CRUD も整備しています。

ゲーム内経済は AdMob 報酬動画広告と連動しており、広告視聴でスタミナ・ヒント・スキップチケットを補充できる設計になっています。スタミナは 10 分ごとに 1 回復（最大 8）・広告視聴で +6 回復、ヒントは初期 10 枚・広告視聴で +10 枚、スキップチケットは初期 3 枚・最大 10 枚（広告補充）という具体的な数値で経済バランスを調整しました。ポートフォリオ配布用に広告なしビルドバリアント（portfolio フレーバー）も用意し、デモ配布と製品配布を Gradle ビルドで切り替えています。インフラは Docker Compose + Traefik + Let's Encrypt で本番構成を組み、Prometheus + Grafana でメトリクス監視も整備しています。`,
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Clean Architecture', 'MVVM', 'Room', 'DataStore', 'WorkManager', 'Retrofit', 'AdMob', 'Ktor', 'Exposed ORM', 'FreeMarker', 'PostgreSQL', 'Docker', 'Traefik', "Let's Encrypt", 'Python'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/nonogram-v1.0.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-d/project-d-1-1.png`,
          `${base}images/works/project-d/project-d-1-2.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'ホーム画面ではログイン時にボーナスアイテム（スキップ券など）が付与され、スタミナ残量と次回回復時間がリアルタイムで表示されます。Mini 5×5 / Normal 10×10 / Large 15×15 のカテゴリタブでステージを切り替えられ、クリア済みステージは明るく、スタミナ不足のステージにはロックと「⚡解除」ボタンが表示されます。',
      },
      {
        images: [
          `${base}images/works/project-d/project-d-2-1.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'プレイ画面では上部に列ヒント・左端に行ヒントの数字が並び、グリッドをタップで「塗り」、×ボタン選択中は「除外マーク」と操作モードを切り替えられます。「ヒント」ボタンで解の一部を開示（残枚数をリアルタイム表示）、「戻す」ボタンで直前操作を取り消せます。Large 15×15 の複雑なパズルも論理的一意解が保証されています。',
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
    slug: 'project-g',
    title: 'AWS 構成案（Terraform）',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: '⚠️ 実環境デプロイなし・設計案のみ。VPS本番4サービスをAWSマネージドサービスで再構成した場合のTerraform IaC設計案。VPC・ALB・ECS Fargate・RDS・Secrets Manager を活用した本番想定アーキテクチャ。',
    detail: `AWS インフラ構成案（Terraform IaC）

⚠️ これは AWS 環境への実際のデプロイではなく、VPS 本番構成をベースに AWS への移行を設計・Terraform コードとして落とし込んだ構成案です。terraform fmt による構文確認は済んでいますが、実際の AWS 環境への適用は行っていません。

VPS（Xserver VPS / Ubuntu）上で稼働中の4サービスを AWS マネージドサービスで再構成した場合の設計案です。IaC（Terraform）で全リソースを管理し、コードのみで環境を再現できることを目指しました。

アーキテクチャは Internet → ALB（パブリックサブネット×2 / 2AZ）→ ECS Fargate（プライベートサブネット）→ RDS PostgreSQL 16（DB サブネット）の多層構造です。ALB のパスベースルーティングで GameApi・EcApi・Quiz・EC-Nginx の4サービスを単一エンドポイントに集約しています。VPC は6サブネット構成（パブリック×2 / プライベート×2 / DB×2）で2AZ に分散し、NAT Gateway を経由してプライベートサブネットからのアウトバウンド通信を制御しています。

Terraform ファイルは機能ごとに15ファイルに分割しています（main.tf / variables.tf / vpc.tf / security_groups.tf / iam.tf / ecr.tf / rds.tf / secrets.tf / cloudwatch.tf / alb.tf / ecs_cluster.tf + サービス別4ファイル）。タグ・サブネット ID は main.tf の locals に集約し、各リソースファイルから local.common_tags / local.private_subnet_ids を参照することで変更箇所を1ファイルに集中させています。

設計上のポイントは3点です。①Secrets Manager によるシークレット分離：VPS の .env 管理をゼロにし、ECS タスク定義の secrets ブロックで起動時に自動注入することでコードにシークレットを書かない設計を実現。②IAM 最小権限設計：ECS タスク実行ロールに AmazonECSTaskExecutionRolePolicy と GetSecretValue（対象シークレットのみ）を付与。③コスト比較：NAT Gateway（~$35/月）が最大のコスト要因であり月額概算は ~$80〜となるため、VPS（~$13/月）を本番継続採用する判断の根拠を設計段階で把握しています。

VPS（Traefik）と ALB でのルーティングの対比も意識した設計で、VPS ではラベルベースでドメイン単位ルーティング、ALB ではパスベースルールで1エンドポイントに4サービスを集約するという、同じ構成を異なるアプローチで実現する違いを整理しています。この設計を通じて、VPC のサブネット分割と NAT Gateway の役割、ECS Fargate タスク定義（Secrets Manager 注入・CloudWatch ログ連携）、Terraform でのリソース間参照と依存関係管理、IAM ロール最小権限設計の考え方を整理しました。`,
    tech: ['AWS', 'Terraform', 'VPC', 'ALB', 'ECS Fargate', 'RDS', 'ECR', 'Secrets Manager', 'CloudWatch', 'ACM', 'IAM'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-b',
    title: 'ECサイト',
    thumbnail: `${base}images/works/project-b/project-b-1-3.png`,
    description: 'Spring Boot → Ktor へのバックエンド移植 EC サイト。URL ゼロ変更・JVM メモリ 500MB→150MB 削減を達成し、VPS 本番稼働中。',
    detail: `ECサイト型Webアプリケーション（Spring Boot → Ktor 移植）

PHPフロントエンドを稼働させたまま、バックエンドをSpring Boot（Java）からKtor（Kotlin）へ移植したプロジェクトです。PHPが叩くAPIエンドポイントをURLゼロ変更で移行することでフロントへの影響を排除し、JVMメモリを約500MB（Spring Boot）→約150MB（Ktor）に削減してVPS 4GB制限内への収容を実現しました。フロントは描画のみを担うPHPシェルとし、ビジネスロジックはすべてKtor REST APIに集約することでフロントとバックエンドの責務を明確に分離しています。

インフラはDocker Composeで4サービス（Nginx / PHP-FPM / Ktor / PostgreSQL）をコンテナ分離。Nginxをリバースプロキシとして配置し、/api/* へのリクエストをKtorへ転送することでPHPとAPIを同一オリジン構成にまとめています。認証はJWT + BCryptを採用し、一般ユーザーとADMINロールをJWTクレームで管理。PHP側の\`$2y$\`ハッシュをKtor側で\`$2a$\`に正規化して検証することで、移行前後の相互認証互換性を維持しています。管理者ログインはワンタイムコードによる2段階認証を実装しています。

ユーザー向け機能として、キーワード・カテゴリ・価格帯・在庫状態での複合絞り込み検索とページネーションを備えた商品一覧、お気に入り登録、クーポンコードの割引適用、カートの数量変更・削除・購入フロー、注文履歴閲覧を実装しています。管理者側はChart.jsを用いた月別売上グラフ・人気商品ドーナツチャートのダッシュボード、商品CRUD（カテゴリ管理・公開フラグ切り替え含む）、注文ステータス管理、クーポン発行・一覧の4機能を備えています。`,
    tech: ['PHP', 'Kotlin', 'Ktor', 'Exposed ORM', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'nginx', 'JWT', 'BCrypt', 'JavaScript', 'Chart.js'],
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
    slug: 'project-e',
    title: 'AlchemyGame',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Kotlin 製の放置系錬金術 Android ゲーム。MVVM + Clean Architecture + UseCase で設計し、80種以上のレシピ・プレステージ・IAP を備えるプロダクション構成。',
    detail: `AlchemyGame — 放置系錬金術ゲーム（Android × Ktor API）

Kotlin製の放置系錬金術ゲームです。MVVM + Clean Architecture + UseCase パターンで設計し、ビジネスロジックを CraftUseCase / MissionUseCase / AchievementUseCase に分離しています。GameState は immutable な data class として定義し、全ての状態更新を copy() で新インスタンス生成することで状態の一貫性を保証。UseCase が CraftResult sealed class で状態変化とイベントを一括返却することで UI と疎結合を実現し、GameEvent sealed class でログ・チュートリアル・実績・ランクアップを型安全に処理しています。

コアゲームループは1秒周期のCoroutinesタイマーで4元素（火・水・土・風）を自動収集し、80種以上のレシピを5段階ティアで管理する発見型コンビネーションシステムを実装しています。錬金炉は非同期マルチスロット生産（最大3スロット）を採用し、装備レベルに応じてオートプロデュースのスロット数が拡張されます。

進行・リテンション設計として、クラフト・発見ごとにXPが加算されるアルケミストランク（5段階昇格）、収集速度・スロット数・ストレージ上限の永続ボーナスを付与するプレステージ、UTC0リセットの5種ランダムデイリーミッション、最大100日マイルストーン報酬付きのログインカレンダー、20種以上のアチーブメント、8ステップのチュートリアルを実装しています。

オフライン進捗はサーバー時刻取得によりデバイス時計改ざんを防止し、装備レベルに応じた上限変動と3日以上放置でのアシスタントギフト付与を実装。JWTトークンはEncryptedDataStoreに暗号化して保存し、GameApi（Ktor）とのWorkManagerバックグラウンド同期でクラウドセーブを実現しています。IAP（スターターパック・ゴールドパック・広告除去・オフライン延長・ヒントブック）の課金設計と広告報酬（オフライン2倍・ゴールドボーナス・ミッション2倍）も実装しています。`,
    tech: ['Kotlin', 'Clean Architecture', 'MVVM', 'UseCase', 'StateFlow', 'Coroutines', 'WorkManager', 'DataStore', 'Retrofit', 'OkHttp', 'Navigation Component', 'AdMob', 'IAP', 'Ktor', 'Exposed ORM', 'PostgreSQL', 'JWT', 'BCrypt', 'Docker', 'Traefik'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-i',
    title: 'インフラ構成（VPS）',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'VPS 1台で4サービスを Traefik + Docker Compose で同居運用する個人インフラ。Cloudflare・Prometheus 監視・自動バックアップ・Runbook まで一貫して構築・運用中。',
    detail: `個人 VPS インフラ構成

VPS（Xserver VPS / Ubuntu）1台上で Traefik + Docker Compose を用いて4サービスを同居運用しているインフラ構成です。RAM 4GB の制限内でゲーム API・EC サイト・問題演習サービスを稼働させるため、Traefik のラベルベースルーティングにより追加コストなしで複数ドメインを一元管理しています。

ネットワーク構成は Cloudflare（DNS・CDN・DDoS 防御）→ Traefik（SSL 終端・ルーティング）→ 各コンテナ（Docker Bridge 内部通信）→ shared-PostgreSQL の多層構造です。TLS 証明書は Let's Encrypt 自動更新で管理し、Cloudflare プロキシで実 VPS IP を隠蔽しています。PostgreSQL はサービスごとに DB を分けつつコンテナを1つで共有することで運用コストを抑えています。docker-compose.prod.yml / local.yml の環境分離で本番・開発の設定差をファイルレベルで管理しています。

セキュリティ面では、SSH ポート変更・公開鍵認証のみ（パスワード認証無効）、Traefik による HTTPS 強制、Cloudflare WAF、管理画面系エンドポイントへのアクセス制限を実装しています。

監視は Prometheus + Grafana でコンテナリソース・レスポンスタイムを可視化し、Discord Webhook で異常検知時の即時通知を実装。PostgreSQL 自動バックアップスクリプトの定期実行と Runbook（障害対応手順）の整備まで含む、本番運用を意識した構成にしています。`,
    tech: ['Docker', 'Docker Compose', 'Traefik', 'Nginx', 'PostgreSQL', 'Prometheus', 'Grafana', 'Cloudflare', 'Ubuntu', "Let's Encrypt"],
    productUrl: null,
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
