import gallery01 from '../assets/images/gallery01.jpg'
import gallery02 from '../assets/images/gallery02.jpg'
import gallery03 from '../assets/images/gallery03.jpg'
import gallery04 from '../assets/images/gallery04.jpg'

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
          '/images/works/project-a-1-1.png',
          '/images/works/project-a-1-2.png',
          '/images/works/project-a-1-3.png',
          '/images/works/project-a-1-4.png',
        ],
        caption: 'ポートフォリオ閲覧専用のワンクリックログイン機能を備えた認証画面では、通常ログインに加えて課金ユーザー向けの別ルートも用意しています。トップページではカテゴリー一覧の表示と同時にジェム購入プランの選択モーダル・クレジットカード入力フォームをオーバーレイ表示し、マイページではレベル・累計XP・ジェム数と過去1年の学習カレンダーで進捗を一望できます。',
      },
      {
        images: [
          '/images/works/project-a-2-1.png',
          '/images/works/project-a-2-2.png',
          '/images/works/project-a-2-3.png',
          '/images/works/project-a-2-4.png',
        ],
        caption: '問題選択画面では挑戦モード（新問・同一・間違い）や出題対象（未出題・ミス・ヒット・コンボ）、問題数、正答率による絞り込みを細かく設定できます。自動再生モードを有効にすると解答後に設定秒数で次の問題へ自動遷移し、解説を読みながらのながら学習をサポート。連続学習が完了すると自動再生完了画面に遷移し、今回の解答履歴や過去の履歴一覧へのナビゲーションが表示されます。',
      },
      {
        images: [
          '/images/works/project-a-3-1.png',
          '/images/works/project-a-3-2.png',
          '/images/works/project-a-3-3.png',
          '/images/works/project-a-3-4.png',
        ],
        caption: '解答履歴一覧ページでは、カテゴリーごとに全問題の習熟ステータス（未出題・ミス・ヒット・コンボ）をカラーバーで可視化しつつ、過去の各セッションを解答日時・問題数・正解数・正答率とともに一覧表示します。詳細ボタンからはセッション内の個別問題ごとの正誤確認もでき、学習の振り返りを詳細に行える設計です。',
      },
    ],
  },
  {
    slug: 'project-b',
    title: 'Coming Soon',
    thumbnail: '/images/works/coming-soon.png',
    description: '',
    detail: '',
    tech: [],
    productUrl: null,
    githubUrl: null,
    comingSoon: true,
  },
  {
    slug: 'project-c',
    title: 'Coming Soon',
    thumbnail: '/images/works/coming-soon.png',
    description: '',
    detail: '',
    tech: [],
    productUrl: null,
    githubUrl: null,
    comingSoon: true,
  },
  {
    slug: 'project-d',
    title: 'Coming Soon',
    thumbnail: '/images/works/coming-soon.png',
    description: '',
    detail: '',
    tech: [],
    productUrl: null,
    githubUrl: null,
    comingSoon: true,
  },
]
