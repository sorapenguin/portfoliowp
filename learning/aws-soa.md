---
provider: AWS
exam: SysOps Administrator Associate
examCode: SOA-C02
description: 監視・可観測性・高可用性設計・デプロイ自動化・セキュリティコンプライアンス・ネットワーク管理をハンズオンで実践。AWSシステム管理者として本番環境を守る運用設計力を習得
status: completed
---

# AWS SOA-C02 ハンズオン学習記録

## 概要

AWS認定のシステム管理者向け資格である **SysOps Administrator Associate（SOA-C02）** の取得に向け、監視・可観測性・高可用性設計・デプロイ自動化・セキュリティコンプライアンス・ネットワーク管理の全領域を体系的にハンズオンで実践しました。「障害をどう検知し、どう防ぎ、どう自動復旧させるか」という運用判断まで含めた本番環境管理力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| 監視・可観測性 | CloudWatch多層監視・CloudTrail監査連携・GuardDuty脅威検知・VPC Flow Logs分析 |
| 高可用性・信頼性 | Auto Scaling自己修復・Aurora Multi-AZフェイルオーバー・ECSスケーリング・ALB負荷分散 |
| デプロイ・自動化 | CloudFormation Change Set管理・Terraform IaC・Elastic Beanstalkデプロイ戦略・EventBridge連携 |
| セキュリティ・コンプライアンス | IAM職務分離・KMS二重制御・AWS Config継続監査・Inspector脆弱性管理・WAF防御 |
| ネットワーク管理 | VPC多層設計・NAT Gateway・Route53・CloudFront CDN・Reachability Analyzer検証 |
| 運用・トラブルシュート | SSM Session Manager・Parameter Storeシークレット管理・EC2障害復旧・CLI自動化基盤 |

---

## 領域別 詳細

### 1. 監視・可観測性

「ログ→メトリクス→アラーム→通知」の一連フローを設計・実装しました。CloudWatch Agentを導入してメモリ・ディスクなど標準では収集できないOS内部メトリクスを取得し、Metric FilterでCloudTrailのAPI操作ログから特定イベント（EC2停止など）を検知してSNS通知を発火させる監視基盤を構築。Dashboard上でアラーム状態遷移をリアルタイムで可視化する構成も実装しています。

CloudTrail + CloudWatch Logsの統合によりAPI操作の継続的な監査証跡を確保。GuardDutyはCloudTrail・VPC Flow Logs・DNSログを統合分析して不審な通信パターンや操作を自動検知することを確認しました。VPC Flow LogsをCloudWatch Logsへ出力してネットワーク通信を可視化し、Glue + AthenaによるサーバーレスSQLログ分析パイプラインも構築しています。

**設計判断の実践例**
- CloudWatch Metrics（数値）vs CloudWatch Logs（詳細）の役割分担と連携設計
- CloudTrail（操作ログ）vs AWS Config（設定状態記録）vs GuardDuty（脅威分析）の目的別使い分け
- CloudWatch Agent導入による標準メトリクス外収集が必要な場面の判断基準
- アラーム → SNS → Lambda 自動修復への連携フロー設計

---

### 2. 高可用性・信頼性設計

インフラの自動復旧と可用性確保を多層で実践しました。EC2 Auto Scaling GroupでDesired数を維持する自己修復設計を実装し、インスタンスが予期せず停止しても自動で再作成される挙動を検証。ALB + Target Groupのヘルスチェックにより障害インスタンスを自動除外し、Multi-AZ配置で単一障害点を排除した高可用Web構成を構築しています。

Aurora Multi-AZのフェイルオーバー動作を実際に引き起こしてWriter/Reader切り替えとデータ保持を検証。ECSではTarget Tracking Auto Scalingで負荷に応じてコンテナ数が自動増減する構成を負荷テストで確認しました。RDSのスナップショット取得・復元・暗号化移行（Snapshot Copyを経由する手順）を実践し、運用中のDBを無停止で保護する手法も習得しています。

**設計判断の実践例**
- Auto Scaling Desired数維持による自己修復 vs スケーリングポリシーによる動的調整の使い分け
- Aurora（高速フェイルオーバー）vs RDS Multi-AZ のコストと可用性のトレードオフ
- ECS Target Tracking vs Step Scaling の選定基準（予測可能性・追従速度）
- RDSの後付け暗号化不可という制約を踏まえた Snapshot Copy経由の安全な移行手順

---

### 3. デプロイ・自動化

インフラをコードで定義し、安全かつ再現性高くデプロイするIaC実践を積み上げました。CloudFormationではChange Setによる差分レビュー後に`Update`を適用する変更管理フローを習得。Replacement=Trueが発生するリソース変更の影響を事前に把握してからデプロイ判断する手順を実践しています。

TerraformではEventBridge + SNS + EC2 + Lambdaを組み合わせたイベント駆動自動化基盤をコードで構築し、`plan→apply→destroy`サイクルを徹底しました。Elastic Beanstalkではデプロイポリシー（Rolling / Rolling with additional batch / Immutable）の可用性とコストの違いを実体験で比較し、Blue/Green + CNAME Swapによるゼロダウンタイム切替とロールバック設計も実践しています。

**設計判断の実践例**
- CloudFormation Change Set で Replacement=True を確認してからデプロイ承認する運用フロー
- Rolling（コスト効率優先）vs Immutable（最高安全性・コスト増）のデプロイポリシー選定
- Blue/Green CNAME Swapによるゼロダウンタイム切替とDNS TTLキャッシュへの考慮
- EventBridge → Lambda によるスケジュール駆動とイベント駆動の自動化パターン選択

---

### 4. セキュリティ・コンプライアンス

「誰が・何に・何ができるか」のIAM設計から、暗号化・脆弱性管理・継続監査まで一貫したセキュリティ構成を実践しました。IAMではユーザー/グループ/ロールを用いた職務分離を実装し、Trust Policy + Permission Policyによるサービス間権限委譲（EC2 → S3/DynamoDBなど）の仕組みも設計しています。

KMSでは対称鍵の作成からIAMポリシー + Key Policyの二重制御による最小権限設計、S3 SSE-KMSとの組み合わせによる暗号化最終防衛ラインまで実践。AWS ConfigではManaged Ruleを使ったSGコンプライアンス監査を自動化し、違反検知→SNS通知→修正→準拠復帰のサイクルを構築しました。Inspector2でLambda LayerのCVEベース脆弱性スキャン、WAF + ALBでSQLインジェクション対策・Geo制限・クエリブロックも実装しています。

**設計判断の実践例**
- KMSの二重制御（IAMポリシー + Key Policy両方許可）が必要なアクセス制御の設計根拠
- AWS Config（設定状態の継続記録・評価）vs CloudTrail（操作ログ）の監査目的別使い分け
- Inspector2（CVEベース脆弱性検出）vs GuardDuty（行動ベース脅威検知）の役割分担
- SSM Parameter Store SecureStringによる設定・シークレットのコード埋め込み回避設計

---

### 5. ネットワーク管理

VPCのゼロから設計・構築と、通信経路の論理的な検証を実践しました。Public/Private Subnetの分割、IGW・NAT GatewayのRoute Table設定による通信制御を手動で実装し、「Public/PrivateはSubnet名ではなくRoute Tableで決まる」という本質をトラブルシュートを通じて習得しました。NACL（ステートレス/Subnet単位）とSecurity Group（ステートフル/インスタンス単位）を組み合わせた多層防御も構築しています。

VPC Reachability Analyzerで疎通不可の原因（SG設定ミスなど）を根拠ある形で特定・修正する手法を実践。Network Access Analyzerで意図しないInternet到達性を検出する継続的な検証も体験しました。Route53のAliasレコードでALBやS3静的サイトへドメインを紐付け、CloudFront + WAFによるエッジセキュリティ・Geo制限・カスタムエラー設定も実装しています。

**設計判断の実践例**
- NAT Gateway（Privateからのアウトバウンドのみ）vs IGW（双方向通信）の役割分担
- NACL（ステートレス・戻り通信ルール必要）vs SG（ステートフル・戻り通信自動許可）の多層防御設計
- Reachability Analyzerによる論理検証と実通信テストの使い分け（設定正しさ vs 実動作確認）
- Route53 Alias（AWSリソースへ直接紐付け・IPなし）vs CNAME の選定基準

---

### 6. 運用・トラブルシュート

本番環境を守る日常運用スキルを体系的に習得しました。SSM Session ManagerではSSHポート不要・インバウンドセキュリティグループ不要でEC2に接続し、セッションログをCloudWatch Logsに自動記録するゼロトラスト型の管理アクセス基盤を実装。Systems Manager Run Commandで複数EC2へのApache構築を一括実行するタグベース管理も実践しています。

キーペア紛失時のEBSデタッチ・authorized_keys復元による緊急復旧手順、VPC/ALB/EC2の通信障害をClient→ALB→EC2の順で切り分けてRoot Causeを特定するトラブルシュート手法も体験しました。AWS CLIでS3操作・Presigned URL発行・`--query`フィルタリングを実践し、GUI依存を排したIaC・自動化運用への繋ぎ方を理解しています。

**設計判断の実践例**
- SSM Session Manager（SSHポート不要・監査ログ自動記録）vs Bastion Host（SSH集約）の採用基準
- タイムアウト（ネットワーク遮断が原因）vs 認証エラー（資格情報が原因）の障害切り分け手順
- AWS Config + Trusted Advisor の組み合わせによる継続的コンプライアンス監視体制の設計
- Trusted Advisor（ベストプラクティス検出）vs AWS Config（設定変更履歴・評価）の役割分担

---

*AWS Certified SysOps Administrator - Associate（SOA-C02）は、AWSにおけるシステムの運用・管理・デプロイを問うAssociate認定です。アーキテクチャ設計にとどまらず「運用し続けて本番を守る」実践力を、すべてハンズオンで積み上げています。*
