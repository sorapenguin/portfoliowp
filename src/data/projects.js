import gallery01 from '../assets/images/gallery01.jpg'

const base = import.meta.env.BASE_URL

export const projects = [
  // ===== TOP 4 =====
  {
    slug: 'project-a',
    title: 'TechQuiz',
    thumbnail: gallery01,
    description: 'Python / Django 製 IT 学習サービス。8 カテゴリ・589+ 問・ゲーミフィケーション搭載。ポートフォリオ閲覧用デモ（quiz.sorapenguin.dev）のほか、実ユーザー向けに tech-lab.sorapenguin.dev として β 公開中。Docker / Traefik / Prometheus / CI/CD まで一貫して個人構築・運用。',
    detail: `IT技術系クイズ学習プラットフォーム（Django 6.0 / Python 3.12）

Python・AWS・Docker など実務直結の IT 知識を、ゲーム的な仕掛けで継続学習できる Web アプリです。8 カテゴリ・589+ 問の問題データを整備し、VPS 本番稼働中です。ポートフォリオ閲覧用デモ（quiz.sorapenguin.dev）のほか、実ユーザー向けに tech-lab.sorapenguin.dev として β 公開しており、RouteLab・JET など複数の学習サービスと同じ VPS・運用基盤上で動作しています。

インフラ面では、Docker Compose で Traefik・Django・Redis・PostgreSQL をコンテナ分離しています。Cloudflare → Traefik（HTTPS 終端・60req/min レート制限）→ Django（Gunicorn）→ PostgreSQL の多層構成で、GitHub Actions により push → SSH → migrate → restart の CI/CD を自動化しています。Prometheus + Grafana による統合監視で停止検知から Discord 通知まで自動化。Redis キャッシュでカテゴリ問題 ID リストの DB 負荷を抑制し、静的ファイルは WhiteNoise で効率配信しています。

機能面では、XP・レベル・スタミナ・ジェムのゲーミフィケーション要素を実装しています。問題フィルタリングは「ステータス（未出題/ミス/ヒット/コンボ）・正答率・経過時間・難易度・サブカテゴリ」の 5 軸で絞り込め、サブカテゴリ折り畳み複数選択 UI・設定秒数で自動進行する自動再生・👍/👎 フィードバック機能・英語カテゴリでの音声読み上げ（TTS）自動切替を実装しています。フリー・月額・生涯プランのサブスクリプション設計とジェムによる問題解放、学習カレンダー（GitHub 風ヒートマップ）も備えます。

セキュリティ・運用設計として、二重のレート制限（ログイン・登録・質問閲覧を IP ベースで制御）、reCAPTCHA v2 によるボット対策、構造化ログ、SendGrid を用いたメール配信フォールバック設計を実装しています。管理画面は URL 難読化で保護し、機能フラグで新規登録・ゲスト開始のオン/オフを制御可能です。`,
    tech: ['Python', 'Django', 'Gunicorn', 'PostgreSQL', 'Redis', 'Docker', 'Traefik', 'VPS', 'GitHub Actions', 'Prometheus', 'Grafana', 'SendGrid'],
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
        caption: 'トップページでは Python・SAA・Docker・CCNP など 8 カテゴリ（589 問+）が一覧表示され、サイトの特徴説明とジェム購入プランも確認できます。ログイン画面ではポートフォリオ閲覧専用のワンクリックログイン（無料・課金ユーザー向け 2 種）を提供しており、採用担当者が即時に全機能を試せる設計です。モバイル・PC 両対応のレスポンシブデザインで、PC では 4 カラムのカテゴリグリッドを表示します。',
      },
      {
        images: [
          `${base}images/works/project-a/project-a-2-1.png`,
          `${base}images/works/project-a/project-a-2-2.png`,
          `${base}images/works/project-a/project-a-2-3.png`,
          `${base}images/works/project-a/project-a-2-4.png`,
        ],
        caption: 'カテゴリ別（Python・SAA など）の問題選択画面では、挑戦モード（新問・同一・間違い）・出題対象（未出題/ミス/ヒット/コンボ）・難易度・問題数の軸でフィルタリングできます。即時判定モードや自動再生モードで学習スタイルを切り替えられ、解放済み問題数と残り寄り石数も表示されます。問題画面では「二択に絞る」ジェム機能で 4 択を 2 択に絞り込め（正解 +3XP ボーナス付き）、解答後は選択した選択肢がハイライト表示されます。',
      },
      {
        images: [
          `${base}images/works/project-a/project-a-3-1.png`,
          `${base}images/works/project-a/project-a-3-2.png`,
          `${base}images/works/project-a/project-a-3-3.png`,
          `${base}images/works/project-a/project-a-3-4.png`,
        ],
        caption: 'クイズ結果画面では正解数・正答率を表示し、今回のセッション履歴確認や問題選択への帰還ができます。マイページではレベル・総 XP・ジェム数・ランキング順位（全ユーザー中の上位 %）に加え、過去 1 年の学習カレンダー（GitHub 風ヒートマップ）でアクティビティを可視化しています。解答履歴ページではカテゴリ別の問題ステータス（未出題・ミス・ヒット・コンボ）をカラーバーで確認でき、モバイル・PC 両レイアウトに対応しています。',
      },
    ],
  },
  {
    slug: 'project-routelab',
    title: 'RouteLab',
    thumbnail: `${base}images/works/project-routelab/project-routelab-1.png`,
    description: 'CCNA / CCNP 向け CLI シミュレーション型ネットワーク問題集。選択式・手入力・写経の 3 モードで 260 問以上を練習でき、コマンドエンジンをフロントで完結させる設計。React + TypeScript + Zustand + TailwindCSS 製・VPS 本番稼働中。',
    detail: `RouteLab — CLIシミュレーション型ネットワーク問題集（React × TypeScript）

CCNA / CCNP 向けのネットワーク設定演習サービスです。260 問以上のシナリオ（CCNA ASSOC / CCNP ENARSI / トラブルシューティングの 3 カテゴリ）を、選択式・手入力・写経（audioSequence 案内）の 3 モードで練習できます。OSPF / EIGRP / BGP / VPN / ACL / STP / NAT / IPv6 など CCNA〜CCNP の主要プロトコルをすべてカバーしています。

コアは CLI エミュレーターエンジンとして独自設計した 7 モジュール構成です。CommandParser.ts が入力文字列を IOS コマンド構造に分解し、CommandProcessor.ts がデバイス状態（ルーティングテーブル・インターフェース・プロトコル設定）を更新します。ModeTransition.ts が enable / configure terminal などのモード遷移を管理し、ScoringEngine.ts が部分点を計算。サーバー不要で全処理をフロントで完結させる設計により、show コマンドの出力も ShowOutputGenerator.ts で IOS 風フォーマットに動的生成します。

コマンドの重複入力を自動検出してグレーアウトする blocked チェックと、全シナリオに定義した audioSequence（写経ヒントシーケンス）を実装しています。実ユーザーのバグ報告を Express サーバー（port 3999）+ Vite proxy で jsonl ファイルに保存する独自のデバッグレポーターを組み込み、収集したフィードバックを元に継続的にシナリオ品質を改善しています。tsx バリデーションスクリプトで全シナリオ × 全ステップを自動検証し、写経モードの null 件数ゼロを保証しています。

フロントエンドは React + TypeScript + Vite + Zustand + TailwindCSS 構成。シナリオは JSON ファイル 1 つで独立管理し、デバイス状態・許可コマンド・採点条件・写経シーケンスを完全定義するため、JSON を追加するだけで新シナリオを拡張できます。VPS 上で Docker + Traefik 構成で公開しています。`,
    tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'TailwindCSS', 'Express', 'Docker', 'Traefik', 'VPS'],
    productUrl: 'https://routelab.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-routelab/project-routelab-1.png`,
          `${base}images/works/project-routelab/project-routelab-2.png`,
          `${base}images/works/project-routelab/project-routelab-3.png`,
        ],
        caption: '3ペイン構成の演習画面。左に問題文・ネットワーク構成の説明、中央に CLI ターミナル（コマンド履歴・カーソル入力）、右に現在のモードと選択可能なコマンド一覧が並びます。コマンドを正しく入力してクリアすると 70〜100pt の採点結果とともに「問題クリア！」が表示されます。OSPF / EIGRP / BGP など実際の試験頻出シナリオを、コマンドを手打ちしながら体験できる設計です。',
      },
    ],
  },
  {
    slug: 'project-m',
    title: 'Webパズルサービス',
    thumbnail: `${base}images/works/project-m/project-m-1.png`,
    description: 'ノノグラム・ヌリカベ・カックロ・ピクセルアートの 4 コンテンツをブラウザで遊べる Web パズルプラットフォーム。各パズルを PostgreSQL に DB 化して Ktor API で配信し、VPS 本番稼働中。カックロは接続性保証付きアルゴリズムで Python 自動生成、ピクセルアートは段階解放制を実装。',
    detail: `Webパズルサービス — Ktor × Vanilla JS × PostgreSQL

ノノグラム・ヌリカベ・カックロ・ピクセルアートの 4 コンテンツをブラウザで遊べるパズルプラットフォームです。各パズルを VPS 上の PostgreSQL に DB 化し、Ktor 製 API を通じて配信しています。

ノノグラムは Python 制約伝播ソルバーで論理的一意解を保証しながら自動生成（300 問）。ヌリカベは独自アルゴリズムで生成した 300 問を投入。カックロは Connected Growth アルゴリズムで接続性・孤島ゼロを保証しながら Python 自動生成。ピクセルアートは 8×8 / 16×16 のサイズ別に 80 問以上を収録し、段階解放制を実装しています。

is_published カラムによる管理画面からの公開・非公開制御を実装し、Android アプリのバックエンドと Web API を同一 Ktor サーバー上で共存させる設計を採用しています。フロントエンドはビルドツールなしの Vanilla HTML+CSS+JS で動作し、軽量・高速な配信を実現しています。

Docker コンテナを自前 VPS に配置し、Traefik + Let's Encrypt で HTTPS 公開。puzzle.sorapenguin.dev として実稼働中です。`,
    tech: ['Ktor', 'Kotlin', 'Vanilla JS', 'PostgreSQL', 'Python', 'Docker', 'Traefik', "Let's Encrypt"],
    productUrl: 'https://puzzle.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-m/project-m-1.png`,
          `${base}images/works/project-m/project-m-3.png`,
          `${base}images/works/project-m/project-m-4.png`,
          `${base}images/works/project-m/project-m-5.png`,
        ],
        caption: 'ピクセルアートは数字のヒントを頼りにマスを色分けして完成させるカラーパズル。ノノグラムは 10×10 グリッドに数字ヒントを塗り・マーク操作で解くロジックパズル（300 問・バックトラックなし一意解保証）。カックロは斜め方向の合計数を手がかりにマスを埋めるクロスワード型ロジックパズルで、接続性保証付き Python アルゴリズムで自動生成。ヌリカベは島と海を分けて盤面を完成させる 300 問を収録しています。',
      },
      {
        images: [
          `${base}images/works/project-m/project-m-2.png`,
        ],
        caption: 'トップページではノノグラム・ヌリカベ・カックロ・ピクセルアートの 4 コンテンツを選択できます。各コンテンツは PostgreSQL に DB 化した問題を Ktor API 経由で配信し、ユーザー進捗管理・段階解放制を実装しています。',
      },
    ],
  },
  {
    slug: 'project-c',
    title: 'StellarRise',
    thumbnail: `${base}images/works/project-c/project-c-1.png`,
    description: '武器を自動生成・合成して攻撃力を高め、ステージを進める放置型 RPG Android アプリ。Android 開発の出発点となった作品で、クラウドセーブ・オフライン報酬・プレステージなどリリース水準の機能を Kotlin × Ktor フルスタック構成で設計・実装しました。',
    detail: `StellarRise — 放置型RPGゲーム（Android × Ktor API）

Android 開発を本格的に始めた最初のゲームアプリです。Kotlin × Ktor のフルスタック構成で開発した放置型クリッカーRPGで、武器を自動生成・合成して攻撃力を高め、ステージを進めていくゲームとして設計しました。クラウドセーブ・オフライン報酬・プレステージ（周回システム）・報酬広告フローなど、リリースを見据えたゲームの標準的な機能を実際に組み込み、設計水準を意識しながら実装しています。報酬広告フローは独自の AdManager クラスで制御しており、ポートフォリオ用ビルド（portfolio フレーバー）では外部広告 SDK に依存せず 3 秒のモック動作で報酬フローを確認できます。

Android 側は Clean Architecture + MVVM + Repository パターンで設計し、ゲーム状態を一元管理しながら戦闘シミュレーション・武器自動生成・合成を制御しています。ローカル保存は継続的な機能追加に対応した Room + DataStore の2層構成とし、クラウドセーブはバックグラウンドで定期同期する設計を採用。サーバー側のタイムスタンプを優先してセーブデータの競合を解決し、オフライン・エラー状態を型安全に管理しています。バックエンドは Ktor + PostgreSQL の構成で、Docker によるイメージ軽量化と Traefik によるレート制限・ヘルスチェックも実装しています。

メイン・武器管理・ショップ・強化・プレステージ・実績・設定など複数の画面で各要素を整理しています。武器は星レベルに応じて攻撃力が指数的に増加し（★99 で約 10²⁵）、削除時に素材を生成できます（レシピシステムは BuildConfig フラグで休眠中・内部データは互換維持済み）。プレステージ（永久アップグレード）で攻撃力・コイン獲得・オフライン時間延長・ジェムドロ率を強化でき、10 ワールド構成でワールドごとに武器ステートを管理しています。サポートキャラクターの育成でダンジョン進行をアシストする仕組みや、スペシャルボス撃破で輝石を時間蓄積するシステムも備え、機能追加に対応した拡張性の高いローカル保存設計を採用しています。

設計面で特に意識したのはオフライン報酬のチート耐性設計です。端末時計ではなくサーバー時刻を基準にオフライン経過時間を計算することで、時計操作による不正取得を防いでいます。JWT トークンは端末内で暗号化保存し、パスワードは BCrypt でハッシュ管理。クラウドセーブはパスワードのみでデータを紐づける設計にすることで、UX とセキュリティを両立しています。`,
    tech: ['Kotlin', 'MVVM', 'Clean Architecture', 'StateFlow', 'Coroutines', 'Room', 'DataStore', 'WorkManager', 'Retrofit', 'Navigation Component', 'Ktor', 'PostgreSQL', 'JWT', 'Docker'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/idlegame-v1.2.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-c/project-c-8-1.png`,
          `${base}images/works/project-c/project-c-8-2.png`,
          `${base}images/works/project-c/project-c-8-3.png`,
          `${base}images/works/project-c/project-c-8-4.png`,
        ],
        caption: 'ホーム画面ではステージ・コイン・ジェム・ATK 倍率・輝石を確認しながら、チュートリアル目標カードと冒険ログ（1分ごとに自動更新）をチェックできます。武器タブでは★1〜の武器を最大 30 スロットで管理し、手動合成・自動合成（無料 3 回/日）・1分合成（ジェム消費）を操作できます。輝石強化タブでは攻撃力倍率・コイン倍率・オフライン時間延長など転生で積み上がる恒久強化をアップグレードでき、ショップでは星の扉（スキップ券）・星の祝福（ジェム+10）・星の加護（コイン獲得）の報酬広告ボタンが並びます。',
      },
      {
        images: [
          `${base}images/works/project-c/project-c-7-1.png`,
          `${base}images/works/project-c/project-c-7-2.png`,
          `${base}images/works/project-c/project-c-7-3.png`,
          `${base}images/works/project-c/project-c-7-4.png`,
        ],
        caption: 'サポートキャラ画面では N/R/SR/SSR レアリティ 24 体を輝石ガチャで収集でき、所持した全キャラの ATK% が常時加算されます（PixelArt アイコン全 24 体組み込み済み）。モンスター図鑑では撃破した通常モンスター・ボスが順にアンロックされ、総討伐数とともに進行を記録します。統計画面では最高到達ステージ・総討伐数・現在ワールド（W1 星明り界など 10 ワールド構成）・武器スロット使用状況を一覧確認できます。クラウドセーブ（アプリ名 StellarRise 表示）では、パスワードのみで既存データへのログインと新規作成が行えます。',
      },
    ],
  },

  // ===== MORE =====
  {
    slug: 'project-jet',
    title: 'JET',
    thumbnail: `${base}images/works/project-jet/project-jet-1.png`,
    description: 'Java コードの実行トレース・読解練習に特化した 253 問の Web 問題集。「このコードが動くとどうなるか」を答える形式で、Java SE 17 Silver 頻出テーマを中心に収録。React + TypeScript + Vite 製・VPS 本番稼働中。',
    detail: `JET — Java コード読解・実行トレース問題集（React × TypeScript）

Java Execution Tracer の略。Java のコードを読み、実行結果・変数の値・出力を答えるコードトレース形式の問題集です。知識問題ではなく「このコードが実際に動くとどうなるか」を問う形式で、Java の実行順序・スコープ・型変換・オーバーロード・継承・ラムダ・Stream などの理解を深めることを目的にしています。

253 問を収録し、Java SE 17 Silver の頻出テーマ（継承・ポリモーフィズム・例外・ラムダ・Stream・型変換など）を中心に、通常問題と苦手対策（HARD）問題に分類して学習できます。

フロントエンドは React + TypeScript + Vite で構成し、問題フィルタリング・回答確認・進捗管理 UI を実装しています。VPS 上で Docker + Traefik 構成で公開しています。`,
    tech: ['React', 'TypeScript', 'Vite', 'Docker', 'Traefik', 'VPS'],
    productUrl: 'https://jet.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-jet/project-jet-1.png`,
          `${base}images/works/project-jet/project-jet-2.png`,
        ],
        caption: 'コードトレース解答画面。Java コードと行ハイライトによるステップ解説が上部に表示され、下部の 4 択から実行結果を選択します。問題一覧（ダーク UI）では Silver / Silver HARD のタブで分類し、タグ・ステップ数・問題番号を確認しながら学習できます。253 問を収録し、Java SE 17 Silver 頻出テーマ（継承・ポリモーフィズム・ラムダ・Stream など）をコードを読む形式で練習できます。',
      },
    ],
  },
  {
    slug: 'project-e',
    title: 'AlchemyGame',
    thumbnail: `${base}images/works/project-e/project-e-1-1.png`,
    description: '4 元素から 80 種以上の素材を発見・合成していく放置系錬金術ゲームです。プレステージごとに錬金術→料理→生物進化→宇宙→文明と 5 段階でワールドが広がる設計を採用し、各ワールド独自のピクセルアートアイコン（全5ワールド合計 325 枚以上）・22 種のアチーブメント・クラウドセーブ・引継ぎコードを MVVM + UseCase パターンで実装しています。',
    detail: `AlchemyGame — 放置系錬金術ゲーム（Android × Ktor API）

Kotlin 製の放置系錬金術ゲームです。MVVM + Clean Architecture + UseCase パターンで設計し、合成・ミッション・実績などのビジネスロジックを各 UseCase に分離しています。ゲーム状態は immutable な設計で一貫性を保証し、状態変化と UI イベントを疎結合に扱う仕組みを整えています。

コアゲームループは 4 元素（火・水・土・風）の自動収集から始まり、80 種以上のレシピを段階的に発見・合成していく仕組みです。錬金炉は最大 3 スロットの並列生産に対応し、装備レベルに応じてオートプロデュースの枠が広がります。最終素材の合成でプレステージ（昇華）が発動し、錬金術→料理→生物進化→宇宙創造→文明史の 5 ワールドが段階的に解放される設計で、各ワールドの在庫・発見素材・プレステージ状態を独立して管理しています。

継続プレイ設計として、クラフトや発見でランクが上がるアルケミストランク（5 段階）、収集速度・スロット数・ストレージ上限の永続強化を得るプレステージ、毎日リセットされる 5 種ランダムデイリーミッション、最大 100 日分のログインカレンダー報酬、22 種のアチーブメント、7 ステップのチュートリアルを実装しています。

オフライン進捗はサーバー時刻を基準に計算してデバイス時計の改ざんを防止し、長期放置時にはアシスタントギフトを付与する設計にしています。JWT トークンは端末内で暗号化保存し、Ktor バックエンドとのバックグラウンド同期でクラウドセーブを実現。スターターパック・広告除去・オフライン延長・ヒントブックなどの IAP をコードレベルで実装しています（現在 BuildConfig フラグ ENABLE_IAP_UI=false により UI 休眠中・クローズドテスト前確認事項）。`,
    tech: ['Kotlin', 'MVVM', 'Clean Architecture', 'UseCase', 'StateFlow', 'Coroutines', 'DataStore', 'EncryptedSharedPreferences', 'WorkManager', 'Retrofit', 'Navigation Component', 'Ktor', 'PostgreSQL', 'JWT', 'Docker'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/alchemygame-v1.0.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-e/project-e-1-1.png`,
          `${base}images/works/project-e/project-e-1-2.png`,
        ],
        caption: 'ラボ画面では火・水・土・風の 4 元素を採集器で自動収集しながら、2 素材を選んで調合し 80 種以上の素材を発見していきます。オフライン中も採集が続き、起動時に放置時間分の素材をまとめて受け取れます。デイリーミッション（調合 20 回・gold 消費など）が毎日リセットされ、継続プレイを促します。',
      },
      {
        images: [
          `${base}images/works/project-e/project-e-2-1.png`,
          `${base}images/works/project-e/project-e-2-2.png`,
        ],
        caption: '錬成書（図鑑）では T1〜T7 のティア別に発見済み素材を管理でき、素材を選ぶと必要な基礎素材・調合コストを確認しながら「ツリー錬成」で中間素材から一括生成できます。工房の実績タブでは錬金術ランク・累計 XP・ログイン記録に加え、大錬金術師（調合 1000 回）などのアチーブメント達成状況を確認できます。',
      },
      {
        images: [
          `${base}images/works/project-e/project-e-3-1.png`,
          `${base}images/works/project-e/project-e-3-2.png`,
        ],
        caption: 'ラボの調合パネルでは2素材を選ぶと結果のプレビューが表示され、「調合する」でゴールドを消費して即時合成します。各素材にはワールド固有のピクセルアートアイコンが割り当てられており（全5ワールド合計 325 枚以上）、デイリーミッション（調合 20 回・Gold 消費）が毎日リセットされ継続プレイを促します。錬成書のティア別ビューでは T1:6/6・T2:14/14・T3:15/15・T4:14/14 などの発見進捗をリアルタイム確認でき、未発見素材がグリッド前方に配置されます。',
      },
      {
        images: [
          `${base}images/works/project-e/project-e-4-1.png`,
          `${base}images/works/project-e/project-e-4-2.png`,
          `${base}images/works/project-e/project-e-4-3.png`,
        ],
        caption: '機器タブでは火・水・土・風の採集器を Gold で強化し、Lv.15（MAX）では各採集器が 0.5 個/分 + 15G/秒 を自動収集します。錬成炉タブでは最大3スロットで並列バッチ生産が可能で、放置中に中間素材を同時生産します（残り時間テキスト表示）。設定画面のクラウドセーブでは有効期限 72 時間・1 回限りの引継ぎコードを発行し、別端末への安全な移行を実現します。バージョン 0.1.0・クローズドテスト準備段階の作品です。',
      },
    ],
  },
  {
    slug: 'project-l',
    title: 'StellarRise Web',
    thumbnail: `${base}images/works/project-l/project-l-1.png`,
    description: 'StellarRise（Android 放置 RPG）の採用担当者向け Web デモ版。TypeScript + Vite で実装し、インストール不要でブラウザから即プレイ可能。Docker コンテナを自前 VPS（Traefik + HTTPS）に配置し、実稼働公開中。',
    detail: `StellarRise Web デモ — TypeScript × Vite × Docker

Android アプリ「StellarRise」の採用担当者向け Web 体験版です。APK のインストールなしにブラウザで即プレイできるよう、TypeScript + Vite でフロントエンドを実装しました。

ゲスト自動起動・デモ向け初期値設定を追加し、登録不要でゲームの核心部分をすぐに体験できるよう整備しています。Android 版と同じ Ktor バックエンドと通信し、CORS 設定によってWebからのアクセスを許可しています。

インフラ面では Docker コンテナを自前 VPS（Ubuntu）に配置し、Traefik をリバースプロキシとして HTTPS で公開。Cloudflare DNS の A レコードでサブドメインを設定し、Let's Encrypt による自動証明書更新を実現しています。フロントエンド（TypeScript）・API（Ktor）・インフラ（VPS / Traefik / DNS）を一人で構築し、ポートフォリオとして実稼働中です。`,
    tech: ['TypeScript', 'Vite', 'Docker', 'Traefik', 'Cloudflare', "Let's Encrypt", 'Ktor'],
    productUrl: 'https://stellarrise-web.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-l/project-l-1.png`,
        ],
        caption: 'ブラウザで即プレイできる StellarRise Web デモ。バトル画面ではステージ・ATK・敵 HP・バトルログをリアルタイムで確認できます。デイリーミッション・ブースト・強化など Android 版の主要機能をそのまま体験でき、GitHub・APK ダウンロード・ポートフォリオへのリンクも画面上部に表示しています。',
      },
    ],
  },
  {
    slug: 'project-j',
    title: 'StarForge',
    thumbnail: `${base}images/works/project-j/project-j-1-1.png`,
    description: 'モンスターを合成・育成しながら 50 フロアのダンジョンを攻略する Android ゲームです。休憩エリアではノノグラムパズルで資源を獲得でき、塗り絵でモンスターを彩ることもできます。独自 Canvas エンジン・プロシージャルダンジョン生成・A* 経路探索・サーバー時刻ベースのスタミナ管理など多数のシステムを Kotlin で個人設計・実装し、F1〜F50 突破を 100 シード自動テストで検証済みです。',
    detail: `StarForge — 複合ジャンル Android ゲーム（Kotlin × DataStore × Retrofit）

Kotlin 製のモンスター育成合成 × ターン制ローグライク × ノノグラムパズル × 塗り絵を統合した Android アプリです。4 つのゲームモードを 1 アプリに収め、独自 Canvas レンダリングエンジン・プロシージャルダンジョン生成・A* 経路探索を含む多数のシステムを MVVM + Clean Architecture パターンで設計・実装しています。

## ゲーム体験

**基本ループ**: ノノグラムで★とかけらを集め → ショップで仲間を増やし → 合成/育成/装備強化でチームを強化 → ダンジョン 50 フロアを攻略 → 休憩エリアでノノグラム祠や旅商人を利用

**ダンジョン**: BSP プロシージャル生成でフロアごとに異なるマップが生成されます。視界・フォグオブウォーを実装した独自 Canvas で描画し、ターン制移動・攻撃・スキル使用を手動または AUTO で操作します。AUTO 探索は「視界内の敵を優先 → ドロップ回収 → 未探索エリアへ」の 3 段優先度で A* 経路探索を実行し、HP 低下・ボス出現時に自動停止します。ボスは F10/20/30/40/50 に 5 体配置され、F40 の星核皇帝（HP 3000・浄化ゲージ 100）と F50 の特異点（HP 5346・封印ゲージ 30）がエンディングへの関門になります。死亡時はかけら・EXP・ゴールドを持ち帰り、素材はロストする緊張感のある設計です。

**モンスター育成**: T1〜T7 × 5 タイプの計 35 体を定義。同ティア合成は確定昇格（既知レシピ）、異ティア合成はランダム昇格という合成ルールで発見要素を持たせています。最大 3 体のサポートパーティを編成でき、タイプ（ATK/DEFN/AREA/HEAL/LUCK）に応じた効果がダンジョン探索を補助します。マスタリーアップグレードで余剰コピーをキャラ強化に還元できます。

**ノノグラム**: 5×5・10×10・15×15 の 3 サイズをサーバー API または builtin フォールバックから取得。フィル/マークモード切替・Undo・ヒントチケット・途中保存・再開をすべて実装。クリア報酬の★は 1 回のみ付与され、重複付与を防止しています。

**塗り絵**: 35 体のモンスターを 8 色パレットで彩る塗り絵モード。途中保存・再開・完成保存をすべて実装し、PixelArt キャラ画像を assets から直接描画しています。

**エンディング**: F50 クリアで演出と報酬（暗黒鉱石 x5・星核 x3・600G + かけら）が表示されます。クリア後も探索とコレクションを継続できます。

## 技術構成

- **言語**: Kotlin 1.9.22 / minSdk 24 / targetSdk 35
- **アーキテクチャ**: MVVM + Clean Architecture / StateFlow（ゲーム状態）+ SharedFlow（演出イベント）二本立て
- **UI**: Fragment + Navigation Component + ViewBinding + XML Layout + Canvas カスタム View 3 種
- **永続化**: DataStore Preferences + Gson（immutable GameState を JSON 直列化）+ version フィールドによるマイグレーション
- **通信**: Retrofit + OkHttp（GameAPI 時刻同期 / ノノグラム API 配信）
- **テスト**: JUnit 4 ユニットテスト + 独自進行シミュレーター（100 シード・Full Balance）

## 技術的な工夫

**サーバー時刻ベースのスタミナ管理**
端末時計に依存せずサーバー時刻（GET /starforge/time）を基準にスタミナ回復を計算します。時刻逆転・7 日超過の特殊ケースも専用ロジックで処理し、端末時計操作による不正回復を防止しています。StaminaRecovery.applyServerTime() にすべてのケースをカバーするユニットテストを整備しています。

**完全 immutable ゲーム状態 + normalized() 自動修復**
GameState を data class で定義し、すべての状態変化は copy() で新インスタンスを生成します。ロード時に normalized() を実行することで null フィールド・不正値・廃止フラグのマイグレーションを自動修復し、旧セーブとの後方互換性を担保しています。

**A* 経路探索 × AUTO 探索エンジン**
DungeonGame と AutoExplore の役割を分離し、フロアレイアウト・敵配置・スキルドロップを独立したデータ構造で管理します。AUTO 探索は視界内敵優先 → ドロップ回収 → 出口の 3 段優先度で A* 経路を計算し、HP 低下・ボス出現時に確実に自動停止します。

**日替わりショップの決定論的抽選**
日付文字列をシードとした Random で抽選するため、同じ日は常に同じ品揃えになります。サーバー不要でクライアント完結し、テスタビリティも確保しています。

**進行シミュレーターによるバランス検証**
実ゲームロジックを使ったシミュレーターで Standard/Active 各 100 シード × F1〜F50 突破を自動検証します。進行不能 0 件・星界試練 3 特性 × 100 状態・武装/防護各経路 200 状態をすべて期待値クリアしたことを確認後にリリース判断する設計です。

## 品質保証

| テスト種別 | 内容 | 実行時間目安 |
|-----------|------|------------|
| Smoke | Standard/Active 各 6 seed / F50 突破 / 星界試練 1 経路 | 約 85 秒 |
| Regression | Standard/Active 各 24 seed / 3 特性 / 報酬上限 12 件 | 約 1 分 38 秒 |
| Full Balance | Standard/Active 各 100 seed / 星界試練 × 武装・防護全経路 | 約 6 分 12 秒 |
| 手動チェックリスト | 実機動作（ダンジョン/合成/装備/ノノグラム/塗り絵/設定） | docs/closedtest_checklist.md |

## AI 駆動開発

仕様設計・バランス設計・実機確認を自分が担当し、Kotlin 実装を Claude Code / Codex（TASK 単位の仕様書渡し）、UIレビューを ChatGPT に委譲するワークフローで開発しています。

## 現在の状態

- 自動テスト済み: F1〜F50 突破（100 シード）/ 星界試練 3 特性 / 報酬上限 / 武装・防護経路分離
- 実機手動確認済み: ホーム / ダンジョン探索 / AUTO / 合成 / 装備強化 / キャラ育成・スキル編成 / ノノグラム / ショップ / 設定
- 手動確認待ち: 星界試練全バリアント実機 / エンディング実機
- バージョン: 0.1.0 / クローズドテスト準備段階`,
    tech: ['Kotlin', 'MVVM', 'Clean Architecture', 'StateFlow', 'Coroutines', 'DataStore', 'Gson', 'Retrofit', 'OkHttp', 'Navigation Component', 'Canvas', 'JUnit 4', 'Ktor'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/starforge-v1.0.0',
    githubUrl: null,
    inProgress: true,
    sections: [
      {
        images: [
          `${base}images/works/project-j/project-j-1-1.png`,
          `${base}images/works/project-j/project-j-1-2.png`,
        ],
        caption: 'ホーム画面では現在のダンジョン / ノノグラムスタミナ・所持 G・プレイヤー EXP と各機能（合成工房・ダンジョン再開・鍛冶屋・キャラ育成・ノノグラム・ショップ）へのショートカットを確認できます。合成工房では 2 体の素材を選んで新キャラクターを生み出し、PixelArt キャラ画像と Tier/役割を「新発見」ダイアログでその場確認できます。',
      },
      {
        images: [
          `${base}images/works/project-j/project-j-2-1.png`,
          `${base}images/works/project-j/project-j-2-2.png`,
        ],
        caption: '独自 Canvas 描画によるターン制ダンジョン探索（F11）。HP・ATK・DEF・フロアとサポート数をヘッダーで確認しながらグリッドマップを移動し、スキルボタン（星の光・彗星撃・星の盾など）で戦略的に戦います。ミニマップで敵の位置を把握しつつ「脱出」ボタンで安全に報酬を持ち帰れます。鍛冶屋では所持素材から星剣 / 星雲鎧 I〜V を段階強化でき、次段階の解放フロア条件・必要素材・強化後ステータスを確認してから実行できます。',
      },
      {
        images: [
          `${base}images/works/project-j/project-j-3-1.png`,
          `${base}images/works/project-j/project-j-3-2.png`,
        ],
        caption: 'ノノグラム画面（10×10）では行・列のヒント数字を手がかりにフィル（塗り）または × で埋め、ヒントボタンで部分開示、Undo で前手順に戻れます。完成した行・列のヒントは淡色化されて進捗が一目瞭然です。キャラ育成画面ではサポートパーティ（最大 3 体）と最大 4 スロットのスキル編成を管理でき、解放済みのスキル（星の光 / 彗星撃 / 星の盾 など）とクールダウン・解放フロア条件を確認しながら編成できます。',
      },
    ],
  },
  {
    slug: 'project-f',
    title: 'IdleMine',
    thumbnail: `${base}images/works/project-f/project-f-1-1.png`,
    description: '鉱石を集め、ガチャで仲間を増やし、採掘チームと探索派遣で効率を高めていく放置系 Android ゲームです。Unity 6 LTS / C# で AI 作戦付き採掘システム・天井保証ガチャ・オフライン報酬を実装し、実機テスト中。',
    detail: `IdleMine — 放置型鉱山採掘ゲーム（Android × Unity）

Unity 6 LTS / C# 製の 2D 横スクロール放置鉱山採掘ゲームです。のんびり系ゲームデザイン（敵は徘徊するだけ・フロアクリア制・転生なし）を軸に、ガチャ・探索派遣・ガーデンバフなど多彩なシステムを個人で設計・実装しています。Android 実機ビルド成功済みでテストプレイ中です。

採掘コアシステムは採掘グリッドの描画・鉱石スポーン・ハイライトを管理し、採掘 AI が作戦設定（近い・価値が高い・安全・深い）に従って自動採掘します。カメラは採掘エリアに合わせて自動フィットし、全自動採掘をワンタップで制御できます。

ガチャシステムは SR/SSR 抽選・演出・ポートレート表示を実装し、10/50/100 連の天井保証を備えています。ガーデンでは採掘速度・ゴールド獲得などのバフを管理し、探索派遣でオフライン中の報酬収集が行えます。

UI は 5 タブ（ホーム・採掘・ベース・ガチャ・設定）で構成し、マーケットでは鉱石を 1 個・10 個・全量単位で売却できます。`,
    tech: ['Unity 6', 'C#', 'IL2CPP', 'Android', 'Ktor', 'JWT'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [
      {
        images: [
          `${base}images/works/project-f/project-f-1-1.png`,
          `${base}images/works/project-f/project-f-1-2.png`,
        ],
        caption: '採掘グリッド上で Stone・Iron・Crystal などの鉱石が自動生成され、キャラクターが自動採掘します。Mining Team 画面ではキャラクターの役割（Miner・Merchant）と次の目標（Clear Shallow Mine / 指定数の採掘）を確認しながらメンバーを管理できます。',
      },
      {
        images: [
          `${base}images/works/project-f/project-f-2-1.png`,
          `${base}images/works/project-f/project-f-2-2.png`,
        ],
        caption: 'Gacha 画面では召喚したキャラクターの役割（Miner: Mining Speed +15% / Merchant: Sell Price +12% など）を確認し、Mine や Market に割り当てられます。Market では採掘した鉱石を個数単位で売却でき、レアリティが高いほど単価が上がります（Gem は 500G/ea）。',
      },
    ],
  },

  // ===== MORE 後方 =====
  {
    slug: 'project-b',
    title: 'ECサイト',
    thumbnail: `${base}images/works/project-b/project-b-1-3.png`,
    description: 'Spring Boot → Ktor へのバックエンド移植学習プロジェクト。URL ゼロ変更・JVM メモリ 500MB→150MB 削減を達成し、VPS 本番稼働中。',
    detail: `ECサイト型Webアプリケーション（Spring Boot → Ktor 移植）

PHPフロントエンドを稼働させたまま、バックエンドをSpring Boot（Java）からKtor（Kotlin）へ移植したプロジェクトです。PHPが叩くAPIエンドポイントをURLゼロ変更で移行することでフロントへの影響を排除し、JVMメモリを約500MB（Spring Boot）→約150MB（Ktor）に削減してVPS 4GB制限内への収容を実現しました。フロントは描画のみを担うPHPシェルとし、ビジネスロジックはすべてKtor REST APIに集約することでフロントとバックエンドの責務を明確に分離しています。

インフラはDocker Composeで4サービス（Nginx / PHP-FPM / Ktor / PostgreSQL）をコンテナ分離。Nginxをリバースプロキシとして配置し、/api/* へのリクエストをKtorへ転送することでPHPとAPIを同一オリジン構成にまとめています。認証はJWT + BCryptを採用し、一般ユーザーとADMINロールをJWTクレームで管理。移行前後の相互認証互換性を BCrypt による互換処理で維持しています。管理者ログインはワンタイムコードによる2段階認証を実装しています。

ユーザー向け機能として、キーワード・カテゴリ・価格帯・在庫状態での複合絞り込み検索とページネーションを備えた商品一覧、お気に入り登録、クーポンコードの割引適用、カートの数量変更・削除・購入フロー、注文履歴閲覧を実装しています。管理者側はChart.jsを用いた月別売上グラフ・人気商品ドーナツチャートのダッシュボード、商品CRUD（カテゴリ管理・公開フラグ切り替え含む）、注文ステータス管理、クーポン発行・一覧の4機能を備えています。`,
    tech: ['PHP', 'Kotlin', 'Ktor', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Nginx', 'JWT', 'JavaScript', 'Chart.js'],
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
    slug: 'project-d',
    title: 'ノノグラム',
    thumbnail: `${base}images/works/project-d/project-d-1-1.png`,
    description: 'Jetpack Compose + Clean Architecture 構成の Android ノノグラムパズルゲーム。Python ソルバーによる自動生成パイプライン（100 問）と Ktor バックエンドを組み合わせた設計で、後に StarForge へ発展統合しています。',
    detail: `ノノグラムパズル Android アプリ

数字ヒントを手がかりにマス目を塗りつぶすロジックパズル「ノノグラム」をスマートフォン向けに実装したアプリです。このプロジェクトで培ったパズル生成・Compose 設計の経験は、後に StarForge へ統合されています。

パズルのクオリティを担保するため、ゲームロジックを Python で先行開発し、論理的に一意解が導けるパズルだけを選別してバックエンドに投入する自動生成パイプラインを構築しました。「推測なしで解ける」という制約を設計の起点に置いたことが特徴です。

アプリアーキテクチャは MVVM + Clean Architecture + Repository パターンを採用し、Hilt で依存性を一元管理しています。UI は Jetpack Compose (Material3) で構築し、状態管理には StateFlow を使用。ローカルデータは Room（パズル進捗を 500ms debounce 後に JSON 保存）と DataStore Preferences（スタミナ・ヒント数・スキップチケット）で管理し、Cache-first 設計（Room キャッシュ → 不足時に API フェッチ）で通信コストを最小化しています。

パズル生成は Python で独立したパイプラインとして構築しました。solver.py（制約伝播ソルバー・バックトラックなし）が論理的一意解を検証し、generator.py が密度・連結性・対称性の美的フィルタを適用して採用パズルを選別。計100問（5×5=34問 / 10×10=33問 / 15×15=33問）を自動生成・投入済みです。`,
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'MVVM', 'Clean Architecture', 'Room', 'DataStore', 'WorkManager', 'Retrofit', 'AdMob', 'Ktor', 'FreeMarker', 'PostgreSQL', 'Docker', 'Python'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/nonogram-v1.0.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-d/project-d-1-1.png`,
          `${base}images/works/project-d/project-d-1-2.png`,
        ],
        caption: 'ホーム画面ではログイン時にボーナスアイテム（スキップ券など）が付与され、スタミナ残量と次回回復時間がリアルタイムで表示されます。Mini 5×5 / Normal 10×10 / Large 15×15 のカテゴリタブでステージを切り替えられます。',
      },
      {
        images: [
          `${base}images/works/project-d/project-d-2-1.png`,
        ],
        caption: 'プレイ画面では上部に列ヒント・左端に行ヒントの数字が並び、グリッドをタップで「塗り」、×ボタン選択中は「除外マーク」と操作モードを切り替えられます。「ヒント」ボタンで解の一部を開示でき、Large 15×15 の複雑なパズルも論理的一意解が保証されています。',
      },
    ],
  },
  {
    slug: 'project-i',
    title: '本番サービス運用基盤',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'VPS 1台で複数サービスを Docker / Traefik で同居運用する個人インフラ。Prometheus / Grafana 監視・CI/CD・自動バックアップまで整備。ローカル LLM（Ollama / qwen2.5）で問題コンテンツを半自動生成し TechQuiz へ投入するパイプラインも運用中。',
    detail: `本番サービス運用基盤 — VPS インフラ × LLM コンテンツ生成

VPS（Ubuntu）1台上で Traefik + Docker Compose を用いて複数サービスを同居運用しているインフラ構成です。TechQuiz / RouteLab / JET / puzzle-web / ECサイト / StellarRise Web などのサービスを支える共通基盤として設計・運用しています。

ネットワーク構成は Cloudflare（DNS・CDN・DDoS 防御）→ Traefik（SSL 終端・ルーティング）→ 各コンテナ（Docker Bridge 内部通信）→ shared-PostgreSQL の多層構造です。TLS 証明書は Let's Encrypt 自動更新で管理し、PostgreSQL はサービスごとに DB を分けつつコンテナを1つで共有することで運用コストを抑えています。

セキュリティ面では、SSH ポート変更・公開鍵認証のみ、Traefik による HTTPS 強制、Cloudflare WAF、管理画面系エンドポイントへのアクセス制限を実装しています。Prometheus + Grafana でコンテナリソース・レスポンスタイムを可視化し、Discord Webhook で異常検知時の即時通知を実装。PostgreSQL 自動バックアップスクリプトの定期実行と Runbook（障害対応手順）の整備まで含む、本番運用を意識した構成です。

LLM コンテンツ生成パイプラインとして、Python + ローカル LLM（Ollama / qwen2.5:14b）を使って資格試験問題のドラフトを半自動生成しています。CCNP ENARSI・LPIC-3 300・Java Silver などに対応し、生成→検証→修復→GPT レビュー→統合の各工程を独立スクリプトに分離した設計で、数百問規模の問題データを TechQuiz へ投入済みです。「AI に生成させてそのまま使う」のではなく、生成・レビュー・品質確認・反映を分けたパイプラインを設計・運用しているのが特徴です。`,
    tech: ['Docker', 'Docker Compose', 'Traefik', 'PostgreSQL', 'Prometheus', 'Grafana', 'Cloudflare', 'Ubuntu', 'Python', 'Ollama', 'LLM', 'GitHub Actions'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-g',
    title: 'AWS 構成案（Terraform）',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: '⚠️ 実環境デプロイなし・設計案のみ。VPS本番4サービスをAWSマネージドサービスで再構成した場合のTerraform IaC設計案。VPC・ALB・ECS Fargate・RDS・Secrets Manager を活用した本番想定アーキテクチャ。',
    detail: `AWS インフラ構成案（Terraform IaC）

⚠️ これは AWS 環境への実際のデプロイではなく、VPS 本番構成をベースに AWS への移行を設計・Terraform コードとして落とし込んだ構成案です。terraform fmt による構文確認は済んでいますが、実際の AWS 環境への適用は行っていません。

VPS（Ubuntu）上で稼働中のサービスを AWS マネージドサービスで再構成した場合の設計案です。アーキテクチャは Internet → ALB（パブリックサブネット×2 / 2AZ）→ ECS Fargate（プライベートサブネット）→ RDS PostgreSQL 16（DB サブネット）の多層構造です。ALB のパスベースルーティングで複数サービスを単一エンドポイントに集約しています。

設計上のポイントは3点です。①Secrets Manager によるシークレット分離：ECS タスク起動時に自動注入することでコードにシークレットを書かない設計。②IAM 最小権限設計：ECS タスク実行ロールに必要最小限のシークレット読み取り権限のみを付与。③コスト比較：NAT Gateway（~$35/月）が最大のコスト要因であり月額概算 ~$80〜 となるため、VPS（~$13/月）を本番継続採用する判断の根拠を設計段階で把握しています。`,
    tech: ['AWS', 'Terraform', 'VPC', 'ALB', 'ECS Fargate', 'RDS', 'ECR', 'Secrets Manager', 'CloudWatch', 'IAM'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-h',
    title: 'IslandDev',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Unity 6 / C# 製の 2D 無人島開拓 × 放置ゲーム（Android）。30 日クリア設計・スタミナなしのコンセプトで、100×16 グリッドマップ上の探索・クラフト・施設建設・ボス戦を実装中。',
    detail: `IslandDev — 無人島開拓 × 放置ゲーム（Android × Unity）

Unity 6 / C# 製の 2D 無人島開拓 × 放置ゲームです。30 日クリア設計・スタミナなし・ソシャゲ疲れ層向けのデザインコンセプトで開発中です。100×16 統合グリッドマップ上での探索・クラフト・施設建設・ボス戦をゲームループの中核に据えています。

マップは砂浜・森・岩礁・奥地・山頂の 5 ゾーン・100×16 統合グリッドで構成されています。未解放エリアは霧で覆われ、開拓が進むにつれて視界が広がります。自動採取・自動戦闘でプレイヤーの手を離しても資源が集まる放置設計を採用しています。

集めた資源（木材・石・果実・繊維・貝殻・粘土・竹・鉱石の 8 種）を使って武器 6 種をクラフトし、施設 8 種を建設して採取効率や探索能力を高めます。敵 10 種と門番ボス 5 体を倒すと新エリアが解放されます。

Unity Editor のカスタムツールを自作しており、ボタン操作一つでシーン全体を再構築・参照を自動接続できるため、開発効率を大幅に向上させています。`,
    tech: ['Unity 6', 'C#', 'Android'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
]
