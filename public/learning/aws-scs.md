---
provider: AWS
exam: Security Specialty
examCode: SCS-C02
description: 脅威検知・暗号化・アクセス制御・ネットワーク防御・ログ監査をAWSセキュリティサービス横断でハンズオンにより実践
status: completed
---

# AWS SCS-C02 ハンズオン学習記録

## 概要

AWSセキュリティの専門家認定である **Security Specialty（SCS-C02）** の取得に向け、脅威検知・データ保護・ネットワーク防御・アクセス制御・ログ監査の全領域を体系的にハンズオンで実践しました。「何を守るために、どのサービスをどう組み合わせるか」というセキュリティ設計判断まで含めた実装力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| 脅威検知と調査 | GuardDuty・Inspector・Macie・Trusted Advisorによる継続監視設計 |
| ログ監査と分析 | CloudTrail・VPC Flow Logs・Athena・CloudWatchによる監査基盤構築 |
| データ保護と暗号化 | KMS・SSE-KMS・S3 Object Lock・Secrets Managerによる多層保護 |
| インフラ・ネットワーク防御 | WAF・Security Group・NACL・PrivateLink・VPN・CloudFrontによる多層防御 |
| アクセス制御 | IAM User/Group/Role/Policyによる最小権限設計 |
| コンプライアンス自動化 | AWS Config・Trusted Advisor・Network Access Analyzerによる継続評価 |

---

## 領域別 詳細

### 1. 脅威検知と調査

GuardDuty・Inspector・Macieを組み合わせた継続的な脅威検知基盤を実践しました。GuardDutyではCloudTrail・VPC Flow Logs・DNSログを機械学習で分析してFindingsを生成する仕組みを理解し、SOC運用を意識したイベント分析フローを習得。Amazon Inspector v2ではLambda LayerのCVEスキャンを実施し、OSSライブラリ単位で脆弱性を特定するDevSecOpsフローを体験しました。

Amazon MacieではManaged Data IdentifierとカスタムRegexを組み合わせてS3内の個人情報・カード情報を検出するClassification Jobを構成。「組織固有の識別パターン」を柔軟に追加できる設計を実装しました。Trusted Advisorでは意図的に危険設定を作成して警告検出を確認し、継続監視の重要性を実地で理解しています。

**設計判断の実践例**
- GuardDuty（機械学習による異常検知）vs AWS Config（ルールベースの構成評価）の使い分け
- Inspector v2でLambda LayerをスキャンしてCVSS Scoreを基準に優先度を判断
- Macieのカスタム識別子でOrganization固有IDをRegexで検出する構成
- Trusted AdvisorとConfigを組み合わせた「検出→是正」の継続コンプライアンスサイクル

---

### 2. ログ監査と分析

CloudTrail・VPC Flow Logs・CloudWatchを連携させた、AWS操作全体を追跡できる監査基盤を構築しました。CloudTrailではManagement EventsとData Eventsの両方を有効化し、S3へのPutObject/GetObjectまで監査対象にした上で、KMSイベントとの突き合わせ分析を実践。JSONログの`eventName`・`userIdentity`・`sourceIPAddress`フィールドを読み解く手法を体得しています。

VPC Flow LogsはCloudWatch LogsとS3の両方への出力を実装し、Glue DataカタログとAthenaを組み合わせてREJECT通信をSQLで分析するパイプラインを構築。CloudWatchではMetric FilterでCloudTrailログをメトリクス化し、StopInstancesなどの特定API操作をAlarmで検知してSNSで即時通知する監視チェーンを実装しました。

**設計判断の実践例**
- CloudTrail Management Events vs Data Events の使い分け（API監査 vs オブジェクトアクセス監査）
- VPC Flow Logs → Glue → Athena によるサーバーレスなネットワーク調査基盤
- Metric FilterでCloudTrailログをリアルタイム監視に転用する設計
- CloudWatch Alarm + SNSで「EC2停止」「Lambda実行エラー」を即時通知するフロー

---

### 3. データ保護と暗号化

KMSを中心に、S3・EBS・AMI・Secrets Managerを統合したデータ保護基盤を実践しました。Customer Managed Keyでは「鍵管理者（作成・ローテーション）」と「鍵利用者（Encrypt/Decrypt）」をIAMで職務分離し、Key PolicyとIAM Policyの両方が揃わないとアクセスできない二重制御を実装。CloudTrailでKMSのGenerateDataKey呼び出しを追跡することで、暗号化操作の監査証跡も確保しています。

S3ではObject LockのGovernanceモードとComplianceモードの違いを実地で検証し、Bucket Policy（Explicit Deny）とObject Lockを組み合わせた多層のWORMストレージ設計を実装。Secrets ManagerではLambdaからハードコードなしで認証情報を取得するセキュアなサーバーレス設計を実践し、「Access Keyの直書きを排除する」設計判断を体得しました。

**設計判断の実践例**
- KMS Key PolicyとIAM Policyの両方を要求する二重制御設計
- S3 Object Lock Governance（管理者が回避可）vs Compliance（誰も削除不可）の選定基準
- SSE-KMS暗号化 + CloudTrail Data Eventsによる「暗号化と監査を組み合わせた保護」
- Secrets ManagerでAccess Keyを排除してLambdaのハードコードリスクをゼロにする設計

---

### 4. インフラ・ネットワーク防御

WAF・CloudFront・ALB・PrivateLink・VPN・Security Group・NACLを組み合わせたネットワーク多層防御を体系的に構築しました。WAFではIPブロック・SQLインジェクション対策・Geo Location制限・Query String制御をALBおよびCloudFrontと連携して実装し、CloudFront経由のみ許可するOrigin保護も構成。ALBのAdvanced RoutingではHTTPヘッダー・クエリ文字列・URLパスを条件に転送先を切り替え、マイクロサービス構成への応用を理解しました。

PrivateLinkではProvider/ConsumerモデルのEndpoint Serviceを構築し、インターネットを経由せずVPC間でサービスを安全に提供する設計を習得。Site-to-Site VPNではIKE/IPSecトンネルをLibreswanで確立し、仮想プライベートゲートウェイへのRoute Propagationでハイブリッドクラウドの経路制御を実践。Transit GatewayによるHub and Spoke構成も実装し、複数VPC間通信のスケーラブルな設計を体得しています。

**設計判断の実践例**
- WAF Managed Rule（SQLi・XSS等）とカスタムIP Setを組み合わせたDefense in Depth
- CloudFront Origin ProtectionでALBへの直接アクセスを封鎖する設計
- Security Group（Stateful）とNACL（Stateless）の責務分離と多層防御設計
- PrivateLink vs VPC Peering vs Transit Gatewayの接続パターン使い分け

---

### 5. アクセス制御

IAMのUser・Group・Role・PolicyとSTSを組み合わせた最小権限設計を体系的に実践しました。IAM PolicyはVisual EditorとJSON両方で作成し、「Resource "*" を避けてリソース単位で権限を絞る」設計の重要性を実地で理解。Explicit DenyはAllowより優先されるというAWSのデフォルト拒否モデルを、S3バケット保護のResource-Based Policyで検証しました。

IAM RoleではTrusted EntityでサービスプリンシパルをEC2・DAXに限定し、STSがAssumeRoleで発行する一時的なCredentialsによる安全な権限委譲を実装。EventBridge + Terraform でEC2状態変更通知基盤を構築し、IAM PolicyをIaCで管理する権限設計の自動化フローも体験しています。

**設計判断の実践例**
- IAM GroupによるPolicy一元管理（User単位の直接付与は避ける）
- Access Key発行を最小化しIAM Role（Temporary Credentials）を優先する設計
- Trusted EntityでAssumeRole可能なサービスを限定してRoleの横断利用を防ぐ
- Customer Managed PolicyでAWS管理ポリシーより細かい権限粒度を実現

---

### 6. コンプライアンス自動化

AWS ConfigとNetwork Access Analyzerを使って、インフラの設定が意図通りかを継続的に自動評価する仕組みを実践しました。Config Ruleの`restricted-ssh`でSSH全公開のSecurity GroupをNON_COMPLIANTと判定し、「構成変化を検知→是正」のガバナンスサイクルを実装。Trusted Advisorでは意図的なPublic S3作成・SSH全公開SGを検知させ、自動監視の精度を実地確認しました。

VPC Network Access Analyzerでは実通信ではなく論理的な経路解析を実行し、Private SubnetがInternet Gatewayへ到達できないことをFindingsで検証。設計意図とネットワーク構成の整合性を定期評価する監査手法を習得しました。

**設計判断の実践例**
- AWS Config（構成の継続評価）vs Trusted Advisor（ベストプラクティス推奨）の役割の違い
- Network Access AnalyzerとVPC Reachability Analyzerの使い分け（経路解析 vs 通信検証）
- Config RuleのNON_COMPLIANTイベントをCloudWatch AlarmとSNSに連携した自動通知設計
- 「検出」「評価」「通知」「是正」を自動化するセキュリティガバナンスパイプライン

---

*AWS Certified Security - Specialty（SCS-C02）は、AWSのセキュリティ設計・実装・運用を問う専門家認定です。IAMからネットワーク防御・脅威検知・コンプライアンスまで、AWSセキュリティの全領域をハンズオンで実践しています。*
