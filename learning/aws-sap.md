---
provider: AWS
exam: Solutions Architect Professional
examCode: SAP-C02
description: エンタープライズネットワーク・多層セキュリティ・コンテナ基盤・DB設計・サーバーレスの5領域を体系的にハンズオンで実践。AWSプロフェッショナルレベルの設計力を習得
status: completed
---

# AWS SAP-C02 ハンズオン学習記録

## 概要

AWS認定の最上位資格である **Solutions Architect Professional（SAP-C02）** の取得に向け、ネットワーク・セキュリティ・コンピューティング・データベース・サーバーレスの5領域を体系的にハンズオンで実践しました。試験範囲の把握にとどまらず、「この設計を選ぶ理由」という判断基準まで含めた実践的な学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| ネットワーク | VPC多層設計・Transit Gatewayハブ構成・CDNエッジセキュリティ |
| セキュリティ | IAM最小権限・KMS暗号化・脅威検知・コンプライアンス自動評価 |
| コンピュート | ECS/EKS基盤・Blue/Greenデプロイ・SQS連動スケーリング |
| データベース | Aurora Multi-AZ・DynamoDB設計・異種DB間マイグレーション |
| サーバーレス | API Gateway＋Lambda完全サーバーレス・Kinesisリアルタイム処理 |

---

## 領域別 詳細

### 1. エンタープライズネットワーク設計

大規模企業環境を想定したVPC設計を実践しました。NACL・セキュリティグループの多層制御から始まり、複数VPCをTransit Gatewayでハブ＆スポーク型に接続する構成を構築。S3へのアクセスをインターネット経由させないGateway Endpoint、SQSへのアクセスをInterface Endpoint（PrivateLink）でプライベート化するなど、通信経路の境界設計まで踏み込んでいます。CloudFront＋WAF＋ALBによるエッジでのセキュリティ制御も実装し、CDNと多層防御を組み合わせた本番構成を習得しています。

**設計判断の実践例**
- VPC Peering と Transit Gateway の使い分け（接続数・推移的ルーティングの要否）
- Gateway Endpoint と Interface Endpoint の選定基準（コスト・プライベート性のトレードオフ）
- 外部通信を最小化するネットワーク境界設計の考え方

---

### 2. 多層セキュリティ & コンプライアンス

「最小権限」「暗号化」「可視化」「自動評価」という4軸でセキュリティ設計を実践しました。IAMではRBAC管理、KMSではS3バケットの暗号化とCloudTrailによる鍵利用の監査証跡を組み合わせ。CloudWatch Metric Filtersで特定操作（例：EC2の意図しない停止）をリアルタイム検知するアラートフローも構築しました。

GuardDutyで脅威を自動検知、AWS Configで「SSHポートを開放しているSGがある」などのルール違反をリアルタイム評価する構成も実装。Secrets Managerを使ったDBパスワードの安全な管理・ローテーション、InspectorによるLambdaコードの脆弱性スキャンまで含め、エンタープライズ水準の多層防御アーキテクチャを体験しています。

**設計判断の実践例**
- セキュリティの可視化設計（誰が何をしたか追跡できる監査証跡の確保）
- コンプライアンス違反を人手を介さず自動検知・通知するフロー
- アプリケーションコードにシークレットを持たせないシークレット管理

---

### 3. コンピューティング & コンテナ基盤

単純なEC2運用を超えた、スケーラブルなコンピューティング基盤の設計を実践しました。Auto Scaling + Launch Templateによるスケーリング設計に加え、SQSキューの深さをトリガーにした動的スケーリングも実装。ECSではEC2モードでの動的ポートマッピングとFargateモードの両方を経験し、ECRへのDockerイメージのビルド・プッシュからデプロイまでのフローを実践。EKSではkubectlを使ったKubernetesクラスタ管理も体験しています。

Elastic BeanstalkではBlue/GreenデプロイのCNAMEスワップや、Rolling+BatchなどのデプロイポリシーをALBと組み合わせて実装。Step FunctionsによるLambdaオーケストレーション（Task / Choice / Parallel / Wait状態）でワークフロー自動化も実践しました。

**設計判断の実践例**
- ゼロダウンタイムデプロイの各戦略（Blue/Green・Rolling・Immutable）の使い分け
- コンテナ化とオーケストレーション（ECS vs EKS の選定視点）
- 負荷の性質に合わせた動的スケーリング設計（CPU使用率 vs キュー深さ）

---

### 4. データベース設計 & マイグレーション

用途に応じたデータベース選定と、本番環境を意識した可用性設計を実践しました。RDSではMulti-AZ構成でのフェイルオーバー検証、暗号化なしDBを暗号化済みへ移行するスナップショットコピー手法を実施。AuroraはRDSより高速なフェイルオーバーを実際に計測し、レプリカへの昇格を確認。ElastiCache Redisによるキャッシュ層設計も習得しました。

DynamoDBはGSIを使った多次元検索、DynamoDB StreamsからLambdaへの連携、PITRによる任意時点リストアを実践。DMSを使ってMySQL→MySQL、PostgreSQL→MySQLの異種DBマイグレーションも実行し、S3上のCSVデータをGlueカタログ化してAthenaでSQLクエリを実行する分析基盤も構築しています。

**設計判断の実践例**
- RDS / Aurora / DynamoDB の用途別選定基準
- 無停止・無損失での暗号化移行手法（スナップショットコピーのトリック）
- 異種データベース間マイグレーションのDMSを使った実務フロー

---

### 5. サーバーレス & イベント駆動アーキテクチャ

サーバーを持たない完全マネージド構成で、スケーラブルなアプリケーション基盤を構築しました。API Gateway + Lambda + DynamoDB + S3による完全サーバーレスWebアプリをゼロから実装し、CognitoとAPI Gatewayオーソライザーによる認証・認可フローも組み合わせました。

イベント駆動では、EventBridgeがEC2の状態変化を検知→Lambda→SESでメール通知するフロー、SQSのVisibility Timeout設計、SNSファンアウト配信を実装。リアルタイムストリーミングでは、EC2上のApacheアクセスログをKinesis Data Streams経由でFirehoseに流しS3に保存するパイプラインを構築。CloudFormation Nested Stacksを使ってLB+ASGのテンプレートをモジュール化するIaC設計も実践しています。さらに、RekognitionとLexを組み合わせたAIチャットボット連携も体験しました。

**設計判断の実践例**
- フルサーバーレスアプリの設計パターンと適用場面
- リアルタイムデータパイプラインの構築（Streams vs Firehose の使い分け）
- IaC（CloudFormation Nested Stacks）によるテンプレートのモジュール化設計

---

*AWS Certified Solutions Architect - Professional（SAP-C02）は、AWSが提供する設計者向け認定の最上位です。実務レベルの複雑なシステム設計・移行・コスト最適化を問われる内容を、すべてハンズオンで実践しています。*
