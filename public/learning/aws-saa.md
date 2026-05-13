---
provider: AWS
exam: Solutions Architect Associate
examCode: SAA-C03
description: ネットワーク・セキュリティ・コンピュート・ストレージ・サーバーレス・IaCを幅広くハンズオンで実践。AWSの定番アーキテクチャパターンを設計する基礎力を習得
status: completed
---

# AWS SAA-C03 ハンズオン学習記録

## 概要

AWS認定の定番資格である **Solutions Architect Associate（SAA-C03）** の取得に向け、ネットワーク・セキュリティ・コンピューティング・ストレージ・サーバーレス・IaCの全領域を体系的にハンズオンで実践しました。「どのサービスを、いつ、なぜ使うか」という選定判断まで含めた基礎設計力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| ネットワーク | VPC多層設計・Transit Gateway・CDNエッジ制御・Bastion三層構成 |
| セキュリティ | KMS暗号化・WAF/GuardDuty/Macie・CloudTrail監査・OpenVPN |
| コンピュート | EC2/Auto Scaling・ECS(Fargate/EC2)・EKS・Spot/Hibernate |
| ストレージ | S3高度設定・RDS/Aurora HA・DynamoDB設計・EFS/EBS/FSx |
| サーバーレス | API Gateway + Lambda・SQS/SNS・Step Functions・IoT連携 |
| IaC & 可観測性 | Terraform・CloudFormation・X-Ray・Flow Logs分析 |

---

## 領域別 詳細

### 1. ネットワーク基盤設計

単純なVPC構築から、実務レベルの多層ネットワーク設計まで実践しました。NACL（ステートレス）とセキュリティグループ（ステートフル）の役割の違いを理解した上で多層防御を構成。Transit Gatewayを使ったVPC間ハブ接続と、VPC Peeringによるポイントツーポイント接続の使い分けも実装しました。

プライベートSubnet上のEC2をBastionホスト経由で安全に管理する三層構成、ALBによる負荷分散とヘルスチェック、CloudFront＋WAFによるエッジセキュリティ制御も構築。VPC Reachability Analyzerで通信経路を可視化し、ネットワーク障害の原因特定手法も習得しています。

**設計判断の実践例**
- NACL vs セキュリティグループの役割分離（Subnet単位 vs インスタンス単位）
- VPC Peering vs Transit Gateway の選定基準（接続数・スケーラビリティ）
- S3 Gateway Endpoint vs Interface Endpoint（コスト・プライベート性のトレードオフ）
- パブリック・プライベート Subnet の適切な責務設計

---

### 2. セキュリティ基盤

「暗号化」「脅威検知」「監査」「アクセス制御」の4軸でセキュリティ設計を実践しました。KMSを使ったS3・EBS・AMIの暗号化と、CloudTrailによる操作監査証跡の確保を組み合わせた統合セキュリティ構成を実装。

WAFではIPブロック・SQLインジェクション対策・地域制限をALBやCloudFrontと連携して構成。GuardDutyで脅威を自動検知、Macieでは正規表現カスタム識別子を使ってS3内のPIIを検出するフローも実装しました。OpenVPN on EC2によるVPN構築も体験し、社内からAWSリソースへのセキュアなアクセス経路設計を理解しています。

**設計判断の実践例**
- KMSの職務分離（キー管理者 vs キー利用者を IAM で分離）
- WAFルールの組み合わせ（マネージドルール vs カスタムルール）
- GuardDuty/Macieの自動検知 vs AWS Configのコンプライアンス評価の使い分け
- CloudTrailによる「誰が何を操作したか」の監査設計

---

### 3. コンピューティング & コンテナ基盤

EC2の基本から高度なスケーリング・コンテナ基盤まで幅広く実践しました。Auto Scaling Group + Launch Templateで可用性の高いEC2基盤を構成し、SQSキューの深さをCloudWatchで監視してメッセージ量に応じてインスタンスを自動増減させる動的スケーリングも実装。Spot Instanceによるコスト最適化とHibernateによる状態保持型停止も体験しています。

ECSではFargateモード（インフラ管理不要）とEC2モードの両方を実践し、Secrets Managerと連携したコンテナへのセキュアなシークレット注入も実装。EKSではkubectlによるKubernetesクラスタ管理の基礎を習得。ECSにEBSボリュームをアタッチして永続ストレージを確保する構成も実装しました。

**設計判断の実践例**
- ECS Fargate vs ECS EC2 モードの使い分け（インフラ制御の要否）
- Spot Instance の適用判断（ステートレスかどうか・中断許容度）
- Desired capacity 維持による自己修復設計
- gp2 → gp3 のインプレース変更（ダウンタイムなし）

---

### 4. ストレージ & データベース設計

用途別のストレージ選定と、本番環境を意識した可用性設計を実践しました。S3ではバージョニング・クロスリージョンレプリケーション・Transfer Acceleration・Batch Operationsなど高度な設定を網羅。EBSではボリューム拡張・Multi-Attach、EFSではEC2間の共有ストレージ構成、FSx for LustreではHPC向け高性能共有ストレージも体験しています。

データベースではRDS MySQLの基本構築からAurora Multi-AZのフェイルオーバー動作まで検証。DynamoDBではPartition Key / Sort Keyの設計、GSIによる多次元検索、PartiQLによるSQLライクな操作、NoSQL Workbenchを使ったGUIモデリングを実践。S3 → Glueカタログ → AthenaでSQLクエリを実行するデータレイク分析基盤も構築しました。

**設計判断の実践例**
- S3 Versioning・CRRを活用したデータ保護とDR設計
- RDS vs Aurora の可用性・フェイルオーバー速度の違い
- DynamoDBのPK/SK設計がクエリ性能を決定するメカニズム
- GSI（後から追加可能）vs LSI（作成時のみ）の選定判断

---

### 5. サーバーレス & 非同期処理

イベント駆動型アーキテクチャのパターンを体系的に実践しました。API GatewayではREST APIの作成から、Mock統合・Lambda統合・ステージ変数による環境分離・パス/クエリパラメータ処理・CloudWatchログ監視まで一連の設計を実装。SQSではStandard / FIFOの使い分け、Visibility Timeoutとデッドレターキュー（DLQ）による障害設計も実装しました。

サーバーレス問い合わせフォーム（API Gateway + Lambda + SES）、EC2のApacheアクセスログをKinesis Streams → Firehose → S3に流すリアルタイムパイプライン、Step FunctionsによるTask / Choice / Parallel / Wait状態を組み合わせたワークフロー自動化、さらにIoT Core + MQTT + Lambdaを使ったリアルタイムIoTデータ可視化まで実践しています。

**設計判断の実践例**
- SQS Visibility Timeout vs Delay Queue の違いと使い分け
- DLQ（デッドレターキュー）による障害メッセージ隔離設計
- Kinesis Data Streams（処理）vs Firehose（配送）の役割分担
- Step Functions による複雑なワークフローの状態管理と条件分岐

---

### 6. IaC & 可観測性

インフラをコードで管理するIaCと、システムの状態を可視化する可観測性の両方を実践しました。TerraformではVPCやTransit GatewayをHCLで定義し、`init / plan / apply / destroy` の基本サイクルを習得。CloudFormationではLAMPスタックの一括デプロイ、VPC構成のStack更新による変更管理、WAF + CloudFrontのIaC定義を実践しました。

可観測性では、VPC Flow LogsをS3またはCloudWatchに出力し、Glue + AthenaでSQLによるログ分析を実装。AWS X-Rayで分散アプリケーションのリクエスト経路とレイテンシを可視化するトレーシング基盤も構築しています。

**設計判断の実践例**
- Terraform の `plan` による事前確認 → 安全な `apply` フロー
- CloudFormation Stack 更新による構成変更の管理
- Flow Logs → Athena のサーバーレスログ分析パイプライン
- X-Ray によるボトルネック・エラー箇所の特定手法

---

*AWS Certified Solutions Architect - Associate（SAA-C03）は、AWSアーキテクチャの設計・デプロイ・管理を問うAssociate認定です。クラウドインフラの広範な基礎知識を、すべてハンズオンで実践しています。*
