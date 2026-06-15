---
provider: CNCF
exam: Certified Kubernetes Administrator
examCode: CKA
description: ワークロード管理・スケジューリング・ネットワーク・RBAC・クラスタ運用をKubernetesハンズオンで体系的に実践
status: completed
---

# CKA ハンズオン学習記録

## 概要

Kubernetesの管理者認定である **Certified Kubernetes Administrator（CKA）** の取得に向け、ワークロード管理・サービスネットワーキング・スケジューリング制御・セキュリティ・クラスタ運用の全領域を体系的にハンズオンで実践しました。「どのリソースをどの粒度で管理するか」という設計判断まで含めた実装力と運用力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| ワークロード管理 | Pod・ReplicaSet・DaemonSet・CronJob・Static Podによる宣言的管理 |
| サービスとネットワーク | ClusterIP/NodePort/LoadBalancer・MetalLB・Network Policyによる通信制御 |
| スケジューリング | nodeName・Taint/Toleration・NodeAffinityによるPod配置制御 |
| 設定と永続化 | ConfigMap・Secret・PV/PVCによるデータ分離と永続化設計 |
| セキュリティ | RBAC・ServiceAccount・Security Contextによる最小権限設計 |
| クラスタ運用 | ETCDバックアップ・Cluster Upgrade・Prometheus/Grafanaによる監視 |

---

## 領域別 詳細

### 1. ワークロード管理

Kubernetesの基本デプロイ単位から高度なワークロード制御まで実践しました。Podの作成・操作・削除に始まり、マルチコンテナPodのサイドカーパターンを実装。ReplicationController / ReplicaSetの比較では、set-basedセレクターの柔軟性と、既存Podとのラベルマッチによる自動調整の仕組みを検証しました。

DaemonSetではPrometheusエージェントを全ノードに常駐させ、ノード増減への自動対応を確認。StaticPodでは`/etc/kubernetes/manifests`の管理方式を理解し、コントロールプレーンコンポーネントがAPIサーバーを介さずkubeletに直接管理されている構造を把握。CronJobでは定期バッチ処理の自動化フローを実装しました。

**設計判断の実践例**
- ReplicaSet vs ReplicationController — set-basedセレクターの柔軟性でRS優先
- DaemonSetによるノード全体への常駐配置 vs Deploymentによる指定数配置の使い分け
- Static Podの「YAMLファイル削除が唯一の完全削除」という管理モデルの理解
- CronJobのrestartPolicy設定で失敗時のみ再実行するジョブ設計

---

### 2. サービスとネットワーク

クラスタ内外の通信設計をService種別・Network Policyの組み合わせで実践しました。ClusterIPではPod間通信のサービスディスカバリ、NodePortでは固定ポート（30000-32767）による外部公開を実装。LoadBalancerではクラウド環境の自動パブリックIP割り当てを確認し、ベアメタル環境向けにはMetalLBでLayer2モードのIPプール管理を構成しました。

Network Policyでは「全遮断（podSelector: {}）から特定IngresのみAllow」という段階的な許可設計を実装。webとdbのPod間で意図したトラフィックのみ許可し、test-podからのアクセスが遮断されることを実地検証しました。

**設計判断の実践例**
- ClusterIP（内部専用）vs NodePort（固定ポート外部公開）vs LoadBalancer（自動IP割当）の選定基準
- MetalLBでベアメタル環境でもクラウド同等のLoadBalancerを実現する設計
- Network PolicyのデフォルトDenyとIngress Allow組み合わせによる最小通信設計
- ラベルセレクターでServiceとPodを疎結合に管理する設計

---

### 3. スケジューリング制御

Podの配置をKubernetesスケジューラを使わずに制御する複数手法を実践しました。`nodeName`指定による強制配置、Taintの`NoSchedule`（新規拒否）と`NoExecute`（既存Pod退去も実施）の挙動の違い、Tolerationによる例外許可まで実地検証しました。

NodeSelectorではノードラベルを鍵にシンプルな配置制御を実装。NodeAffinityでは`requiredDuringScheduling`と`preferredDuringScheduling`を比較し、「必ず配置」と「可能であれば配置」のトレードオフを理解しました。

**設計判断の実践例**
- nodeName（スケジューラ完全無視）vs NodeAffinity（条件付き配置）の使い分け
- Taint `NoSchedule` vs `NoExecute` の違いと既存Podへの影響範囲の判断
- GPU・高メモリ専用ノードへの特定ワークロード集約設計
- NodeAffinityのrequired/preferredでスケジューリング失敗リスクをコントロール

---

### 4. 設定と永続化

設定情報・機密情報・永続データの管理パターンを実践しました。ConfigMapでは環境変数注入とVolumeマウントの両方を実装し、「Volumeマウントならば再デプロイ不要で設定を動的反映できる」という差異を検証。SecretではBase64エンコードをreadOnlyマウントで保護し、機密情報の誤編集を防ぐ構成を実装しました。

PersistentVolume/PersistentVolumeClaimでは、Podを削除・再作成してもデータが消えないことをhostPathで実証。PVCというPod側の抽象化レイヤーによって、クラウドストレージへの動的プロビジョニングに対応できる設計を理解しました。

**設計判断の実践例**
- ConfigMapのenvFrom（一括注入）vs env（キー単位注入）の使い分け
- ConfigMap Volume マウントで設定変更をPod再起動なしに反映させる設計
- SecretのreadOnlyマウントで機密データの誤変更を防ぐセキュリティ設計
- PV/PVCのReadWriteMany vs ReadWriteOnceの選定基準

---

### 5. セキュリティとアクセス制御

RBAC・ServiceAccount・Security Contextを組み合わせたKubernetesセキュリティ設計を実践しました。ClusterRoleとClusterRoleBindingでServiceAccountに必要最小限の権限（pods/deploymentsのget/list）を付与し、`kubectl auth can-i`で権限効果を確認。SAなしPodがAPI呼び出しで権限エラーになることとの対比で最小権限の原則を体感しました。

Namespace単位のRBACでは`Role`と`RoleBinding`を使い、`kubectl auth can-i`のYES/NO切り替えを実践。Security Contextでは`NET_RAW`Capabilityの付与によりPing通信が可能になることを確認し、「必要なCapabilityのみを付与する」という設計判断を習得しました。

**設計判断の実践例**
- ClusterRole（クラスタ全体）vs Role（Namespace単位）の権限スコープ設計
- ServiceAccountでPodに最小権限を委譲しAccess Key管理を排除
- Taint & TolerationとRBACを組み合わせてノード・Pod両面でセキュリティ境界を設定
- Security Contextで不要なCapabilityを持たせない最小権限Podを設計

---

### 6. クラスタ運用

クラスタの継続運用に必要なバックアップ・アップグレード・監視を体系的に実践しました。ETCDバックアップでは証明書・エンドポイント指定でスナップショットを取得し、kubelet停止→restore→再起動という復旧フローを完全実施。クラスタアップグレードでは`cordon`→`drain`→`upgrade apply`→`uncordon`の順序を手順化し、ローリング更新でサービス中断を最小化しました。

Prometheus + Grafanaの監視基盤では、monitoring Namespaceを分離してクラスタメトリクスをリアルタイム可視化。Grafanaダッシュボード（ID: 6417）でCPU・メモリ・Pod状態を一元確認する運用を構築しました。

**設計判断の実践例**
- ETCD バックアップのタイミングと証明書指定の組み合わせ（アップグレード前の安全策）
- Cordon/Drainで既存ワークロードへの影響を最小化したノードメンテナンス手順
- DaemonSetで全ノードにPrometheusエージェントを自動展開する監視設計
- Namespaceで監視リソースをアプリケーションと分離するクラスタ設計

---

*Certified Kubernetes Administrator（CKA）は、本番Kubernetesクラスタの構築・管理・トラブルシューティングを問う実技試験です。kubectlによる操作からETCDリストア・RBACまで、クラスタ管理者として必要な全領域をハンズオンで実践しています。*
