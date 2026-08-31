import gallery01 from '../assets/images/gallery01.jpg'

const base = import.meta.env.BASE_URL

export const projects = [
  // ===== TOP 4 =====
  {
    slug: 'project-a',
    title: 'TechQuiz',
    thumbnail: `${base}images/works/project-a/project-a-2-1.png`,
    description: 'Python / Django 製 IT 学習サービス。応用情報・CCNP・LPIC・Java Silver・Azure/AWS など 10 科目超・1 万問超の問題データをパイプライン管理し本番公開。ゲーミフィケーション・音声学習モード搭載。ポートフォリオ閲覧用デモ（quiz.sorapenguin.dev）のほか、実ユーザー向けに tech-lab.sorapenguin.dev として β 公開中。問題は Ollama + ChatGPT + Python のパイプラインで半自動生成。Docker / Traefik / CI/CD まで一貫して個人構築・運用。',
    detail: `IT技術系クイズ学習プラットフォーム（Django / Python）

問題クイズサイトではなく、コンテンツ運用基盤として設計した IT 資格学習サービスです。応用情報・CCNP ENARSI・LPIC・Java SE 17 Silver・Azure・AWS など 10 科目超・1 万問超の問題データを管理・本番公開しており、ポートフォリオ閲覧用デモ（quiz.sorapenguin.dev）のほか、実ユーザー向けに tech-lab.sorapenguin.dev として β 公開しています。RouteLab・JET など複数の学習サービスと同じ VPS・運用基盤上で動作しています。

【AI問題生成パイプライン】
Ollama（ローカル LLM）でドラフトを生成し、ChatGPT Thinking で技術的正確性をレビュー、Python スクリプトで重複チェック・schema 検証・反映の各工程を自動化するパイプラインを設計・運用しています。科目設定を切り替えるだけで同一コードを 46 科目に横展開できる設計で、1 万問超の問題データ規模を個人で維持しています。問題 JSON の schema（7 キー・choices 4択・answer 完全一致文字列・difficulty タグ）を厳密に管理。「AI に生成させてそのまま使う」のではなく生成・レビュー・validation・適用を分離したパイプライン設計が特徴です。

【インフラ・CI/CD】
Docker Compose で各サービスをコンテナ分離し、GitHub Actions による CI/CD で push からマイグレーション・再起動まで自動化しています。Cloudflare → Traefik → Django → PostgreSQL の多層構成に、Prometheus + Grafana による監視・アラート通知と Redis キャッシュを組み合わせて運用しています。

【機能設計】
XP・レベル・スタミナ・ジェムのゲーミフィケーション要素を実装しています。問題フィルタリングは「ステータス（未出題/ミス/ヒット/コンボ）・正答率・経過時間・難易度・サブカテゴリ」の 5 軸で絞り込め、設定秒数で自動進行する自動再生・👍/👎 フィードバック機能・音声読み上げ（Web Speech API / Android TextToSpeech 自動切替）を実装しています。フリー・月額・生涯プランのサブスクリプション設計とジェムによる問題解放、学習カレンダー（GitHub 風ヒートマップ）も備えます。

【セキュリティ・運用設計】
二重のレート制限（ログイン・登録・質問閲覧を IP ベースで制御）、reCAPTCHA v2 によるボット対策、構造化ログ、SendGrid を用いたメール配信フォールバック設計を実装しています。管理画面は URL 難読化で保護し、機能フラグで新規登録・ゲスト開始のオン/オフを制御可能です。コードと問題データは非公開（採用担当者向けにデモアカウントでの全機能体験を提供）。`,
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
        caption: 'トップページでは LPIC・CCNP ENARSI・Java Silver などのカテゴリと各問題数が一覧表示されます。スクロールするとサイトの特徴（正解/不正解フィルター・XPシステム・スタミナ・自動再生モード）やデイリーボーナス（毎日100EXP達成でジェム獲得）の説明があります。問題開始画面では「続きから再開」または新条件で開始でき、即時判定・自動再生のモードを選択できます。絞り込み設定では難易度（易・普通・難）・問題数（1〜20問）・サブカテゴリを組み合わせて指定できます。',
      },
      {
        images: [
          `${base}images/works/project-a/project-a-2-1.png`,
          `${base}images/works/project-a/project-a-2-2.png`,
          `${base}images/works/project-a/project-a-3-1.png`,
          `${base}images/works/project-a/project-a-3-2.png`,
        ],
        caption: '問題画面はモバイルでも 4 択が一画面に収まるレイアウトで、アクションバーに現在のモード（即時判定・音声再生中）が表示されます。🎯ボタンで 2 択ヒントを利用でき、「解答を見る」「次へ」で進行します。解答履歴一覧ではカテゴリ全問のステータス（未出題/ミス/ヒット/コンボ）をカラーバーで確認でき、セッション履歴（日付・正答率）が時系列で表示されます。マイページではレベル・総 XP・ジェム数・ランキング順位・サブスクリプションプランを確認でき、過去 1 年の学習カレンダー（GitHub 風ヒートマップ）とカテゴリ別正答率グラフで習熟状況を可視化しています。',
      },
    ],
  },
  {
    slug: 'project-routelab',
    title: 'RouteLab',
    thumbnail: `${base}images/works/project-routelab/project-routelab-6.png`,
    description: 'Cisco IOS 風の疑似 CLI をブラウザで操作し、ネットワーク設定とトラブルシューティングを練習できる本番公開中の学習サービス。CCNA〜CCNP 対応、538 シナリオ。選択式・入力式・写経・音声暗記の 4 モード。シナリオを AI エージェントに実際に解かせる可解性検証まで実施。React + TypeScript + Vite + Zustand 製。',
    detail: `RouteLab — Cisco IOS 風 CLI 演習サービス（本番公開中）

ブラウザ上で Cisco IOS 風の CLI を操作し、ネットワーク設定とトラブルシューティングを練習できるサービスです。Packet Tracer や実機を用意しなくても、CCNA / CCNP レベルのコマンド操作と状態遷移を体験できます。本番運用中のサービスであり、問題・シナリオ資産と内部設定を含むためソースコードは非公開です。

【学習体験】
シナリオごとにネットワーク構成と課題が提示されます。show コマンドで現在の状態を調査し、configuration モードへ移行してコマンドを入力、設定変更後に採点される流れで学習が進みます。ミスクリックは減点対象となるため、「正しいコマンドを正しい順序で」選ぶ判断力が自然に養われます。

【4 つの演習モード】
選択式（デフォルト）はコマンドボタンを選んで進める入門向け、入力式はコマンドを直接タイプする上級者向け、写経モードはヒントを見ながら 1 行ずつ入力するタイピング練習、音声暗記/カードはフラッシュカード形式で暗記する試験前確認用です。

【CLI エンジン設計】
コマンドの入力文字列を正規化・分解して IOS コマンド構造に解析し、デバイス状態（ルーティングテーブル・インターフェース・プロトコル設定）をメモリ上で更新します。enable / configure terminal など 34 種の CLI モードを状態機械として管理し、show コマンドの出力を IOS 風フォーマットで動的生成します。採点はサーバーサイドでシナリオ JSON の条件と照合して実行します。

【シナリオとコンテンツ管理】
538 件のシナリオを JSON ファイルで管理（CCNA / CCNP ENARSI / CCNP ENCOR / トラブルシューティング 5 カテゴリ）。OSPF・EIGRP・BGP・DMVPN・VRF・ACL・PBR・QoS・STP・HSRP・VRRP・NAT・IPv6 など主要プロトコルを網羅しています。写経ステップと採点条件の整合性を全シナリオで自動検証（テスト約 1,100 件）し、コンテンツの品質を保証しています。

【AI 可解性検証】
AI エージェントにシナリオを実際に解かせ、「正しい知識があれば必ず解ける問題か」を検証する独自の品質保証プロセスを運用しています。検証で見つかった曖昧な問題文や実機 IOS 構文とのズレをシナリオに反映し、トラブルシューティング全 150 問と CCNA 112 問（検証当時の全数。以降の追加分は順次検証）の可解性を確認済みです。

【ユーザーフィードバック】
実ユーザーからのバグ報告を収集する機能を実装し、報告内容をもとに問題文の修正やシナリオの改善を行っています。

React + TypeScript + Vite + Zustand + TailwindCSS 構成。VPS 上で Docker + Traefik で HTTPS 公開中。`,
    tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'TailwindCSS', 'Express', 'Node.js', 'Docker', 'Traefik', 'VPS'],
    productUrl: 'https://routelab.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-routelab/project-routelab-6.png`,
          `${base}images/works/project-routelab/project-routelab-7.png`,
          `${base}images/works/project-routelab/project-routelab-1.png`,
          `${base}images/works/project-routelab/project-routelab-2.png`,
        ],
        caption: 'タブレット / デスクトップでは3ペイン構成で表示されます。左ペインに MISSION（問題文・ネットワーク構成・必須採点条件）、中央ペインに CLI ターミナル（RouterA / RouterB タブ切り替え）、右ペインにコマンドボタンが並びます。show running-config を実行すると IOS 風フォーマットで現在の設定を確認でき、状態を把握してから次のコマンドを選択する流れで学習が進みます。スマートフォンでも同じシナリオを操作でき、5 カテゴリ（CCNA / ENARSI / ENCOR / ENARSI TS / ENCOR TS）から問題を選択できます。',
      },
      {
        images: [
          `${base}images/works/project-routelab/project-routelab-4.png`,
          `${base}images/works/project-routelab/project-routelab-5.png`,
          `${base}images/works/project-routelab/project-routelab-3.png`,
          `${base}images/works/project-routelab/project-routelab-8.png`,
        ],
        caption: '演習モードは4種類から選択できます。選択式はコマンドボタンをクリック / タップして進める入門向け、入力式は実際にコマンドを手入力して実機に近い感覚で練習、写経モードはヒントを見ながら 1 行ずつ入力するタイピング練習です。採点ボタンを押すと達成条件の充足状況と部分点が表示され、未達の条件にはヒントが個別表示されます。採点後の解説画面では設定理由・確認方法・誤りやすい点を確認でき、「もう一度」でリセットして再チャレンジできます。',
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

ノノグラムは Python 制約伝播ソルバーで論理的一意解を保証しながら自動生成（300 問）。ヌリカベは独自アルゴリズムで生成した 300 問を投入。カックロは Connected Growth アルゴリズムで接続性・孤島ゼロを保証しながら Python 自動生成（330 問）。ピクセルアートは 8×8 / 16×16 のサイズ別に 83 問を収録し、段階解放制を実装しています。計 1,000 問超をすべて自作ソルバー・ジェネレーターによる自動生成で賄っています。

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

メイン・武器管理・ショップ・強化・プレステージ・実績・設定など複数の画面で各要素を整理しています。武器は星レベルに応じて攻撃力が指数的に増加し（毎レベル ×2.2・Long オーバーフローを安全にクランプする数値設計）、削除時に素材を生成できます（レシピシステムは BuildConfig フラグで休眠中・内部データは互換維持済み）。プレステージ（永久アップグレード）で攻撃力・コイン獲得・オフライン時間延長・ジェムドロ率を強化でき、10 ワールド構成でワールドごとに武器ステートを管理しています。サポートキャラクターの育成でステージ攻略をアシストする仕組みや、スペシャルボス撃破で輝石を時間蓄積するシステムも備え、機能追加に対応した拡張性の高いローカル保存設計を採用しています。

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
    description: 'Java コードの実行トレース・読解練習に特化した 606 問（Silver 514 + Gold 92）の Web 問題集。「このコードが動くとどうなるか」を答える形式で、Java SE 17 頻出テーマを収録。全問題を javac で自動検証するゲート付き生成パイプラインを整備。React + TypeScript + Vite 製・VPS 本番稼働中。',
    detail: `JET — Java コード読解・実行トレース問題集（React × TypeScript）

Java Execution Tracer の略。Java のコードを読み、実行結果・変数の値・出力を答えるコードトレース形式の問題集です。知識問題ではなく「このコードが実際に動くとどうなるか」を問う形式で、Java の実行順序・スコープ・型変換・オーバーロード・継承・ラムダ・Stream などの理解を深めることを目的にしています。

606 問（Silver 514 問 + Gold 92 問）を収録し、Java SE 17 の頻出テーマ（継承・ポリモーフィズム・例外・ラムダ・Stream・型変換など）をレベル別に学習できます。重複問題の機械検出・削除まで含めてコンテンツを継続整備しています。

【コンテンツ品質パイプライン】
Gold 問題群はゲート付き自動生成パイプラインで作成し、全問題を javac による実行結果検証にかけて品質を担保しています。手書きの実行トレース JSON がコンパイル・実行結果と一致するかを機械検証する仕組みで、大量の問題を破綻なく維持しています。

フロントエンドは React + TypeScript + Vite で構成し、問題フィルタリング・回答確認・進捗管理 UI を実装しています。弱視の方にも配慮したライトテーマを採用。VPS 上で Docker + Traefik 構成で公開しています。`,
    tech: ['React', 'TypeScript', 'Vite', 'Docker', 'Traefik', 'VPS'],
    productUrl: 'https://jet.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-jet/project-jet-1.png`,
          `${base}images/works/project-jet/project-jet-2.png`,
        ],
        caption: 'コードトレース解答画面。Java コードと行ハイライトによるステップ解説が上部に表示され、下部の 4 択から実行結果を選択します。問題一覧では Silver / Gold のタブで分類し、タグ・ステップ数・問題番号を確認しながら学習できます。606 問を収録し、Java SE 17 頻出テーマ（継承・ポリモーフィズム・ラムダ・Stream など）をコードを読む形式で練習できます。',
      },
    ],
  },
  {
    slug: 'project-e',
    title: 'AlchemyGame',
    thumbnail: `${base}images/works/project-e/project-e-3-2.png`,
    description: '4 元素から 80 種以上の素材を発見・合成していく放置系錬金術ゲームです。プレステージごとに錬金術→料理→生物進化→宇宙→文明と 5 段階でワールドが広がる設計を採用し、各ワールド独自のピクセルアートアイコン（全5ワールド合計 325 枚以上）・24 種のアチーブメント・クラウドセーブ・引継ぎコードを MVVM + UseCase パターンで実装しています。',
    detail: `AlchemyGame — 放置系錬金術ゲーム（Android × Ktor API）

Kotlin 製の放置系錬金術ゲームです。MVVM + Clean Architecture + UseCase パターンで設計し、合成・ミッション・実績などのビジネスロジックを各 UseCase に分離しています。ゲーム状態は immutable な設計で一貫性を保証し、状態変化と UI イベントを疎結合に扱う仕組みを整えています。

コアゲームループは 4 元素（火・水・土・風）の自動収集から始まり、80 種以上のレシピを段階的に発見・合成していく仕組みです。錬金炉は装備強化で最大 3 スロット（プレステージ強化込みで最大 5 スロット）の並列生産に対応し、装備レベルに応じてオートプロデュースの枠が広がります。最終素材の合成でプレステージ（昇華）が発動し、錬金術→料理→生物進化→宇宙創造→文明史の 5 ワールドが段階的に解放される設計で、各ワールドの在庫・発見素材・プレステージ状態を独立して管理しています。

継続プレイ設計として、クラフトや発見でランクが上がるアルケミストランク（XP ベース・10 段階）、収集速度・スロット数・ストレージ上限の永続強化を得るプレステージ、毎日リセットされる 5 種ランダムデイリーミッション、最大 100 日分のログインカレンダー報酬、24 種のアチーブメント、7 ステップのチュートリアルを実装しています。

オフライン進捗はサーバー時刻を基準に計算してデバイス時計の改ざんを防止し、長期放置時にはアシスタントギフトを付与する設計にしています。JWT トークンは端末内で暗号化保存し、Ktor バックエンドとのバックグラウンド同期でクラウドセーブを実現。クラウドセーブはバックグラウンドで定期同期し、起動時にローカルと API のタイムスタンプを比較して新しい方を採用する競合解決設計です。`,
    tech: ['Kotlin', 'MVVM', 'Clean Architecture', 'UseCase', 'StateFlow', 'Coroutines', 'DataStore', 'EncryptedSharedPreferences', 'WorkManager', 'Retrofit', 'Navigation Component', 'Ktor', 'PostgreSQL', 'JWT', 'Docker'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/alchemygame-v1.0.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-e/project-e-3-1.png`,
          `${base}images/works/project-e/project-e-3-3.png`,
          `${base}images/works/project-e/project-e-3-2.png`,
          `${base}images/works/project-e/project-e-3-4.png`,
        ],
        caption: 'ラボでは火・水・土・風から 2 素材を選んで調合し、素材を次々と発見していきます。各素材にはワールド固有のピクセルアートアイコンが割り当てられており、調合パネルで結果プレビューを確認してから錬成できます。オフライン中も採集が続き、起動時には行動ログとともに放置収入をまとめて受け取れます。錬成書（図鑑）では T1〜T7 のティア別に発見進捗（T1:6/6・T2:14/14・T3:15/15 など）を確認でき、素材を選ぶと必要な基礎素材からさかのぼる「ツリー錬成」で中間素材ごと一括合成できます。',
      },
      {
        images: [
          `${base}images/works/project-e/project-e-4-4.png`,
          `${base}images/works/project-e/project-e-4-1.png`,
          `${base}images/works/project-e/project-e-4-2.png`,
          `${base}images/works/project-e/project-e-4-3.png`,
        ],
        caption: '工房の実績タブでは錬金士ランク（XP ベース・10 段階）と全 24 種のアチーブメント達成状況（全元素発見 69/75 など）を確認できます。機器タブでは火・水・土・風の採集器を Gold で強化し、Lv.15（MAX）で各素材を最速自動収集します。錬成炉では T3 以上の素材を複数スロット（強化で最大 5）で並列バッチ生産でき、放置中にまとめて製造が進みます。設定画面では 72 時間有効の引継ぎコードを発行して別端末へのデータ移行を安全に行えます。',
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
    thumbnail: `${base}images/works/project-j/project-j-2-1.png`,
    description: 'Kotlin 製のモンスター育成合成 × ターン制ローグライク × ノノグラムパズル × 塗り絵を統合した Android ゲームです。独自 Canvas エンジン・プロシージャルダンジョン生成・A* 経路探索・サーバー時刻ベースのスタミナ管理を MVVM + Clean Architecture で実装し、F1〜F50 突破を 100 シードの進行シミュレーターで自動検証しています。',
    detail: `StarForge — 複合ジャンル Android ゲーム（Kotlin × DataStore × Retrofit）

Kotlin 製のモンスター育成合成 × ターン制ローグライク × ノノグラムパズル × 塗り絵を統合した Android アプリです。4 つのゲームモードを 1 アプリに収め、独自 Canvas レンダリングエンジン・プロシージャルダンジョン生成・A* 経路探索を含む多数のシステムを MVVM + Clean Architecture パターンで設計・実装しています。

基本ループはノノグラムで★とかけらを集め → ショップで仲間を増やし → 合成/育成/装備強化でチームを強化 → ダンジョン 50 フロアを攻略という流れです。ダンジョンは BSP プロシージャル生成でフロアごとに異なるマップが生成され、視界・フォグオブウォーを独自 Canvas で描画します。ターン制移動・攻撃・スキル使用は手動か AUTO で操作でき、AUTO 探索は「視界内の敵を優先 → ドロップ回収 → 未探索エリアへ」の 3 段優先度で A* 経路探索を実行し、HP 低下・ボス出現時に自動停止します。ボスは F10〜F50 に 5 体配置され、死亡時はかけら・EXP・ゴールドを持ち帰り素材をロストする緊張感ある設計です。F50 クリアでエンディング演出と報酬が表示され、クリア後も探索とコレクションを継続できます。

モンスターは T1〜T7 × 5 タイプの計 35 体を定義し、同ティア合成（確定昇格）と異ティア合成（ランダム昇格）で発見要素を持たせています。最大 3 体のサポートパーティを編成し、タイプ（ATK/DEFN/AREA/HEAL/LUCK）に応じた効果がダンジョン探索を補助します。ノノグラムは 5×5・10×10・15×15 の 3 サイズをサーバー API または builtin フォールバックから取得し、フィル/マークモード切替・Undo・ヒントチケット・途中保存を実装しています。塗り絵では 35 体のモンスターを 8 色パレットで彩ることができ、途中保存・再開・完成保存をすべて実装しています。

技術面では GameState を immutable な data class で定義しすべての変化を copy() で生成する設計を採用し、ロード時に normalized() で旧セーブの自動修復を行って後方互換性を担保しています。スタミナ回復はサーバー時刻（GET /starforge/time）を基準に計算し、端末時計操作による不正回復を防止しています。日替わりショップは日付をシードとした決定論的抽選でサーバー不要のクライアント完結を実現。永続化は DataStore + Gson による JSON 直列化 1 層構成で、Retrofit + OkHttp で時刻同期とノノグラム API 配信を行っています。

バランス調整は独自の進行シミュレーターで Standard/Active 各 100 シード × F1〜F50 突破を自動検証し、進行不能 0 件・エンディングまで到達可能なバランスを確認しています。実機ではホーム・ダンジョン・AUTO 探索・合成・装備・ノノグラム・ショップ・設定を手動確認済みです。仕様設計・バランス判断・実機確認を自分が担当し、Kotlin 実装を Claude Code / Codex、UI レビューを ChatGPT に分担するワークフローで開発しています。バージョン 0.1.0・クローズドテスト準備段階です。`,
    tech: ['Kotlin', 'MVVM', 'Clean Architecture', 'StateFlow', 'Coroutines', 'DataStore', 'Gson', 'Retrofit', 'OkHttp', 'Navigation Component', 'Canvas', 'JUnit 4', 'Ktor'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/starforge-v1.1.0',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-j/project-j-1-1.png`,
          `${base}images/works/project-j/project-j-1-2.png`,
          `${base}images/works/project-j/project-j-1-3.png`,
          `${base}images/works/project-j/project-j-1-4.png`,
        ],
        caption: 'ホーム画面ではダンジョン・ノノグラムのスタミナと G・★・EXP を確認しながら各機能へ移動できます。合成工房では 2 体を素材に選んで新キャラを生み出し、同ティア合成（確定昇格）と異ティア合成（ランダム昇格）の 2 パターンで未発見レシピを探します。初めての合成成功では「新発見」ダイアログに PixelArt アイコンとレシピが表示されます。キャラクター詳細では T1〜T7 × 5 タイプのステータス・Mastery 進捗・次の強化条件を確認してサポートパーティに編成できます。',
      },
      {
        images: [
          `${base}images/works/project-j/project-j-2-1.png`,
          `${base}images/works/project-j/project-j-2-2.png`,
          `${base}images/works/project-j/project-j-2-3.png`,
          `${base}images/works/project-j/project-j-2-4.png`,
        ],
        caption: 'ダンジョン探索（F11）は BSP プロシージャル生成マップを独自 Canvas で描画。フォグオブウォー・ミニマップ・スキルボタン・戦闘ログを同一画面に配置し、手動操作と AUTO 探索（A* 経路 3 段優先）を切り替えられます。キャラ育成ではサポートパーティ（最大 3 体）とスキルスロット（最大 4 つ）を管理し、クールダウン・解放フロアを確認しながら編成します。ノノグラム（10×10）はフィル/マーク 2 モード・Undo・ヒント機能付きで、完成行・列のヒントが自動淡色化されます。ショップでは日替わり割引かけら（最大 80% OFF）・ヒントチケット・スタミナ回復を管理できます。',
      },
    ],
  },
  {
    slug: 'project-f',
    title: 'IdleMine',
    thumbnail: `${base}images/works/project-f/project-f-1-2.png`,
    description: '鉱石を集め、ガチャで仲間を増やし、採掘チームと探索派遣で効率を高めていく放置系 Android ゲームです。Unity 6 LTS / C# で AI 作戦付き採掘システム・天井保証ガチャ・ガーデンバフ・オフライン報酬を S100 まで実装し、Android 実機でコアゲームプレイの動作確認済み。QA シナリオランナー 34 件でオフライン収益・採掘速度・ランナウェイの整合性を自動検証しています。',
    detail: `IdleMine — 放置型鉱山採掘ゲーム（Android × Unity）

Unity 6 LTS / C# 製の 2D 横スクロール放置鉱山採掘ゲームです。のんびり系ゲームデザイン（敵は徘徊するだけ・フロアクリア制・転生なし）を軸に、ガチャ・探索派遣・ガーデンバフなど多彩なシステムを個人で設計・実装し、Android 実機でコアゲームプレイを動作確認済み（サーバー連携込みの実機確認は整備中）。S21〜S100 の実装フェーズを経て主要機能をすべて完成させています。

【採掘コアシステム】
20×12 の採掘グリッドで Stone・Iron・Gold・Crystal・Gem の 5 鉱石が自動スポーンし、採掘 AI が作戦設定（Nearest / Valuable / Safe / Deep）に従って自動採掘します。フロアクリア（B1F:300 → B5F:20）でマップが解放され、B5F クリア後に Prestige（採掘速度 ×1.05〜×51 強化）が解放されます。SafeZone 機能で 15 分ごとに採掘効率 +20% ゾーンが再生成される仕組みも備えています。

【ガチャ・キャラクターシステム】
SR / SSR 抽選・演出・ポートレート表示を実装し、10 / 50 / 100 連の天井保証（pityCount 管理）を備えています。キャラクターはレアリティ（S / A / B / C）と役割（Miner: 採掘速度強化 / Merchant: 売却価格強化）を持ち、Mining Team 4 スロットに配置して採掘効率を高めます。

【探索派遣・ガーデンバフ】
ガーデンでは採掘速度・ゴールド獲得・スタミナ系バフを管理し（GardenItemDef 5 種・GardenBuff）、探索派遣（ExplorePanel）でオフライン中の報酬収集を行えます。Garden サイズは Prestige 回数に応じて 3〜7 まで拡大します。

【QA・整合性検証】
QA Scenario Runner（34 シナリオ）でオフライン収益計算・採掘速度バフ合成・ランナウェイ境界値を自動検証し、OfflineEarningsCalculator を単一計算源として実装することでセーブ・UI・QA の整合性を保証しています。Working Save 方式を採用し、QA 実行後にセーブデータを完全に元に戻します。

【UI/UX】
5 タブ（Home / Mine / Base / Gacha / Settings）構成で、クリーム基調の明色 UI テーマ（UITheme.BgDeep=#F3E6CE）を採用しています。Home タブでは NEXT GOAL バー（6 条件ロジック）と Mining Team を確認でき、Base タブ内 Market では鉱石を 1 個・10 個・全量単位で売却、Upgrade モーダルでは Mining Speed / Carry / Stamina / Weapon Attack を強化できます。`,
    tech: ['Unity 6', 'C#', 'IL2CPP', 'Android', 'Ktor', 'JWT'],
    productUrl: 'https://github.com/sorapenguin/games-android/releases/tag/idlemine-v0.1.0',
    githubUrl: null,
    sections: [
      {
        layout: 'landscape',
        images: [
          `${base}images/works/project-f/project-f-1-1.png`,
          `${base}images/works/project-f/project-f-1-2.png`,
          `${base}images/works/project-f/project-f-2-1.png`,
          `${base}images/works/project-f/project-f-2-2.png`,
        ],
        caption: 'Home 画面では Mining Team（最大 4 スロット）と NEXT GOAL バー（Mine Stone 228/300 など）を確認できます。Mine 画面では 20×12 の採掘グリッドで Stone・Iron などの鉱石が自動スポーンし、採掘 AI が自動採掘します。HUD には鉱石在庫（Stone 865 / Iron 12）と採掘レート（6.7/min）がリアルタイム表示されます。Upgrade モーダルでは Mining Speed / Carry Capacity / Stamina / Weapon Attack の 4 カテゴリをゴールドで段階強化できます。Gacha / Characters 画面では召喚済みキャラクター（Ouka S / Ryu B / Tetsu B / Kou C など）のレアリティ・役割・ステータスを一覧確認でき、天井保証カウンター（S 保証 89 rolls）も表示されます。',
      },
    ],
  },

  // ===== MORE 後方 =====
  {
    slug: 'project-b',
    title: 'ECサイト',
    thumbnail: `${base}images/works/project-b/project-b-1-3.png`,
    description: 'Spring Boot → Ktor へのバックエンド移植学習プロジェクト。URL ゼロ変更・JVM メモリ 500MB→150MB 削減を達成。約 1 年の本番運用を経て、アクセス実態に基づき 2026 年 8 月にサービス統廃合（停止・アーカイブ）を判断。',
    detail: `ECサイト型Webアプリケーション（Spring Boot → Ktor 移植）

※ 本サービスは約 1 年の VPS 本番運用ののち、アクセス実態（90 日間アクセスなし）に基づき 2026 年 8 月に停止・アーカイブしました。移植の技術実績に加え、「使われていないサービスを計測に基づいて畳み、リソースを最適化する」運用ライフサイクル判断まで含めて経験しています。以下は稼働当時の構成です。

PHPフロントエンドを稼働させたまま、バックエンドをSpring Boot（Java）からKtor（Kotlin）へ移植したプロジェクトです。PHPが叩くAPIエンドポイントをURLゼロ変更で移行することでフロントへの影響を排除し、JVMメモリを約500MB（Spring Boot）→約150MB（Ktor）に削減してVPS 4GB制限内への収容を実現しました。フロントは描画のみを担うPHPシェルとし、ビジネスロジックはすべてKtor REST APIに集約することでフロントとバックエンドの責務を明確に分離しています。

インフラはDocker Composeで4サービス（Nginx / PHP-FPM / Ktor / PostgreSQL）をコンテナ分離。Nginxをリバースプロキシとして配置し、/api/* へのリクエストをKtorへ転送することでPHPとAPIを同一オリジン構成にまとめています。認証はJWT + BCryptを採用し、一般ユーザーとADMINロールをJWTクレームで管理。移行前後の相互認証互換性を BCrypt による互換処理で維持しています。管理者ログインはワンタイムコードによる2段階認証を実装しています。

ユーザー向け機能として、キーワード・カテゴリ・価格帯・在庫状態での複合絞り込み検索とページネーションを備えた商品一覧、お気に入り登録、クーポンコードの割引適用、カートの数量変更・削除・購入フロー、注文履歴閲覧を実装しています。管理者側はChart.jsを用いた月別売上グラフ・人気商品ドーナツチャートのダッシュボード、商品CRUD（カテゴリ管理・公開フラグ切り替え含む）、注文ステータス管理、クーポン発行・一覧の4機能を備えています。`,
    tech: ['PHP', 'Kotlin', 'Ktor', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Nginx', 'JWT', 'JavaScript', 'Chart.js'],
    productUrl: null,
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

パズル生成は Python で独立したパイプラインとして構築しました。solver.py（制約伝播ソルバー・バックトラックなし）が論理的一意解を検証し、generator.py が密度・連結性・対称性の美的フィルタを適用して採用パズルを選別。計 300 問（5×5 / 10×10 / 15×15 各 100 問）を自動生成し、Web 版（puzzle-web）と共有の DB に投入済みです。`,
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
    description: 'VPS 1台で 10 以上のサービスを Docker / Traefik で同居運用する個人インフラ。Prometheus / Grafana 監視・Discord アラート・CI/CD・セルフホスト Umami アクセス解析まで整備。ローカル LLM（Ollama / qwen2.5）で 46 科目・1 万問超の問題コンテンツを半自動生成し TechQuiz へ投入するパイプラインも運用中。',
    detail: `本番サービス運用基盤 — VPS インフラ × LLM コンテンツ生成

VPS（Ubuntu）1台上で Traefik + Docker Compose を用いて 10 以上のサービスを同居運用しているインフラ構成です。TechQuiz / RouteLab / InfraLab / GoLab / JET / puzzle-web / StellarRise Web などのサービスを支える共通基盤として設計・運用しています。アクセス解析はセルフホストの Umami で 7 サービスを計測し、アクセス実態に基づくサービス統廃合（EC サイトの停止・アーカイブなど）まで含めた運用判断を行っています。

ネットワーク構成は Cloudflare（DNS・CDN・DDoS 防御）→ Traefik（SSL 終端・ルーティング）→ 各コンテナ（Docker Bridge 内部通信）→ shared-PostgreSQL の多層構造です。TLS 証明書は Let's Encrypt 自動更新で管理し、PostgreSQL はサービスごとに DB を分けつつコンテナを1つで共有することで運用コストを抑えています。

セキュリティ面では、SSH ポート変更・公開鍵認証のみ、Traefik による HTTPS 強制、Cloudflare WAF、管理画面系エンドポイントへのアクセス制限を実装しています。Prometheus + Grafana でコンテナリソース・レスポンスタイムを可視化し、Discord Webhook で異常検知時の即時通知を実装。PostgreSQL 自動バックアップスクリプトの定期実行と Runbook（障害対応手順）の整備まで含む、本番運用を意識した構成です。

LLM コンテンツ生成パイプラインとして、Python + ローカル LLM（Ollama / qwen2.5:14b）を使って資格試験問題のドラフトを半自動生成しています。科目設定（JSON）を切り替えるだけで同一コードを流用できる設計で、CCNP・LPIC・応用情報から Azure / AWS / GCP 資格まで 46 科目に対応。生成→検証→修復→GPT レビュー→統合の各工程を独立スクリプトに分離し、累計 1 万問超の問題データを TechQuiz へ投入しています。「AI に生成させてそのまま使う」のではなく、生成・レビュー・品質確認・反映を分けたパイプラインを設計・運用しているのが特徴です。`,
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

Unity Editor のカスタムツールを自作しており、ボタン操作一つでシーン全体を再構築・参照を自動接続できるため、開発効率を大幅に向上させています。

現在は Unity 版で確立したゲームデザインを Kotlin Multiplatform（KorGE）で再実装した後継版（IslandDevKot）へ開発を移行しています。エンジンに依存しない純 Kotlin のゲームロジック + 23 テストクラスの自動テストという構成で、「同じゲームを別技術で作り直して設計を磨く」取り組みとして継続中です。`,
    tech: ['Unity 6', 'C#', 'Android', 'Kotlin', 'KorGE', 'KMP'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
  {
    slug: 'project-infralab',
    title: 'InfraLab',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Linuxインフラ障害を題材に、調査・診断・対処・復旧確認の状態遷移を体験する学習Webアプリ。1,000 件超のコンテンツを全件自動検証付きで運用し、runbook-lab.sorapenguin.dev として本番稼働中。正答・採点ルールをクライアントへ送らない公開境界設計と、StateVersion / IdempotencyKey による競合制御が技術的な特徴。C# / .NET 10 / Blazor WebAssembly / PostgreSQL 構成。',
    detail: `InfraLab — インフラ障害対応学習サービス（.NET 10 / Blazor WebAssembly・本番稼働中）

【概要】
四択問題で「答えを知っている」だけでは身につかない、障害対応の思考プロセスを練習するシナリオ型Webアプリです。Action/Commandで調査しEvidenceを収集し、原因（Diagnose）→対処（Remediate）→復旧確認（Verify）の順に判断を積み重ねます。状態遷移はサーバー側のScenarioEngineが管理し、フェーズ外の操作や必須Evidence未開示でのDiagnose試行はサーバー側で拒否します。

RouteLabがCisco IOS風CLIでネットワーク設定を練習するのに対し、InfraLabはLinuxサーバー障害を状態遷移型シナリオで体験するサービスです。runbook-lab.sorapenguin.dev として本番公開しています。

【学習フロー】
現象確認（Observe）→ Action/Commandで調査（Investigate）→ 原因選択（Diagnose）→ 対処選択（Remediate）→ 復旧確認チェックリスト（Verify）→ 採点・解説（Review）

シナリオ例:
- systemdサービスが203/EXECで起動しない（スクリプトの実行権限不足）
- DNS resolver設定の問い合わせ先が利用できない
- ブロック容量には空きがあるのにinodeが枯渇してファイル作成できない

【コンテンツ規模と品質管理】
Linux（LPIC 系）を中心に Docker・Kubernetes・クラウド系まで 1,000 件超のコンテンツを収録しています。全件を ContentValidator による自動検証（重複 0・スキーマエラー 0）にかけ、AI 生成 → レビュー → 検証 → 反映を分離したパイプラインで大量コンテンツの品質を個人で維持しています。

【技術的な特徴】
C# / .NET 10 / ASP.NET Core Minimal API / Blazor WebAssembly / EF Core 10 / Npgsql / PostgreSQL の構成で実装しています。

設計上のポイントは3点です。

① 正答・採点ルールの非公開化:
ScenarioPrivate（正答ID・採点ルール・模範解答パス・解説）はサーバー内部に保持します。クライアントには「選択肢のラベル」だけを送り、どれが正答かはAPIレスポンスに含まれません。OpenAPIドキュメントに内部クラス名が出現しないことをテストで検証しています。

② StateVersionによる競合検出:
各AttemptはStateVersionを持ち、更新のたびに1増加します。クライアントはリクエストに現在のStateVersionを含め、サーバー側で不一致を検出した場合は409を返します。EF CoreのconcurrencyTokenとしてUPDATE文のWHERE句に自動付加され、楽観的ロックとして機能します。

③ IdempotencyKeyによる重複要求対策:
クライアントがリクエストごとにUUID v4を生成して送信します。サーバーは行ロック（SELECT FOR UPDATE）取得前後の2段階でキーを検索し、同一キーが存在する場合は保存済みの結果をそのまま返します（replay）。PostgreSQLのトランザクションとユニーク制約の組み合わせで、同時実行時の重複挿入も防いでいます。

【テスト】
PostgreSQL統合テストを含む5テストプロジェクト構成。fault injectionによるトランザクション途中失敗・冪等性・同時実行・完了後拒否のシナリオをカバーしています。

【現在地】
ScenarioEngine / EfAttemptStore / 公開DTO境界 / APIエンドポイント / BlazorクライアントUIまで実装を完了し、VPS 上で本番稼働中です。RouteLab で経験したクライアント側採点の設計課題を、サーバー側採点・公開境界・競合制御で解決した「設計の進化」を説明できる作品として位置づけています。`,
    tech: ['C#', '.NET 10', 'ASP.NET Core', 'Blazor WebAssembly', 'EF Core 10', 'Npgsql', 'PostgreSQL', 'Docker', 'VPS'],
    productUrl: 'https://runbook-lab.sorapenguin.dev',
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-golab',
    title: 'GoLab（PathTraceLab）',
    thumbnail: `${base}images/works/project-golab/project-golab-1.png`,
    description: 'HTTP リクエストが DNS → CDN → LB → WAF → アプリへ届くまでの通信経路をステップごとにトレースして学ぶ学習 Web サービス。Go 標準ライブラリのみ（外部依存ゼロ）+ embed.FS のシングルバイナリ構成で、テスト 443 件。path-trace-lab.sorapenguin.dev として本番稼働中。',
    detail: `GoLab（PathTraceLab）— HTTP 経路トレース学習サービス（Go・本番稼働中）

HTTP リクエストがクライアントからサーバーに届くまでの通信経路（DNS 解決 → CDN → ロードバランサー → WAF → アプリケーション）を、ステップごとにトレースしながら学ぶ Web サービスです。AWS ALB のヘルスチェックやタイムアウトの階層関係など、実務で判断に迷うポイントをラボ 22 件のシナリオに落とし込んでいます。

RouteLab（Cisco CLI 演習・TypeScript/React）、InfraLab（Linux 障害対応・C#/.NET）に続く 3 つ目の学習サービスで、「ネットワーク機器の CLI」「サーバー障害対応」「HTTP/クラウドの通信経路」と題材を棲み分けています。3 サービスを TypeScript / C# / Go という異なる言語・アーキテクチャで実装し、題材に応じた技術選定を行っているのが特徴です。

【技術的な特徴】
Go 1.22 の標準ライブラリのみで実装し、フレームワーク・外部依存はゼロです。静的ファイルは embed.FS でバイナリに埋め込み、デプロイは「シングルバイナリ 1 個」で完結します。通信経路のシミュレーションは決定論的に実装し、go test 443 件（全件パス）+ go vet で品質を担保しています。

VPS 上で Docker コンテナとして HTTPS 公開中です。`,
    tech: ['Go', 'net/http', 'embed.FS', 'Docker', 'VPS'],
    productUrl: 'https://path-trace-lab.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-golab/project-golab-1.png`,
          `${base}images/works/project-golab/project-golab-2.png`,
        ],
        caption: 'トップページには Guided Labs 一覧が表示され、22 件のラボから学習テーマ（Host Routing / Redirect / Timeout / Malformed Response など）を選べます。ラボ詳細画面は 3 ペイン構成で、左に Stage ごとの学習目標・観察ポイント・よくある誤解、中央に構成図（Client → ALB → Application）と設定選択、右に仮想テスト結果を表示します。設定を選んで仮想テストを実行すると、リクエストの流れ（8 ステップ）と各サービスの状態が展開表示され、「なぜその結果になったか」を経路単位で確認できます。',
      },
    ],
  },
  {
    slug: 'project-starterra',
    title: 'StarTerra',
    thumbnail: `${base}images/works/project-starterra/project-starterra-2.png`,
    description: 'Kotlin Multiplatform（KorGE）製の探索ゲーム + ロジックパズルシリーズ。8 種類のパズル生成エンジンを自作し、「冗長ヒント率 78%→0%」の定量的な生成品質改善を 8 エンジン中 4 エンジンへ横展開。seed 固定の自動品質回帰テスト（135 テスト全緑）で品質を恒久保証。開発中。',
    detail: `StarTerra — パズル生成エンジン × KMP ゲーム（開発中）

Kotlin Multiplatform（KorGE 6.0）製の 2.5D 探索ゲーム本編と、「不思議の街」ロジックパズルシリーズを組み合わせた開発中のプロジェクトです。技術的な中核は 8 種類のパズル生成エンジン（属性推理・天秤・グループ分け・数直線・向き合わせ・円卓・経路トレース・順序推理）で、共通インターフェースで抽象化しエンジンを追加しやすい設計にしています。

【生成品質の定量的改善】
「論理パズルの自動生成は、解けるだけでなくヒントが最小限であるべき」という品質基準を立て、生成アルゴリズムを改善しました。貪欲法での候補絞り込み + ヒント最小化パス + リシャッフル再試行により、順序推理エンジンの冗長ヒント率を 78% から 0% まで削減。この手法を経路トレース・向き合わせ・属性推理の各エンジンにも横展開し、8 エンジン中 4 エンジンで冗長ヒント 0 を達成しています。品質は seed 0〜100 の自動回帰テストで恒久的に保証しており、テスト 135 件が全て通過しています。

【アーキテクチャ】
本編ゲーム（Android / JVM Desktop の KMP 二重ターゲット）とパズルエンジンを疎結合に保ち、パズルはブラウザで動く JS プレビュー実装としても独立動作します。先行プロジェクト StarSaga（モンスター収集 RPG・T2 まで実装完了）からカメラ設計・グリッド移動・セーブ設計を技術継承しています。

「作って終わり」ではなく「生成品質を数値で測って改善し、回帰テストで守る」という開発姿勢を示す作品です。`,
    tech: ['Kotlin', 'KMP', 'KorGE', 'kotlinx.serialization', 'kotlin.test', 'JavaScript'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [
      {
        images: [
          `${base}images/works/project-starterra/project-starterra-2.png`,
          `${base}images/works/project-starterra/project-starterra-1.png`,
        ],
        caption: '8 エンジンのひとつ「経路トレース（ROUTE TRACE）」。ノード間のヒント（「B は 2 番目に訪れます」など）から訪問順を確定し、線を引いて経路を復元します。難易度切り替え・段階的ヒント（方針 → 中間ヒント → 大ヒント）・コイン経済を実装。探索パートは「不思議の街（STAR OUTPOST）」を舞台にした 2.5D マップで、街に点在するノードから 8 エンジンすべてにアクセスできます（実機/エミュレーターで実際にプレイして撮影）。',
      },
    ],
  },
]
