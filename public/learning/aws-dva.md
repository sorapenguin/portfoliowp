---
provider: AWS
exam: Developer Associate
examCode: DVA-C02
description: サーバーレス・DynamoDB・コンテナ・CI/CD・非同期処理・セキュリティをハンズオンで実践。アプリ開発者の視点でAWSの設計判断と実装力を体系的に習得
status: completed
---

# AWS DVA-C02 ハンズオン学習記録

## 概要

AWSのアプリケーション開発者向けAssociate認定である **Developer Associate（DVA-C02）** の取得に向け、サーバーレス・DynamoDB・コンテナ・CI/CD・非同期処理・セキュリティの全領域を体系的にハンズオンで実践しました。「このサービスをどう組み合わせ、どう安全にデプロイするか」という設計判断まで含めた開発力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| サーバーレス & Lambda | バージョン管理・Alias運用・外部モジュールパッケージング・イベント駆動設計 |
| API & 非同期処理 | REST API設計・SQS/SNS疎結合・Step Functions状態管理・Kinesisストリーミング |
| DynamoDB & データ設計 | PK/SK設計・GSI活用・DAXキャッシュ・Streams連携・サーバーレスETL |
| コンテナ & CI/CD | ECS(Fargate/EC2)・Blue/Greenデプロイ・CodePipeline・SAMデプロイ |
| セキュリティ & アクセス制御 | IAMポリシー設計・Secrets Manager・KMS暗号化・Cognito認証 |
| IaC & 可観測性 | CloudFormation・Change Set・X-Ray・CloudWatch・VPC Flow Logs分析 |

---

## 領域別 詳細

### 1. サーバーレス & Lambda

Lambda関数の基本から、本番運用を意識したバージョン管理・Alias設計まで実践しました。$LATESTと固定バージョンの使い分けを理解した上で、DEV/PRODのAliasによる環境分離デプロイを実装。外部Pythonライブラリ（requestsなど）をEC2ビルド環境でパッケージングし、S3経由でデプロイする実務的なフローも体験しています。

イベントソースとの統合では、S3アップロードをトリガーにしたファイルコピー処理、DynamoDB Streamsからのリアルタイム変更検知、EventBridgeによる定期スケジュール実行、SESと組み合わせたメール通知など、多様なイベント駆動パターンを実装しました。boto3を活用してLambdaからEC2を制御する自動化処理も構築し、サーバーレスでのインフラ操作設計を習得しています。

**設計判断の実践例**
- $LATEST vs 固定バージョンの使い分け（開発中 vs 本番安定版）
- Aliasによる環境分離とデプロイ切替（DEV/PROD）
- 外部モジュール依存のパッケージング（pip install --target でZIPに含める）
- IAMロールの権限スコープ設計（Lambda実行権限とリソースアクセスの分離）

---

### 2. API Gateway & 非同期処理アーキテクチャ

REST APIの設計から非同期メッセージング基盤まで幅広く実践しました。API GatewayではMock統合・Lambda統合・パスパラメータ/クエリパラメータ処理・Mapping Templateによるリクエスト変換を実装。AWS SAMを使ったサーバーレスAPIのIaCデプロイも体験し、サーバーレス問い合わせフォーム（API Gateway + Lambda + SES）を通じてエンドツーエンドのAPIアーキテクチャを構築しました。

SQSではStandard/FIFOの違い、Visibility TimeoutとDelay Queueの制御、Dead Letter Queue（DLQ）による障害メッセージ隔離を実装。Step FunctionsではChoice/Parallel/Wait状態を組み合わせた複雑なワークフロー、DynamoDBとSNSと連携した業務フローも構築しました。KinesisではEC2アクセスログをStreams → Firehose → S3に流すリアルタイム収集パイプラインも実装しています。

**設計判断の実践例**
- SQS Visibility Timeout vs Delay Queue の違いと使い分け
- DLQ（デッドレターキュー）による障害メッセージ隔離設計
- Step Functions の Task/Choice/Parallel による複雑ワークフローの状態管理
- API Gateway のMock統合（バックエンド不要の開発初期検証）

---

### 3. DynamoDB & データ設計

NoSQLの設計原則を、アクセスパターン主導のモデリングとして体系的に実践しました。Partition Key / Sort Keyの基本構造から、GSIによる非キー属性検索・LSIとの使い分け、DAXインメモリキャッシュによる読み取り性能改善まで実装。PartiQLを使ったSQLライクなCRUD操作、S3・Lambda・DynamoDBを組み合わせたCSV/JSONデータの自動取り込みパイプライン（サーバーレスETL）も構築しています。

DynamoDB Streamsを活用したリアルタイムデータ連携（DynamoDB → Lambda → S3）も実装し、変更データキャプチャ（CDC）パターンを習得しました。S3 → SQS → Lambda → DynamoDBのイベント駆動パイプラインを通じて、疎結合なデータ処理アーキテクチャの設計力も身につけています。

**設計判断の実践例**
- Partition Key / Sort Key設計がクエリ性能を決定するメカニズム
- GSI（後から追加可能）vs LSI（作成時のみ）の選定基準
- DAXキャッシュ適用判断（読み取り頻度・キャッシュ整合性要件）
- Scan（全件検索）vs Query（キー前提の高速検索）の性能差と使い分け

---

### 4. コンテナ & デプロイ戦略

コンテナ基盤の構築から、ゼロダウンタイムデプロイまで実践しました。ECSではFargateモード（インフラ管理不要）とEC2モードの両方を実践し、ALBとの組み合わせによる負荷分散、Target Tracking AutoScalingによる自動スケーリングも検証。EKSではkubectlによるKubernetesクラスタの接続・操作の基礎を習得しています。

デプロイ戦略では、Elastic BeanstalkのBlue/GreenデプロイによるCNAMEスワップ、ECS + CodeDeploy Blue/Greenによる無停止デプロイ＋Lambda自動テストを実装。CodePipelineでS3からEC2へのCI/CDパイプラインを構築し、デプロイ成功/失敗をEventBridge + SNSで通知する自動監視まで統合しました。AWS SAMではsam init/build/deployの一連のフローでサーバーレスAPIをIaCで管理する実践も行っています。

**設計判断の実践例**
- ECS Fargate vs EC2モードの使い分け（インフラ制御の要否）
- Blue/Green vs ローリングデプロイの選定基準（ダウンタイム許容度）
- AppSpec.ymlによるデプロイフックと自動テストの組み込み
- SAMテンプレートによるサーバーレスリソースのIaC管理

---

### 5. セキュリティ & アクセス制御

「認証・認可・暗号化・監査」の4軸でセキュリティ設計を実践しました。IAMではユーザー・グループ・カスタムポリシー（JSON）・ロールの全要素を体系的に構成し、最小権限原則・Implicit Deny・サービス間の信頼ポリシー（Trust Policy）を設計。EC2にIAMロールを付与してアクセスキーなしでS3操作するセキュアアクセスも実装しています。

Secrets Managerを使ったLambdaへのセキュアな認証情報注入、KMS + S3 + CloudTrailの統合によるデータ暗号化と操作監査証跡の確保、WAF + ALBの組み合わせによるSQLインジェクション対策・Geo制限、AWS Configによるセキュリティグループのコンプライアンス継続監視も実装。Cognito + Amplifyを使った認証付きWebアプリの構築も体験し、OAuthフローの設計を理解しています。

**設計判断の実践例**
- IAMロールのTrust PolicyとPermissions Policyの役割分離（誰が使えるか vs 何ができるか）
- Secrets Manager vs 環境変数によるシークレット管理の使い分け
- KMS暗号化とCloudTrail監査証跡の組み合わせによるデータ保護設計
- AWS Config（継続的コンプライアンス評価）vs Trusted Advisor（ベストプラクティスチェック）の使い分け

---

### 6. IaC & 可観測性

インフラのコード管理と、システムの状態を可視化する可観測性の両方を実践しました。CloudFormationではLAMP・VPC・EC2・Nested Stackの構築を通じてTemplate/Stack/Parameters/Outputsの構造を習得。Change Setによる変更前の差分確認と安全な本番更新、AWS CLIによるVPC構築・EC2 Webサーバー公開の自動化も実装しています。

可観測性ではAWS X-RayによるCloudFormation + DynamoDB + SQS構成の分散トレース分析、CloudWatch Agent導入によるEC2のメモリ/ディスク監視（標準メトリクスでは取得できない内部指標）、VPC Flow Logs → S3 → AthenaによるネットワークログのSQL分析、CloudWatch Live Tailによるリアルタイムログ監視を構築しています。

**設計判断の実践例**
- CloudFormation Change Set による変更プレビュー（Replace が発生するリソースの事前確認）
- Nested Stack によるテンプレートモジュール化（再利用性・保守性の向上）
- X-Ray によるサービス間ボトルネック・エラー箇所の特定手法
- CloudWatch Agent vs 標準メトリクスの使い分け（メモリ/ディスク計測にはAgent必須）

---

*AWS Certified Developer - Associate（DVA-C02）は、AWSを使ったアプリケーションの開発・デプロイ・デバッグ・最適化の能力を問うAssociate認定です。Lambda・DynamoDB・API GatewayなどのコアサービスをCI/CDやセキュリティと組み合わせた実践的な設計力を、すべてハンズオンで積み上げています。*
