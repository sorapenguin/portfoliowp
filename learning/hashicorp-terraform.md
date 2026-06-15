---
provider: HashiCorp
exam: Terraform Associate
examCode: IAC
description: AWS全サービスをTerraformでコード化し、VPC・EC2・RDS・ALB・Lambda・EKSをIaCで管理する設計力を習得
status: completed
---

# HashiCorp Terraform Associate ハンズオン学習記録

## 概要

Infrastructure as Codeの専門認定である **HashiCorp Certified: Terraform Associate（IAC）** の取得に向け、ネットワーク・コンピュート・データベース・ロードバランシング・サーバーレス・監視の全領域にわたるAWSリソースをTerraformでコード化し、体系的にハンズオンで実践しました。「手動構築を排除し、宣言的・再現可能なインフラ設計をどう実現するか」という判断力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| IaC基本ワークフロー | init/plan/apply/destroy・変数・出力による宣言的管理サイクル |
| ネットワーク基盤 | VPC・Subnet・IGW・NAT GatewayのコードによるTier設計 |
| コンピュートとサーバーレス | EC2・Lambda・EKS・Elastic BeanstalkのIaC自動化 |
| データベースとストレージ | RDS・Aurora・DynamoDB・S3のコード管理 |
| ロードバランシングとCDN | ALB・NLB・CloudFrontの構成自動化 |
| 監視と通知の自動化 | CloudWatch・SNS・EventBridgeによる運用基盤のコード化 |

---

## 領域別 詳細

### 1. IaC基本ワークフローと状態管理

Terraformの`init → plan → apply → destroy`ライフサイクルをすべてのラボで一貫して実践しました。`variables.tf`で型付き変数を定義し`terraform.tfvars`で値を注入することで、環境ごとの設定差分をコードで管理する構成を徹底。`outputs.tf`ではARN・IPアドレス・DNSエンドポイントを自動出力し、作成後のリソース参照をCLIで完結させました。

CloudFormationスタックをTerraformから呼び出すハイブリッドIaC構成も実践し、「既存のCloudFormationテンプレートを捨てずにTerraformに組み込む」移行パターンも習得。EC2インスタンスタイプの差分変更では`terraform plan`で事前影響確認を行ってから`apply`する安全な変更フローを実践しました。

**設計判断の実践例**
- `terraform plan`の差分確認を必ず挟むことでインフラ変更の影響範囲を制御
- variables.tf + terraform.tfvarsの分離で開発/本番の設定を同一コードベースで管理
- outputs.tfでリソース情報を自動抽出し、次工程（接続確認・CLIアクセス）を効率化
- Terraform + CloudFormation連携で既存資産を活かしながらIaC化を推進

---

### 2. ネットワーク基盤のコード化

VPCの設計から複雑なPublic/Private Subnet構成まで、すべてTerraformの宣言的コードで構築しました。2 TierアーキテクチャではVPC・Subnet・Internet Gateway・Route Tableをコード化し、AZ単位のSubnet分散設計を実践。NAT GatewayラボではPublic SubnetのEC2からはIGW経由、Private SubnetのEC2からはNAT経由で外部通信できる分離構成をTerraformで一括管理しました。

VPC Flow Logsラボでは、IAM RoleとCloudWatch LogsグループもTerraformでコード化し、「ネットワーク監視基盤ごとコードに封じ込める」設計を実践。インフラの再現性が手順書ではなくコードによって保証される状態を体得しました。

**設計判断の実践例**
- Public/Private Subnetの責務分離をRoute TableとNAT GatewayのコードでTerraform管理
- VPC Flow LogsをTerraformで有効化し監視基盤ごとコードに封じ込める設計
- AZ単位のSubnet分散をコードで強制しシングルAZ構成の誤作成を防止
- `terraform destroy`によるVPC一括削除で環境の作り捨てを安全に実現

---

### 3. コンピュートとサーバーレスの自動化

EC2の基本構築からEKS・Lambdaを使ったオーケストレーションまで幅広く実践しました。EC2ラボではUser DataでApacheインストールとHTML配置をコード内に記述し、`terraform apply`一発でWebサーバーが公開される状態を実現。EC2 + S3 + IAM RoleをTerraformで一体管理し、「Access Keyを使わずIAM Roleで安全にS3にアクセスする」セキュアな構成をコード化しました。

EKSラボではクラスタ作成からkubectl接続確認まで一連のフローをTerraform + CloudShellで自動化。Lambdaラボでは「Lambda起動→EC2自動プロビジョニング」というイベント駆動型のEC2管理パターンをIaCで構成し、自動化の組み合わせによる運用効率化を実践しました。

**設計判断の実践例**
- EC2 User DataをTerraformコードに埋め込み、サーバーセットアップを完全自動化
- IAM RoleをTerraformでEC2に紐付けてAccess Key管理を排除するセキュリティ設計
- LambdaによるイベントドリブンEC2起動でオンデマンドプロビジョニングを実現
- EKSクラスタをTerraformでコード管理してクラスタ再作成・削除を安全に繰り返す

---

### 4. データベースとストレージ管理

RDS・Aurora・DynamoDB・S3のデータ基盤を宣言的コードで構築しました。MySQLラボではSecurity GroupとDB Subnet Groupを含む接続環境全体をTerraformで一体管理。Auroraラボでは`aws_rds_cluster`と`aws_rds_cluster_instance`を分離定義してMulti-AZクラスタを構成し、`outputs.tf`でエンドポイントを自動出力してMySQL Workbenchから接続確認するフローを実践しました。

DynamoDBラボではPartition Key・属性・読み書きキャパシティをコードで定義しデータ登録まで自動化。S3ラボでは静的サイト公開・Bucket Policy・Lifecycle Policyをすべてコードで管理し、「ストレージ設定が手順書ではなくコードとして残る」状態を実現しました。

**設計判断の実践例**
- RDS Security GroupとDB Subnet GroupをTerraformで一体管理して誤接続設定を防止
- Aurora Multi-AZの`aws_rds_cluster`と`aws_rds_cluster_instance`分離定義でスケールアウトを宣言的に制御
- DynamoDBのPartition Key設計とRead/Write Capacityをコードで型付き管理
- S3 Lifecycle PolicieをTerraformで定義してストレージ階層管理をコード化

---

### 5. ロードバランシングとCDN

ALB・NLB・CloudFrontによる高可用性配信基盤をTerraformで自動構築しました。ALBラボでは2台のEC2に分散するTarget Group・Listener・Health Checkを一括コード化し、`outputs.tf`でALB DNSを自動出力してブラウザ確認するまでのフローをTerraformで完結させました。NLBラボではApache（80番）とNginx（8080番）を異なるTarget Groupに振り分けるPortベースルーティングをコードで定義しました。

S3 + CloudFrontラボでは、バケット名にランダム文字列を付与する一意性確保の設計と、CloudFront経由のHTTPS配信をデフォルト証明書で即時構成。オリジンアクセス制御もTerraformで管理し、「S3への直接アクセスをブロックしてCDN経由のみ許可する」セキュアな配信設計を実装しました。

**設計判断の実践例**
- ALBのTarget Group・Listener・Health CheckをまとめてコードでTerraform管理
- NLBでPort単位のルーティングをTarget Group分離として宣言的に定義
- S3バケット名のrandom文字列付与で名前衝突を防ぐTerraformのベストプラクティス
- CloudFrontオリジン制御をTerraformで管理してS3直接公開を排除するセキュリティ設計

---

### 6. 監視と通知の自動化

CloudWatch・SNS・EventBridgeによる運用自動化基盤をTerraformでコード化しました。EBSスナップショット自動化ラボでは、EC2停止イベントを検知してLambdaを起動し、スナップショット作成とSNS通知を実行するパイプライン全体をTerraformで一括構成。「監視ルール・Lambda関数・通知先まで含めた運用基盤をコードとして再現可能にする」設計を実践しました。

VPC Flow Logs + CloudWatchラボではIAM Role・Log Groupを含む監視基盤全体をTerraformで管理。SNSラボでは購読承認フローを含むトピック管理をコード化し、Terraform destroyによる安全削除まで一連のライフサイクルをIaCで制御しました。

**設計判断の実践例**
- EventBridge + Lambda + SNSの通知パイプラインをTerraformで一体管理して設定漏れを防止
- IAM Role・CloudWatch Log GroupをVPC Flow Logsとセットでコード化し監視設定を再現可能に
- SNS購読設定をコードで管理して通知先の変更をgit管理のコード変更として追跡
- `terraform destroy`によるリソース一括削除で開発環境のコストを確実にゼロに戻す設計

---

*HashiCorp Certified: Terraform Associate（IAC）は、Terraformを使ったインフラのコード化・変更管理・ライフサイクル管理を問う認定です。VPCからEKS・Lambda・RDSまで、AWS全サービスの構築をTerraformで自動化する実装力をハンズオンで習得しています。*
