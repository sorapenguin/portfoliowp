
const base = import.meta.env.BASE_URL

export const projects = [
  // ===== TOP 4 =====
  {
    slug: 'project-a',
    title: 'TechQuiz',
    thumbnail: `${base}images/works/project-a/project-a-thumb.png`,
    description: 'IT 資格の学習サービス。応用情報・CCNP・LPIC・Java・クラウド資格までを 1 か所で演習できます。Django 製・VPS で本番運用中。',
    detail: `TechQuiz — IT 資格の問題演習サービス（本番運用中）

自分が使いやすい問題集を作りたかったのが出発点です。

複数分野の問題を横断して演習できます。未出題・間違えた問題・連続正解といった状況で出題を絞り込め、選択せずに次へ進む自動再生と読み上げにも対応しています。問題はローカル LLM の下書きを、別工程でレビュー・検証してから反映しています。ポートフォリオ閲覧用のデモと、実利用者向けのサービスを同じ基盤で運用しています。

構成: Python / Django / Gunicorn / PostgreSQL / Redis。Docker + Traefik で VPS に配置し、Prometheus / Grafana で監視。GitHub Actions で CI。`,
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
    thumbnail: `${base}images/works/project-routelab/project-routelab-thumb.png`,
    description: 'Cisco 機器の CLI をブラウザで練習できる学習サービス。設定構築とトラブルシューティングを、選択式・手入力・写経・カードの 4 モードで演習できます。React + TypeScript 製・VPS で本番公開中。',
    detail: `RouteLab — Cisco CLI 演習サービス（本番公開中）

自分がコマンド学習で詰まったのが作ったきっかけです。

ブラウザ上の疑似 CLI で機器を設定し、show コマンドで結果を確認できます。設定構築とトラブルシューティングの 2 系統があり、演習モードは選択式・手入力・写経・カードの 4 種を切り替えられます。スマートフォンでも同じ演習ができます。

構成: React / TypeScript / Vite / Zustand / TailwindCSS、Express（採点 API）。VPS 上に Docker + Traefik で配置し HTTPS 公開。`,
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
    thumbnail: `${base}images/works/project-m/project-m-thumb.png`,
    description: 'ノノグラム・ヌリカベ・カックロ・ピクセルアートをブラウザで遊べるパズルサイト。問題はすべて自作の生成器で作っています。Ktor 製・VPS で本番運用中。',
    detail: `Web パズルサービス（本番運用中）

論理で解けて、論理で作れるパズルなら量産できると考えたのが出発点です。

4 種類のパズルをブラウザで遊べます。問題は手作りではなく、種類ごとに生成器を書いて自動生成しており、解けることは生成器の側で保証しています。

構成: Kotlin / Ktor / PostgreSQL、生成器は Python。フロントエンドはビルドツールなしの Vanilla HTML + CSS + JS。Docker + Traefik で VPS に配置。`,
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
    description: '武器を合成して強化し、ステージを進める放置型 RPG。長く遊んできたジャンルなので、遊ぶ側としての感覚を設計に入れています。Kotlin + Ktor のフルスタック構成。',
    detail: `StellarRise — 放置型 RPG（Android / Ktor API）

自分が面白いと思うゲームを実装してみたかった、というのが出発点です。放置ゲームは長く遊んでいるジャンルでした。

武器を自動生成・合成して攻撃力を上げ、ステージを進めます。プレステージ（周回）、サポートキャラの育成、クラウドセーブを備えています。毎日触るゲームなので、画面遷移を減らして操作数が増えないようにしています。

構成: Kotlin / MVVM / Clean Architecture / Room / DataStore / WorkManager / Retrofit。サーバーは Ktor / PostgreSQL / JWT、Docker で配置。`,
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
    thumbnail: `${base}images/works/project-jet/project-jet-thumb.png`,
    description: 'Java のコードを読んで「実行するとどうなるか」を答える問題集。知識問題ではなく、実行順序を追う練習に絞っています。React + TypeScript 製・VPS で本番運用中。',
    detail: `JET — Java 実行トレース問題集（本番運用中）

Java の学習で、知識よりも先にコードを追う速度で詰まったのが作ったきっかけです。

「このコードが動くとどうなるか」だけを問う問題集です。Silver / Gold の頻出テーマを、実行結果を答える形式に置き換えています。期待値は javac の実行結果と機械照合してから登録しています。

構成: React / TypeScript / Vite。Docker + Traefik で VPS に配置。`,
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
    description: '4 元素から素材を発見・合成していく放置系の錬金術ゲーム。プレステージごとに世界のテーマが変わる構成です。Kotlin 製。',
    detail: `AlchemyGame — 放置系錬金ゲーム（Android / Ktor API）

錬成と放置を組み合わせたら面白くなるか試したかった作品です。

素材を合成して発見を広げ、最終素材の合成で世界が切り替わります。錬金術から料理・生物進化・宇宙・文明史へとテーマが変わり、それぞれの進行を独立して管理します。欲しい素材から材料をさかのぼる一括合成と、期限付きの引継ぎコードを備えています。

構成: Kotlin / MVVM / Clean Architecture / DataStore / WorkManager / Retrofit。サーバーは Ktor / PostgreSQL / JWT。`,
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
    description: 'Android 版 StellarRise をブラウザで触れるようにしたデモ。インストール不要で、リンクを開けばそのまま遊べます。TypeScript + Vite 製。現在は公開を停止しています。',
    detail: `StellarRise Web — ブラウザ版デモ（公開中）

アプリを入れてもらうのは難しいので、リンクを開けばそのまま触れるものを用意しました。

Android 版のゲームループをブラウザ向けに実装したデモです。インストールも登録も不要で、その場で遊べます。

構成: TypeScript / Vite。Docker コンテナとして VPS に配置し、Traefik で HTTPS 公開。`,
    tech: ['TypeScript', 'Vite', 'Docker', 'Traefik', 'Cloudflare', "Let's Encrypt", 'Ktor'],
    productUrl: 'https://stellarrise-web.sorapenguin.dev',
    githubUrl: null,
    // 2026-09-03 時点で 404。復旧したら offline を外し workGroups の service へ戻す
    offline: true,
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
    description: 'モンスター育成合成・ターン制ローグライク・ノノグラム・塗り絵を 1 本にまとめた Android ゲーム。Kotlin 製。',
    detail: `StarForge — 複合ジャンル Android ゲーム

パズルに育成とローグライクを足したら遊べるものになるか、試した作品です。

ノノグラムで資源を集め、仲間を増やして育て、ダンジョンを潜ります。ダンジョンのマップは自動生成で、視界の描画・経路探索・自動探索を独自に実装しています。進行が最後まで成立するかは、乱数の種を変えたシミュレーションで確認しています。

構成: Kotlin / MVVM / Clean Architecture / DataStore / Retrofit / OkHttp、描画は Canvas。時刻とパズル配信は Ktor API。`,
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
    description: '鉱石を掘り、仲間を増やし、探索派遣で効率を上げていく放置ゲーム。Unity / C# 製。',
    detail: `IdleMine — 放置型鉱山採掘ゲーム（Android / Unity）

Unity と C# で 1 本作り切ってみたかったのが出発点です。

採掘は自動で進み、作戦を選ぶと採掘 AI の動き方が変わります。フロアを解放し、ガチャで仲間を増やし、探索派遣とガーデンバフで効率を上げます。敵との戦闘や転生は入れず、のんびり遊べる作りにしています。

構成: Unity 6 LTS / C#。サーバー時刻は API から取得。`,
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
    description: 'Spring Boot から Ktor へ移植したバックエンド学習用の EC サイト。運用ののち停止・アーカイブしました。',
    detail: `EC サイト — バックエンド移植の練習作（停止・アーカイブ済み）

業務システムの定番構成を一度、端から端まで作ってみたかった作品です。

商品・カート・注文・在庫・クーポン・売上ダッシュボード・二段階認証まで実装しました。その後 Spring Boot から Ktor へ移植し、しばらく運用したのち、アクセス状況を見て停止・アーカイブしました。

構成: Kotlin / Ktor / FreeMarker / PostgreSQL / Docker。`,
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
    description: 'Jetpack Compose 製のノノグラムパズル。最初に完成まで持っていけたゲームです。',
    detail: `ノノグラム — Android パズルゲーム

最初に完成させられたゲームです。仕様が単純なものから始めました。

問題は Python 側のソルバーで生成し、アプリは解く側に専念しています。このパズル部分は、後に StarForge へ統合しました。

構成: Kotlin / Jetpack Compose / Clean Architecture。バックエンドは Ktor。`,
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
    description: 'VPS 1 台で複数の本番サービスを同居運用している個人インフラ。Docker / Traefik / Prometheus / Grafana 構成。',
    detail: `本番サービス運用基盤

運用作業そのものは好きではないので、手をかけずに回る形にするのが方針です。

学習サービス群とゲームのバックエンドを 1 台の VPS に同居させ、共通の基盤として運用しています。コンテナを作ってルーティング定義を足せば HTTPS まで通る形にしてあり、新しいものを短時間で公開に載せられます。監視と通知、定期バックアップ、復旧手順書まで用意しています。

構成: Ubuntu / Docker / Docker Compose / Traefik / PostgreSQL / Prometheus / Grafana / Cloudflare。問題コンテンツ生成用にローカル LLM のパイプラインを併設。`,
    tech: ['Docker', 'Docker Compose', 'Traefik', 'PostgreSQL', 'Prometheus', 'Grafana', 'Cloudflare', 'Ubuntu', 'Python', 'Ollama', 'LLM', 'GitHub Actions'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-g',
    title: 'AWS 構成案（Terraform）',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'VPS の本番構成を AWS のマネージドサービスで組み直した場合の Terraform 設計案。実環境へは適用していません。',
    detail: `AWS 構成案（Terraform IaC）

⚠️ 実際の AWS 環境へのデプロイは行っていません。VPS 本番構成をもとに、AWS へ移すならどうなるかを設計し、Terraform コードに落とした構成案です。

ALB からプライベートサブネットの ECS Fargate、DB サブネットの RDS へ、という多層構成です。閉じ忘れがそのまま費用になるため、実環境への適用は行わず、設計とコード、移行後のコスト概算までにとどめています。

構成: Terraform / VPC / ALB / ECS Fargate / RDS / ECR / Secrets Manager / CloudWatch / IAM。`,
    tech: ['AWS', 'Terraform', 'VPC', 'ALB', 'ECS Fargate', 'RDS', 'ECR', 'Secrets Manager', 'CloudWatch', 'IAM'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-h',
    title: 'IslandDev',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Unity で作った無人島開拓ゲームを、Kotlin Multiplatform（KorGE）で作り直した作品。',
    detail: `IslandDev — 無人島開拓ゲーム（Unity → KorGE 移植）

同じゲームを別の技術で作り直すと設計がどう変わるかを見たくて始めました。

砂浜から山頂までのゾーンを開拓し、資源を集め、道具と施設を作って進めます。自動採取・自動戦闘で、手を離しても進みます。後継版は、実装と仕様書の食い違いを解消してから凍結しました。

構成: Unity 6 / C#（初代）、Kotlin / KorGE / KMP（後継版）。`,
    tech: ['Unity 6', 'C#', 'Android', 'Kotlin', 'KorGE', 'KMP'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
  {
    slug: 'project-infralab',
    title: 'InfraLab',
    thumbnail: `${base}images/works/project-infralab/project-infralab-thumb.png`,
    description: 'Linux の障害対応を、四択ではなく「調べて・原因を選んで・直して・復旧を確認する」流れで練習する学習アプリ。C# / .NET 製・VPS で本番運用中。',
    detail: `InfraLab — 障害対応の演習サービス（本番運用中）

単純な四択問題集ではない体験ができないか、と考えたのが出発点です。あわせて C# で 1 本作りたい、という動機もありました。

現象を確認し、コマンドで調べ、原因を選び、対処し、復旧を確認する、という順に判断を積み上げます。正答と採点ルールはサーバー内部に置き、クライアントには選択肢のラベルだけを送ります。

構成: C# / .NET / ASP.NET Core Minimal API / Blazor WebAssembly / EF Core / PostgreSQL。Docker + Traefik で VPS に配置。`,
    tech: ['C#', '.NET 10', 'ASP.NET Core', 'Blazor WebAssembly', 'EF Core 10', 'Npgsql', 'PostgreSQL', 'Docker', 'VPS'],
    productUrl: 'https://runbook-lab.sorapenguin.dev',
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-golab',
    title: 'GoLab（PathTraceLab）',
    thumbnail: `${base}images/works/project-golab/project-golab-1.png`,
    description: 'HTTP リクエストが DNS から CDN・ロードバランサー・WAF を経てアプリに届くまでを、経路単位でたどって学ぶサービス。Go 製・VPS で本番運用中。',
    detail: `GoLab（PathTraceLab）— 通信経路の学習サービス（本番運用中）

Go で 1 本作ること、そして外部依存を持たないという制約を先に決めて始めた作品です。

設定を選んで仮想的にリクエストを流すと、各段で何が起きて結果がどうなったかが展開されます。ロードバランサーのヘルスチェックやタイムアウトの階層関係など、実務で判断に迷うところを題材にしています。標準ライブラリだけで書き、静的ファイルもバイナリに埋め込んで配布物を 1 個にしています。

構成: Go 標準ライブラリのみ、embed.FS でシングルバイナリ。Docker + Traefik で VPS に配置。`,
    tech: ['Go', 'net/http', 'embed.FS', 'Docker', 'VPS'],
    productUrl: 'https://path-trace-lab.sorapenguin.dev',
    githubUrl: null,
    sections: [
      {
        images: [
          `${base}images/works/project-golab/project-golab-1.png`,
          `${base}images/works/project-golab/project-golab-2.png`,
        ],
        caption: 'トップページには Guided Labs の一覧が表示され、学習テーマ（Host Routing / Redirect / Timeout / Malformed Response など）を選べます。ラボ詳細画面は 3 ペイン構成で、左に Stage ごとの学習目標・観察ポイント・よくある誤解、中央に構成図（Client → ALB → Application）と設定選択、右に仮想テスト結果を表示します。設定を選んで仮想テストを実行すると、リクエストの流れ（8 ステップ）と各サービスの状態が展開表示され、「なぜその結果になったか」を経路単位で確認できます。',
      },
    ],
  },
  {
    slug: 'project-walllab',
    title: 'WallLab',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Cisco ASA ファイアウォールの CLI を練習するドリル。RouteLab の Cisco IOS 版に対する ASA 版です。React + TypeScript 製・公開準備中。',
    detail: `WallLab — Cisco ASA CLI 演習サービス（開発中）

RouteLab と同じ「実際にコマンドを打つ」形式を、ファイアウォールに広げた作品です。ASA は IOS と別方言で、実機も用意しにくい領域です。

インターフェース設定、ACL と access-group、NAT、object-group、管理アクセス、インスペクション、サイト間 VPN までを扱います。演習モードは RouteLab と同じ 4 種です。

構成: React / TypeScript / Vite / TailwindCSS。サーバーを持たず、記録はブラウザ内に保存。`,
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Vitest'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
  {
    slug: 'project-cdlab',
    title: 'CLIDrillLab',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Linux / Docker / Kubernetes を横断するタイピング式の CLI ドリル。React + TypeScript 製・公開準備中。',
    detail: `CLIDrillLab — Linux / コンテナの CLI ドリル（開発中）

LPIC の上位試験を勉強していて、追加でやれる教材が少なかったのが作ったきっかけです。RouteLab の Cisco 版に対する Linux 版にあたります。

「症状の確認 → 調査 → 対処 → 復旧確認」の順に、数ステップのコマンドを続けて打ちます。LPIC 系に加えて、Docker と Kubernetes の典型的な詰まり方を扱います。

構成: React / TypeScript / Vite / TailwindCSS。`,
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
  },
  {
    slug: 'project-mathlab',
    title: 'MathLab',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: '大学受験レベルの数学・物理・化学を、数式を直接入力して解く問題集。Python / Flask 製・公開準備中。',
    detail: `MathLab — 数式入力式の問題集（公開準備中）

数学は解法が複数あるので単一解にならない、と気づいたのが設計の出発点です。

数式をそのまま打ち込んで解きます。採点は文字列比較ではなく SymPy による同値判定で、展開形と因数分解形のどちらでも正解になります。「平方完成せよ」のように形を問う設問だけは、形も判定します。1 問は複数の段階に分かれていて、前段の結果を引き継ぎます。

構成: Python / Flask / SymPy、MathML 組版。フロントエンドはビルドステップなし。`,
    tech: ['Python', 'Flask', 'SymPy', 'MathML', 'JavaScript'],
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [],
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
本編ゲーム（Android / JVM Desktop の KMP 二重ターゲット）とパズルエンジンを疎結合に保ち、パズルはブラウザで動く JS プレビュー実装としても独立動作します。先行プロジェクト StarSaga（モンスター収集 RPG）からカメラ設計・グリッド移動・セーブ設計を技術継承しています。

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
  {
    slug: 'project-starsaga',
    title: 'StarSaga',
    thumbnail: `${base}images/works/project-starsaga/project-starsaga-2.png`,
    description: 'ブラウザでもスマホでも遊べるモンスター収集 RPG。ひとつのコードから Android・デスクトップ・ブラウザの 3 つに出しています。Kotlin Multiplatform（KorGE）製。',
    detail: `StarSaga — モンスター収集 RPG（Kotlin Multiplatform / KorGE）

自分が面白いと思うゲームを実装してみたかった、というのが出発点です。

星を渡り歩いて仲間を集め、出撃 3 体の役割の組み合わせで決まる「星座」を集めます。第 1 惑星から第 4 惑星まで通してプレイでき、エンディングまで到達します。ひとつのコードから Android・デスクトップ・ブラウザの 3 つに出しており、ブラウザ版はインストールなしで遊べます。

構成: Kotlin / KorGE / Kotlin Multiplatform（Android / JVM / Kotlin/JS）。ブラウザ版は Docker + nginx で配信予定。`,
    tech: ['Kotlin', 'KMP', 'KorGE', 'Kotlin/JS', 'kotlinx.serialization', 'DataStore', 'kotlin.test', 'Docker', 'nginx'],
    // TODO: starsaga.sorapenguin.dev へデプロイしたら、そのURLをここに入れる
    productUrl: null,
    githubUrl: null,
    inProgress: true,
    sections: [
      {
        images: [
          `${base}images/works/project-starsaga/project-starsaga-2.png`,
          `${base}images/works/project-starsaga/project-starsaga-5.png`,
          `${base}images/works/project-starsaga/project-starsaga-3.png`,
          `${base}images/works/project-starsaga/project-starsaga-4.png`,
        ],
        caption: '町では回復所やショップに入れて住人と話せます。町と町をつなぐ道路には草むらがあり、歩いていると星の生きものに出会います。何度か会うと仲間になり、出撃 3 体の役割の組み合わせで星座が結ばれます（図鑑で 35 種類を収集）。画面はブラウザ版（Kotlin/JS ビルド）を実際に操作して撮影したものです。',
      },
    ],
  },
]

// =========================
// トップページ用のグルーピングと 1 行紹介
// （詳細ページは従来どおり description / detail / sections を使う）
// =========================

export const taglines = {
  // 本番稼働中の Web サービス
  'project-a': 'IT 資格の問題演習サービス。1 万問超を分野横断で解ける',
  'project-routelab': 'Cisco CLI をブラウザで叩いて学ぶ演習。538 シナリオ・4 モード',
  'project-infralab': 'Linux 障害対応を「調査 → 原因特定 → 復旧確認」の流れで練習する',
  'project-golab': 'HTTP が DNS・CDN・LB・WAF を通る経路を 1 ホップずつ追う',
  'project-jet': 'Java コードの実行順序を追う読解問題集。606 問',
  'project-m': '4 種類のパズルを自作の生成器で量産したパズルサイト',
  'project-l': 'Android RPG のブラウザ体験版。現在は公開を停止中',

  // Android / デスクトップアプリ
  'project-c': '武器を合成して進める放置 RPG。Kotlin + Ktor のフルスタック',
  'project-e': '4 元素から素材を発見していく放置系の錬金術ゲーム',
  'project-j': '育成合成・ローグライク・パズルを 1 本にまとめた Android ゲーム',
  'project-f': '掘る・仲間を増やす・派遣で回す採掘放置ゲーム。Unity / C#',
  'project-d': 'Jetpack Compose 製のパズル。最初に完成まで持っていけた作品',

  // 運用基盤・開発中
  'project-i': 'VPS 1 台に本番サービスを同居させている個人インフラ',
  'project-starterra': 'パズル生成エンジン 8 種を自作し、生成品質を定量的に改善中',
  'project-starsaga': '1 つのコードから Android・デスクトップ・ブラウザへ出す収集 RPG',
  'project-walllab': 'Cisco ASA ファイアウォール CLI のドリル。RouteLab の ASA 版',
  'project-cdlab': 'Linux / Docker / Kubernetes 横断のタイピング式 CLI ドリル',
  'project-mathlab': '大学受験レベルの数学・物理・化学を、数式を入力して解く問題集',
  'project-h': 'Unity 製の無人島開拓ゲームを Kotlin Multiplatform で作り直した',
  'project-g': 'VPS 構成を AWS のマネージドサービスで組み直した Terraform 設計案',
  'project-b': 'Spring Boot から Ktor へ移植した学習用 EC。運用後に停止・アーカイブ',
}

export const workGroups = [
  {
    id: 'service',
    label: '本番で動いているサービス',
    note: 'いずれも VPS 上で公開中。リンクからそのまま触れます',
    variant: 'featured',
    slugs: [
      'project-a',
      'project-routelab',
      'project-infralab',
      'project-golab',
      'project-jet',
      'project-m',
    ],
  },
  {
    id: 'app',
    label: 'アプリとして配布しているもの',
    note: 'APK / リリースページから入手できます',
    variant: 'compact',
    slugs: ['project-c', 'project-e', 'project-j', 'project-f', 'project-d'],
  },
  {
    id: 'wip',
    label: '運用基盤・開発中のプロジェクト',
    note: '公開準備中のもの、設計だけのもの、停止したものを含みます',
    variant: 'list',
    slugs: [
      'project-i',
      'project-l',
      'project-starterra',
      'project-starsaga',
      'project-walllab',
      'project-cdlab',
      'project-mathlab',
      'project-h',
      'project-g',
      'project-b',
    ],
  },
]
