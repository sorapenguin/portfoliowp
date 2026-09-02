import gallery01 from '../assets/images/gallery01.jpg'

const base = import.meta.env.BASE_URL

export const projects = [
  // ===== TOP 4 =====
  {
    slug: 'project-a',
    title: 'TechQuiz',
    thumbnail: `${base}images/works/project-a/project-a-2-1.png`,
    description: 'IT 資格の学習サービス。応用情報・CCNP・LPIC・Java・クラウド資格までを 1 か所で演習でき、手を止めずに進められる出題モードを備えています。Django 製・VPS で本番運用中。',
    detail: `TechQuiz — IT 資格の問題演習サービス（本番運用中）

自分が使いやすい問題集を作りたかったのが出発点です。

複数分野の問題を横断して演習できます。出題は状況で絞り込め（未出題・間違えた問題・連続正解など）、選択せずに次へ進む自動再生と読み上げにも対応しています。ポートフォリオ閲覧用のデモと、実利用者向けのサービスを同じ基盤で並行運用しています。

設計上の判断:

・出題の絞り込みは正誤の履歴を軸にする。解き直す価値のある問題に戻れないと演習にならない
・問題の生成はローカル LLM に下書きだけを任せ、レビューと検証を別工程に分けてから反映する
・科目設定を差し替えれば同じパイプラインを使い回せる構造にし、分野を足すたびにコードを書かない

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
    thumbnail: `${base}images/works/project-routelab/project-routelab-6.png`,
    description: 'Cisco 機器の CLI をブラウザで練習できる学習サービス。設定構築とトラブルシューティングの 2 系統を、選択式・手入力・写経・カードの 4 モードで演習できます。CCNA / CCNP 範囲。React + TypeScript 製・VPS で本番公開中。',
    detail: `RouteLab — Cisco CLI 演習サービス（本番公開中）

自分がコマンド学習で詰まったのが作ったきっかけです。

ブラウザ上の疑似 CLI で機器を設定し、show コマンドで結果を確認できます。設定構築とトラブルシューティングの 2 系統があり、演習モードは選択式・手入力・写経・カードの 4 種を切り替えられます。

設計上の判断:

・採点はサーバー側で行い、達成条件ごとの部分点を返す
・選択式の選択肢は最低 4 つそろえる（消去法で解けてしまうため）
・シナリオの可解性は AI エージェントに解かせて検証し、実機と挙動が違う箇所は実機を正としてエンジンを直す
・シミュレーターが再現していない領域は出題しない

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
    thumbnail: `${base}images/works/project-m/project-m-1.png`,
    description: 'ノノグラム・ヌリカベ・カックロ・ピクセルアートをブラウザで遊べるパズルサイト。問題はすべて自作の生成器で作っており、解けることをアルゴリズム側で保証しています。Ktor 製・VPS で本番運用中。',
    detail: `Web パズルサービス（本番運用中）

論理で解けて、論理で作れるパズルなら量産できると考えたのが出発点です。

4 種類のパズルをブラウザで遊べます。問題は手作りではなく、種類ごとに生成器を書いて自動生成しています。

設計上の判断:

・生成器の側で「解けること」を保証する。ノノグラムは論理だけで一意に解ける問題のみ採用し、カックロは盤面の接続性を保証しながら生成する
・問題は静的ファイルではなく DB に持ち、管理画面から公開・非公開を切り替える
・フロントエンドはビルドツールを使わない。配信が軽く、後から手を入れるコストも低い

構成: Kotlin / Ktor / PostgreSQL、生成器は Python。Vanilla HTML + CSS + JS。Docker + Traefik で VPS に配置。`,
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
    description: '武器を合成して強化し、ステージを進める放置型 RPG。長く遊んできたジャンルなので、遊ぶ側として不満だった点を設計に落としています。Kotlin + Ktor のフルスタック構成。',
    detail: `StellarRise — 放置型 RPG（Android / Ktor API）

自分が面白いと思うゲームを実装してみたかった、というのが出発点です。放置ゲームは長く遊んでいるジャンルで、遊ぶ側としての不満が分かっていました。

武器を自動生成・合成して攻撃力を上げ、ステージを進めます。プレステージ（周回）、サポートキャラの育成、クラウドセーブを備えています。

設計上の判断:

・画面遷移を減らす。放置ゲームは毎日触るので、1 回あたりの操作数がそのまま継続率になる
・オフライン報酬は端末時計ではなくサーバー時刻を基準にする。時計を進めるだけで報酬が増えては成立しない
・クラウドセーブはパスワードだけで引き継げるようにし、アカウント登録を挟まない
・セーブは機能追加で壊れやすいので、読み込み時に旧データを補正してから使う

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
    thumbnail: `${base}images/works/project-jet/project-jet-1.png`,
    description: 'Java のコードを読んで「実行するとどうなるか」を答える問題集。知識問題ではなく、実行順序を追う練習に絞っています。React + TypeScript 製・VPS で本番運用中。',
    detail: `JET — Java 実行トレース問題集（本番運用中）

Java の学習で、知識よりも先にコードを追う速度で詰まったのが作ったきっかけです。そこだけを訓練する教材が欲しくて作りました。

出題は「このコードが動くとどうなるか」に限定しています。Silver / Gold の頻出テーマを、実行結果を答える形式に置き換えました。

設計上の判断:

・出題形式を実行トレースだけに絞る。知識問題は既存の問題集で足りている
・全問題の期待値を javac の実行結果と機械照合してから登録する。手で追ったトレースは自分でも信用できない
・問題の追加はゲート付きのパイプラインを通し、検証を通らないものは登録しない

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
    description: '4 元素から素材を発見・合成していく放置系の錬金術ゲーム。プレステージごとに世界のテーマが変わる構成で、遊びながら不便だった箇所を機能として足しています。Kotlin 製。',
    detail: `AlchemyGame — 放置系錬金ゲーム（Android / Ktor API）

錬成と放置を組み合わせたら面白くなるか試したかった作品です。

素材を合成して発見を広げ、最終素材の合成で世界が切り替わります。錬金術から料理・生物進化・宇宙・文明史へとテーマが変わり、それぞれの進行を独立して管理します。

設計上の判断:

・欲しい素材から必要な材料をさかのぼって一括合成できるようにした。段階が深くなるほど手作業が苦痛になるため
・端末を変えるときのために期限付きの引継ぎコードを発行する。アカウント登録は求めない
・オフライン進捗はサーバー時刻を基準に計算する
・合成・ミッション・実績のロジックを UseCase に分け、状態は不変オブジェクトとして扱う

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
    description: 'Android 版 StellarRise をブラウザで触れるようにしたデモ。APK をインストールしてもらうのは現実的でないため、リンクを開けば遊べる入口として用意しました。TypeScript + Vite 製・VPS で公開中。',
    detail: `StellarRise Web — ブラウザ版デモ（公開中）

アプリを入れてもらうのは難しいので、リンクを開けばそのまま触れるものを用意しました。

Android 版のゲームループをブラウザ向けに実装したデモです。インストールも登録も不要で、その場で遊べます。

設計上の判断:

・本体の移植ではなく、体験の中心だけを別実装にする。ブラウザ側で全機能を追うと保守先が二重になる
・サーバーを持たず、静的配信で完結させる

構成: TypeScript / Vite。Docker コンテナとして VPS に配置し、Traefik で HTTPS 公開。`,
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
    description: 'モンスター育成合成・ターン制ローグライク・ノノグラム・塗り絵を 1 本にまとめた Android ゲーム。掴みにくいジャンルだったので、進行が成立するかを自動シミュレーションで確かめながら作りました。Kotlin 製。',
    detail: `StarForge — 複合ジャンル Android ゲーム

パズルに育成とローグライクを足したら遊べるものになるか、試した作品です。

ノノグラムで資源を集め、仲間を増やして育て、ダンジョンを潜る流れです。ダンジョンのマップは自動生成し、視界の描画・経路探索・自動探索を独自実装しています。

設計上の判断:

・ローグライクは自分にとって仕様の掴みにくいジャンルなので、進行が最後まで成立するかを乱数の種を変えたシミュレーションで自動検証する
・スタミナ回復はサーバー時刻を基準にする
・日替わりショップは日付を種にした抽選にして、サーバーなしで全端末の内容をそろえる
・ゲーム状態は不変オブジェクトで持ち、旧セーブは読み込み時に補正する

構成: Kotlin / MVVM / Clean Architecture / DataStore / Retrofit / OkHttp、描画は Canvas を直接扱う実装。時刻とパズル配信は Ktor API。`,
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
    description: '鉱石を掘り、仲間を増やし、探索派遣で効率を上げていく放置ゲーム。Unity / C# で 1 本仕上げることを目的に作りました。',
    detail: `IdleMine — 放置型鉱山採掘ゲーム（Android / Unity）

Unity と C# で 1 本作り切ってみたかったのが出発点です。

採掘は自動で進み、作戦を選ぶと採掘 AI の動き方が変わります。フロアを解放し、ガチャで仲間を増やし、探索派遣とガーデンバフで効率を上げていきます。

設計上の判断:

・遊びの軸が定まらないと感じた分、検証を厚くした。オフライン収益・採掘速度・進行の整合性を自動実行のシナリオで確かめている
・ガチャは天井を保証し、運の悪さで進行が止まらないようにする
・のんびり遊べることを優先し、敵との戦闘や転生のような詰まりやすい要素を入れない

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
    description: 'Spring Boot から Ktor へ移植したバックエンド学習用の EC サイト。業務システムの定番機能を一通り実装し、その後アクセス状況を見て停止・アーカイブしました。',
    detail: `EC サイト — バックエンド移植の練習作（停止・アーカイブ済み）

業務システムの定番構成を一度、端から端まで作ってみたかった作品です。

商品・カート・注文・在庫・クーポン・売上ダッシュボード・二段階認証まで、EC の一般的な機能を一通り実装しました。その後 Spring Boot から Ktor へ移植し、URL 構造の変更とメモリ使用量の削減を行っています。

設計上の判断:

・移植は機能追加を止めて行い、同じ挙動を保ったまま基盤だけを入れ替える
・約 1 年運用したのち、アクセス状況を見てサービスを停止しアーカイブした。動かし続ける判断より、止める判断のほうが難しかった

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
    description: 'Jetpack Compose 製のノノグラムパズル。最初に完成まで持っていけたゲームで、ここで作った生成の考え方が後の作品につながっています。',
    detail: `ノノグラム — Android パズルゲーム

最初に完成させられたゲームです。仕様が単純なものから始めたほうが、作り切れると考えました。

問題は Python 側のソルバーで生成し、アプリはそれを解く側に専念しています。

設計上の判断:

・生成と出題を分ける。問題の品質は生成器の責任、遊び心地はアプリの責任という切り分け
・画面構成は Clean Architecture に寄せ、後から別ゲームへ移せる形にした

その後、この作品のパズル部分は StarForge へ統合しました。

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
    description: 'VPS 1 台で複数の本番サービスを同居運用している個人インフラ。運用に手をかけたくないので、手をかけずに回る形に寄せています。Docker / Traefik / Prometheus / Grafana 構成。',
    detail: `本番サービス運用基盤

運用作業そのものは好きではないので、手をかけずに回る形にするのが方針です。監視も自動化も、そのための投資として入れています。

学習サービス群とゲームのバックエンドを 1 台の VPS に同居させ、共通の基盤として運用しています。個人開発は作って終わりになりがちですが、実際に人が使う状態で動かし続けているところまでを含めて 1 つの成果と考えています。

設計上の判断:

・サービスの追加を定型化する。コンテナを作り、ルーティング定義を足せば HTTPS まで通る形にしてあり、新しいものを短時間で公開に載せられる
・PostgreSQL はサービスごとに DB を分けつつコンテナは 1 つにまとめ、運用対象を増やさない
・リソースと応答時間を可視化し、異常はチャットへ通知する。定期バックアップと復旧手順書まで含めて用意する
・アクセス状況は自前の解析基盤で見ており、伸びないサービスは停止する判断もしている

構成: Ubuntu / Docker / Docker Compose / Traefik / PostgreSQL / Prometheus / Grafana / Cloudflare。問題コンテンツ生成にはローカル LLM のパイプラインを併設。`,
    tech: ['Docker', 'Docker Compose', 'Traefik', 'PostgreSQL', 'Prometheus', 'Grafana', 'Cloudflare', 'Ubuntu', 'Python', 'Ollama', 'LLM', 'GitHub Actions'],
    productUrl: null,
    githubUrl: null,
    sections: [],
  },
  {
    slug: 'project-g',
    title: 'AWS 構成案（Terraform）',
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'VPS の本番構成を AWS のマネージドサービスで組み直した場合の Terraform 設計案。実環境へは適用していません（コスト事故を避けるための判断）。',
    detail: `AWS 構成案（Terraform IaC）

⚠️ 実際の AWS 環境へのデプロイは行っていません。VPS 本番構成をもとに、AWS へ移すならどうなるかを設計し、Terraform コードに落とした構成案です。

ALB からプライベートサブネットの ECS Fargate、DB サブネットの RDS へ、という多層構成です。

設計上の判断:

・実環境には適用しない。閉じ忘れがそのまま費用になるため、学習目的で開けっぱなしにするリスクを取らなかった
・シークレットはコードに書かず、タスク起動時に注入する
・実行ロールの権限は必要な読み取りだけに絞る
・移行後のコストを概算し、VPS を継続する判断の根拠にした

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
    description: 'Unity で作った無人島開拓ゲームを、Kotlin Multiplatform（KorGE）で作り直した作品。凍結する前に実装と仕様書の食い違いを解消し、使っていない機能を削除しました。',
    detail: `IslandDev — 無人島開拓ゲーム（Unity → KorGE 移植）

同じゲームを別の技術で作り直すと設計がどう変わるかを見たくて始めました。

砂浜から山頂までのゾーンを開拓し、資源を集め、道具と施設を作って進めます。自動採取・自動戦闘で、手を離しても進む設計です。

設計上の判断:

・ゲームロジックをエンジンに依存しない純粋な Kotlin に切り出し、描画側と分ける
・凍結する前に、実装と仕様書の食い違いを解消し、使われていない機能を削除した。止めるときに片付けておかないと、再開できないものになる

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
    thumbnail: `${base}images/works/coming-soon.png`,
    description: 'Linux の障害対応を、四択ではなく「調べて・原因を選んで・直して・復旧を確認する」流れで練習する学習アプリ。採点と正答はサーバー側に置き、クライアントへは渡していません。C# / .NET・VPS で本番運用中。',
    detail: `InfraLab — 障害対応の演習サービス（本番運用中）

単純な四択問題集ではない体験ができないか、と考えたのが出発点です。あわせて C# で 1 本作りたい、という動機もありました。

現象を確認し、コマンドで調べ、原因を選び、対処し、復旧を確認する、という順に判断を積み上げます。フェーズを飛ばした操作や、根拠が出ていない状態での原因選択はサーバー側で拒否します。

設計上の判断:

・正答と採点ルールはサーバー内部に置き、クライアントには選択肢のラベルしか送らない。答えが手元に落ちてくる作りでは演習にならない
・進行状態にバージョンを持たせ、食い違う更新は受け付けない
・リクエストごとに識別子を付け、同じ操作が二重に届いても結果を作り直さない
・コンテンツは全件を機械検証にかけてから登録する

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
    description: 'HTTP リクエストが DNS から CDN・ロードバランサー・WAF を経てアプリに届くまでを、経路単位でたどって学ぶサービス。外部ライブラリを使わないという制約を先に決めて書きました。Go 製・VPS で本番運用中。',
    detail: `GoLab（PathTraceLab）— 通信経路の学習サービス（本番運用中）

Go で 1 本作ること、そして外部依存を持たないという制約を先に決めて始めた作品です。

設定を選んで仮想的にリクエストを流すと、各段でどう扱われて結果がどうなるかが展開されます。ロードバランサーのヘルスチェックやタイムアウトの階層関係など、実務で判断に迷うところを題材にしています。

設計上の判断:

・標準ライブラリだけで書き、フレームワークを入れない。静的ファイルもバイナリに埋め込み、配布物を 1 個にする
・シミュレーションは乱数を使わず決定論的に実装する。学習用途では毎回同じ結果になることが前提
・題材が増えたところでエンジンを差し替え可能な構造にし、DNS 解決・VPC 到達性・ファイアウォール評価・IAM 認可を後から追加した
・分類の語彙をコード側で強制し、カタログ構築時に外れたものを落とす

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
    description: 'Cisco ASA ファイアウォールの CLI を練習するドリル。RouteLab の Cisco IOS 版に対する ASA 版で、ACL・NAT・インスペクション・サイト間 VPN まで扱います。React + TypeScript 製・公開準備中。',
    detail: `WallLab — Cisco ASA CLI 演習サービス（開発中）

RouteLab と同じ「実際にコマンドを打つ」形式を、ファイアウォールに広げた作品です。ASA は IOS と別方言で、実機も用意しにくい領域です。

インターフェース設定、ACL と access-group、NAT、object-group、管理アクセス、インスペクション、サイト間 VPN までを扱います。演習モードは RouteLab と同じ 4 種です。

設計上の判断:

・採点条件に「その設定が無いこと」も書けるようにした。消し忘れを問う問題が作れる
・選択式の選択肢は最低 4 つそろえる
・シナリオはすべて AI エージェントに解かせて可解性を確認する。この過程で、実装・出題・テストが揃って同じ仕様の誤解をしていた箇所が見つかり、まとめて直した
・テストが通っていることは、内容が正しいことの保証にならない。内容のレビューは別工程として扱う

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
    description: 'Linux / Docker / Kubernetes を横断するタイピング式の CLI ドリル。症状の確認から復旧確認までを、コマンド列として続けて打ち切る形式です。React + TypeScript 製・公開準備中。',
    detail: `CLIDrillLab — Linux / コンテナの CLI ドリル（開発中）

LPIC の上位試験を勉強していて、追加でやれる教材が少なかったのが作ったきっかけです。RouteLab の Cisco 版に対する Linux 版にあたります。

1 問がコマンド 1 つで終わらないよう、実務と同じ「症状の確認 → 調査 → 対処 → 復旧確認」の順に数ステップを続けて打たせます。LPIC 系に加えて Docker と Kubernetes の典型的な詰まり方を扱います。

設計上の判断:

・判定は完全一致・順序固定に寄せる。曖昧な採点を持ち込むより、打つ手順を覚えることを優先した
・ヒントに正解コマンドそのものを書かない。書くと写すだけになるため、機械的に検査して追加時に必ず通す
・コマンド入力部は RouteLab から移植し、状態機械は持たせない

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
    description: '大学受験レベルの数学・物理・化学を、数式を直接入力して解く問題集。採点は文字列比較ではなく数式処理系による同値判定で、展開形と因数分解形のどちらでも正解になります。Python / Flask 製・公開準備中。',
    detail: `MathLab — 数式入力式の問題集（公開準備中）

四択では数学が身につかないと考えたのが出発点です。

大学受験レベルの数学・物理・化学を、数式を直接入力して解きます。採点は SymPy による同値判定で、「平方完成せよ」のように形を問う設問だけは形も判定します。1 問は複数の段階に分割し、前段の結果を引き継ぎながら進みます。

設計上の判断:

・数式の評価はサンドボックス化し、別プロセスで実行して時間で打ち切る（式パーサーが eval を経由するため）
・出題内容の検証は、保存済みの解答ではなく問題の式から独立に再計算して突き合わせる
・画面に出す選択肢や判定基準はサーバー側で決める

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
    description: 'ブラウザでもスマホでも遊べるモンスター収集 RPG。ひとつのコードから Android・デスクトップ・ブラウザの 3 つに出しています。出撃 3 体の役割の組み合わせで効果が決まる編成システムが中心です。Kotlin Multiplatform（KorGE）製。',
    detail: `StarSaga — モンスター収集 RPG（Kotlin Multiplatform / KorGE）

自分が面白いと思うゲームを実装してみたかった、というのが出発点です。

星を渡り歩いて仲間を集め、出撃 3 体の役割の組み合わせで決まる「星座」を集めていきます。第 1 惑星から第 4 惑星までを通してプレイでき、エンディングまで到達します。

設計上の判断:

・強い 3 体を選んで固定して終わり、にならないよう、編成の組み合わせ自体に効果を持たせる。覚えることは 1 つだけ増やす
・ゲームロジックは共通コードに置き、時刻・セーブ先・デバッグ判定だけをプラットフォームごとに分ける
・ブラウザ版を出すにあたり、初回ロードの大半を占めていた日本語フォントを、実際に描く文字だけのサブセットに差し替えた。差し替え忘れは自動テストで検出する
・配布はインストールが要らないブラウザ版を主にする

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
