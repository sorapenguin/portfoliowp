import gallery01 from '../assets/images/gallery01.jpg'
import gallery02 from '../assets/images/gallery02.jpg'
import gallery03 from '../assets/images/gallery03.jpg'
import gallery04 from '../assets/images/gallery04.jpg'

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
    productUrl: '#',
    githubUrl: '#',
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
    productUrl: '#',
    githubUrl: '#',
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
    title: '放置バトルゲーム (Android)',
    thumbnail: `${base}images/works/project-c/project-c-1-1.png`,
    description: '武器の自動生成・合成による指数的な攻撃力上昇、コイン・ジェムの二重通貨、オフライン報酬計算など、インクリメンタルゲームの核心メカニクスをKotlin + MVVMで実装したAndroidアプリです。',
    detail: `放置型インクリメンタルゲーム Android アプリ

武器の自動生成・合成システムを中心に、コインとジェムの二重通貨でゲームループを構成した放置バトルゲームです。毎秒生成される武器は同レベルのものが2つ揃うと自動で合成・上位進化し、指数関数的に増大する攻撃力でステージを自動攻略していく仕組みです。

アーキテクチャはSingle ActivityにNavigation ComponentとBottomNavigationViewを組み合わせたFragment構成を採用。ゲームロジックをMainViewModelに集約し、StateFlowでUIへリアクティブに状態を流すMVVMパターンで設計しています。永続化はSharedPreferencesを使い、アプリ終了時の経過時間から最大8時間分のオフライン報酬を再計算して復元します。

ゲームシステムとして、武器スロット管理（5〜50スロット、コインで拡張）・コイン投資型の攻撃力強化・ジェム消費による星生成確率の段階解除・10秒タップミニゲームなど複数の強化ルートを実装し、長期的な成長曲線を意識したバランス設計にしています。`,
    tech: ['Kotlin', 'Android', 'MVVM', 'StateFlow', 'Coroutines', 'Navigation Component', 'ViewBinding', 'Material Design 3', 'SharedPreferences', 'RecyclerView'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [
      {
        images: [
          `${base}images/works/project-c/project-c-1-1.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
          `${base}images/works/coming-soon.png`,
        ],
        caption: 'ホーム画面ではステージ番号・コイン・ジェムの現在値と最新20件の冒険ログを表示。武器タブでは自動生成された武器カードがグリッドに並び、同レベルの武器が揃うと自動合成で上位進化します。強化タブではコイン消費の攻撃力強化とジェム消費の星生成確率解除をそれぞれ管理でき、タップミニゲームで追加ジェムを獲得することもできます。',
      },
    ],
  },
  {
    slug: 'project-d',
    title: 'VPS 本番環境構成',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'VPS (Linux) 上で Docker Compose を使い nginx・Let\'s Encrypt・PostgreSQL を本番構成で運用するための設定をまとめたリポジトリです。セキュリティや運用を意識したインフラ設計を公開しています。',
    detail: '',
    tech: ['Docker', 'Docker Compose', 'nginx', "Let's Encrypt", 'PostgreSQL', 'Linux', 'Bash'],
    productUrl: null,
    githubUrl: '#',
    sections: [],
  },
]
