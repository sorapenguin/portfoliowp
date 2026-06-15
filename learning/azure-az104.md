---
provider: Azure
exam: Administrator Associate
examCode: AZ-104
description: ガバナンス・ストレージ・コンピュート・ネットワーク・監視の5領域を体系的にハンズオンで実践。Azure PolicyによるDeny制御からApplication GatewayのL7ルーティング・TLS終端、ARM/Bicep/Terraformによるインフラ自動化まで、Azureインフラ管理者の設計判断力を習得
status: completed
---

# Azure AZ-104 ハンズオン学習記録

## 概要

Azureインフラ管理者の認定資格である **Administrator Associate（AZ-104）** の取得に向け、ガバナンス・ストレージ・コンピューティング・ネットワーク・監視の全領域をハンズオンで実践しました。「どのサービスを選ぶか」だけでなく、「なぜその設計が適切か」という判断基準まで含めた管理者としての設計力を養うことを軸に学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| ガバナンス | Resource Locks・Policy Deny制御・タグ戦略・RBACとの役割分担 |
| ストレージ | Tier選定・Private Endpoint閉域設計・File Share vs Blob・AzCopy自動化 |
| コンピュート | IaC三種（ARM/Bicep/Terraform）・VMSS自動スケール・カスタムイメージ量産 |
| ネットワーク | NSG vs Firewall・L4 vs L7 LB選定・Peering設計・Bastion安全接続 |
| 監視・運用 | Metric vs Activity Log Alert・KQLによるログ分析・Application Insights |

---

## 領域別 詳細

### 1. ガバナンス・リソース管理

組織全体のAzureリソースを統制する仕組みを体系的に実践しました。Resource Locksでは Delete Lock（削除のみ禁止）と Read-only Lock（変更・削除すべて禁止）の違いを実際に検証し、RBACよりも強制力が強い保護層として本番リソースに適用する設計を理解しました。

Azure Policyでは「Allowed Locations」のDeny効果を構築・検証し、ポリシー定義（ルール）とアサインメント（適用）の関係、Remediation機能による非準拠リソースの自動修復まで一連のガバナンスサイクルを実装。タグ管理では命名ルールとフィルタリングを組み合わせたリソース分類・コスト分析の基盤設計を実践しました。

**設計判断の実践例**
- Resource Locks vs RBAC の使い分け（RBACは権限管理、Locksは誤操作防止の最終防衛）
- Policy の Deny vs Audit の選定（制御の強さとユーザー体験のトレードオフ）
- タグのScope設計（Resource単位 vs Resource Group単位 vs サブスクリプション単位）
- Policy AssignmentのScopeを絞る理由（全体適用 vs 環境別適用）

---

### 2. ストレージ設計

ストレージの種別選定からセキュリティ設計・データ移行・監視まで一連の管理フローを実践しました。Blob（非構造データ・Web向け）とFile Share（SMB/NFS共有フォルダ）の責務の違いを実際の操作で理解し、アクセス制御（Private/Blob/Container）がどのようにURL匿名アクセスに影響するかを検証しました。

Access Tier設計では Hot・Cool・Archive のコスト・速度トレードオフと、Archive からのRehydrate（5〜30分）が必要になる場面を整理。Private EndpointでStorage AccountにプライベートIPを付与しインターネットを完全遮断する閉域設計を実装し、nslookupによるDNS解決でPrivate Endpoint有効を検証する手法も習得しました。AzCopyを使ったローカルデータの移行・差分同期（copy vs sync）と、スケジュールタスクによる定期バックアップ自動化も実践しています。

**設計判断の実践例**
- Blob vs File Share の選定（非構造データ保存 vs SMBマウントが必要なファイルサーバー代替）
- Hot / Cool / Archive の選定基準（アクセス頻度と保存期間の組み合わせ）
- Private Endpoint vs Service Endpoint（完全閉域 vs VNet内からの制限）
- AzCopy copy vs sync の使い分け（全転送 vs 差分転送でコストとリスクをコントロール）

---

### 3. コンピューティング・デプロイ自動化

VMの作成から始まり、IaC・コンテナ・サーバーレスまで段階的に自動化設計を実践しました。ARM Template・Bicep・Terraformの三種を使い分け、それぞれの宣言型「最終状態定義」という共通思想を理解しながら、VM＋VNet＋NSG＋NIC＋PublicIPの複合リソースを一括デプロイする構成を実装しました。

VMの自動設定はCustom Script Extension（デプロイ後にスクリプトを実行）とCloud-init（初回起動時のみ実行する宣言的な初期化）の使い分けを実践。VMSSではCPU負荷をトリガーにしたオートスケールを検証し、Availability Setによる同一データセンター内の物理障害ドメイン分散も実装しています。カスタムVMイメージ（Sysprepで一般化→Capture）による環境の標準化・量産化フローも体験しました。

**設計判断の実践例**
- ARM vs Bicep vs Terraform の使い分け（AzureネイティブIaCか、マルチクラウド対応のポータビリティを優先するか）
- Custom Script Extension vs Cloud-init（デプロイ後の柔軟な変更 vs 初回起動時の宣言的初期化）
- VMSS Uniform vs Flexible Orchestration（管理の一貫性 vs インスタンス個別制御の必要性）
- Container Apps vs ACI の選定（スケール自動管理が必要か、単発コンテナ実行で十分か）

---

### 4. ネットワーク設計

Azureのネットワーク設計の核となる多層防御と通信経路制御を体系的に実践しました。NSGをSubnet単位・インスタンス単位で多層配置し、Priority順のルール評価とDenyAllの設計を理解。NVA（Network Virtual Appliance）をUDRと組み合わせてDMZ構成のトラフィックを強制経由させる設計も実装し、Azure側（NIC設定）とOS側（sysctl）両方のIPフォワーディングが必要な点を検証しました。

ロードバランサ設計ではLayer4（Standard LB・Internal LB）とLayer7（Application Gateway）の責務を分離し、URLパスベースルーティング・TLS終端・マルチサイトホスティング・HTTPSリダイレクトをApplication Gatewayで実装。VNet Peeringのトランジティブ通信が自動では成立しない点を Hub-and-Spoke 構成のSSHテストで実証し、Azure Bastionによる「PublicIPなしVM」への安全接続設計も実践しました。

**設計判断の実践例**
- NSG vs Azure Firewall の選定（サブネット制御で十分か、アプリケーション層のドメイン制御・DNAT変換が必要か）
- Standard LB（L4）vs Application Gateway（L7）の選定（TCP分散で十分か、URLルーティング・TLS終端・WAF統合が必要か）
- VNet Peering vs Hub-and-Spoke でのTransitive通信（スポーク間通信にNVAやFirewallをハブに置く必要性）
- Bastion vs Jump Box（ブラウザ経由のVNet中継 vs PublicIP付きVM経由の違い）

---

### 5. 監視・運用設計

Azureリソースの状態を可視化し、異常を検知・通知・分析する運用設計を実践しました。Azure Monitorでは Metric Alert（CPU使用率など数値監視）と Activity Log Alert（VM削除・再起動などの操作イベント監視）を使い分け、Action Groupによるメール通知との連携を実装。Application InsightsをApp Serviceに接続し、Failures（エラー分析）・Performance（速度分析）・Live Metricsでリアルタイム監視する構成も構築しました。

Storage操作のログ管理では、Diagnostic Settingsを設定してLog Analytics WorkspaceへGetBlob操作ログを送信し、KQLクエリ（`StorageBlobLogs | where OperationName=="GetBlob"`）でIPアドレス別・StatusCode別の操作追跡を実践。メトリクスのSplitting（API名別分解）とFilterを組み合わせて、PutBlob操作のボトルネックを「感覚」ではなく「数値」で特定する手法を習得しました。

**設計判断の実践例**
- Metric Alert vs Activity Log Alert の使い分け（継続的な数値監視 vs 特定操作イベントの検知）
- Diagnostic Settings なしではLog AnalyticsでStorageログが収集できない（明示的な有効化が必須）
- Application Insights vs Log Analytics の役割分担（アプリ層の可観測性 vs インフラ・リソース操作の監査）
- KQLのSplitting + Filter でボトルネックを特定する手順（全体把握→分解→絞り込み）

---

*Azure Administrator Associate（AZ-104）は、Azureリソースの管理・ガバナンス・ネットワーク・ストレージ・コンピュートにわたる広範な管理スキルを問うAssociate認定です。インフラ管理者として本番環境を設計・運用するための判断力を、すべてハンズオンで実践しています。*
