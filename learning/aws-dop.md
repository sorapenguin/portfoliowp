---
provider: AWS
exam: DevOps Engineer Professional
examCode: DOP-C02
description: CI/CD・IaC・監視・サーバーレス・コンテナ・高可用性をAWS DevOpsサービス横断でハンズオンにより実践
status: completed
---

# AWS DOP-C02 ハンズオン学習記録

## 概要

AWS DevOpsの最高位認定である **DevOps Engineer Professional（DOP-C02）** の取得に向け、CI/CD自動化・設定管理・監視・サーバーレス・コンテナ基盤・高可用性設計の全領域を体系的にハンズオンで実践しました。「手動オペレーションをゼロにし、コードとイベントが自動でインフラを動かす」という設計判断まで含めた実装力を養う学習を積み上げています。

| 領域 | 身についた設計力 |
|------|----------------|
| SDLC自動化（CI/CD） | CodeBuild/CodeDeploy/CodePipelineによるデプロイパイプライン設計 |
| 設定管理とIaC | CloudFormation Nested Stacks・Change Set・Systems Manager Run Command |
| 監視・ログ・監査 | CloudWatch・CloudTrail・X-Ray・Config・GuardDuty・Inspectorによる可観測性設計 |
| イベント駆動とサーバーレス | Lambda・Step Functions・EventBridge・SQS・API GatewayによるEDA設計 |
| コンテナ基盤 | ECS・EKS（HPA/PSA）・ECR・DockerによるCI/CD連携 |
| データ管理と高可用性 | Aurora Multi-AZ・DynamoDB Streams・ALB+ASG・CloudFrontによる耐障害設計 |

---

## 領域別 詳細

### 1. SDLC自動化（CI/CD）

CodeBuild・CodeDeploy・CodePipelineを組み合わせた、コミットから本番反映までを自動化するパイプラインを実践しました。CodeBuildでは`buildspec.yml`によるMavenビルドの定義からArtifact生成・CloudWatch Logsによるビルドログ監視まで一連のフローを構築。CodeDeployでは`appspec.yml`によるデプロイ手順の定義と、EC2へのWordPress自動デプロイを実施しました。

ECSのBlue/Greenデプロイではコード修正から本番切り替えまでを実践。ALBのTest Listener（8080番）で新バージョンを先行検証し、Lambda Hookで自動テストを組み込んだうえでTraffic Shiftを実行する本番品質の切り替えフローを構成しました。Elastic BeanstalkのBlue/Green構成では、CNAME Swapによる即時ロールバック設計も実装しています。また、Lambda Version管理では`$LATEST`・Version・Aliasの三層構造を使い、`DEV`/`PROD`環境を同一関数で分離管理する手法を習得しました。

**設計判断の実践例**
- CodeCommit → CodePipeline → CodeDeploy → EC2 の継続的デリバリーパイプライン
- `appspec.yml`のライフサイクルフックでデプロイ前後の処理を宣言的に定義
- ECS Blue/GreenのTest Listener + Lambda Hookによる自動検証後Traffic Shift設計
- Lambda Aliasでバージョンを抽象化してCI/CDのデプロイ先を固定するリリース管理

---

### 2. 設定管理とIaC

CloudFormationとSystems Managerを使い、「インフラ設定をコードと自動化で管理する」プロセスを実践しました。CloudFormationでは大規模テンプレートをALBスタック・ASGスタックに分割するNested Stack構成を実装。ParentスタックのOutputsとChildスタックのParametersを連携させてスタック間依存を宣言的に管理し、Terraform Moduleと対応するモジュール設計の考え方を体得しました。

Change Setでは「AWS側変更前に`Add/Modify/Remove`の差分を必ず確認してから`apply`する」安全変更フローを実践。Drift DetectionとStackSetsによるマルチアカウント展開の仕組みも確認しました。Systems Manager Run Commandでは、Port 22を一切開放せずにタグベースのResource Group全EC2へApacheを一括インストールする構成を実装し、「SSHレスな管理基盤」としてのSSMの実力を検証。Session Managerでは接続ログをCloudWatch Logsへ転送して監査証跡を確保しました。

**設計判断の実践例**
- CloudFormation Nested StackのOutputs/Parameters連携でスタック間依存を疎結合に管理
- Change SetをCI/CDパイプラインに組み込んで本番変更前の影響確認を自動化
- Systems Manager Run CommandでPort 22を閉じたままEC2へ一括オペレーションを実行
- StackSetsで複数アカウントへ同一セキュリティ基盤設定を自動展開する設計

---

### 3. 監視・ログ・監査

「何が起きたか」「どこがボトルネックか」「設定は正しいか」を常に把握できる可観測性基盤を多層で構築しました。CloudTrailでは操作ログをCloudWatch LogsへMetric Filter経由でメトリクス化し、StopInstancesなどの特定API操作をAlarmで検知してSNSへ即時通知する監視チェーンを実装。CloudWatch Agentではデフォルトでは取得できないメモリ・ディスク使用率をOSレベルで収集し、CWAgent Namespaceへ送信して運用監視の死角をなくしました。

X-Rayでは分散アプリケーションのService Mapを生成し、DynamoDB・SQSを含む依存関係を可視化してTrace単位で遅延箇所を特定する分散トレーシング基盤を構築。AWS Configでは`restricted-ssh`ルールによるSecurity Group継続監査を実施し、GuardDutyではSample Findingsの分析でSOC運用の基本フローを体得。Inspector v2でEC2・Lambda Layerの依存ライブラリをCVEベースでスキャンし、DevSecOpsの継続脆弱性管理を実践しました。

**設計判断の実践例**
- CloudTrail → Metric Filter → CloudWatch Alarm → SNSの「操作イベント即時通知」設計
- CloudWatch Agent導入でデフォルト監視の盲点（メモリ・ディスク）を補完する設計
- X-Ray Service MapでマイクロサービスのボトルネックをTrace IDで追跡できる設計
- AWS Config（設定継続監査）+ GuardDuty（異常検知）+ Inspector（脆弱性スキャン）の役割分担

---

### 4. イベント駆動とサーバーレス

「イベントが自動でサービスを連鎖させる」EDA（Event Driven Architecture）を多様なパターンで実践しました。SQSではStandard/FIFOの使い分けと、Visibility Timeout（受信後に隠して重複防止）とDelay Queue（送信後に隠して配信遅延）の挙動差を実地検証。`Available → In Flight → Deleted`のメッセージライフサイクルとDead Letter Queueによる障害メッセージ分離設計を習得しました。

Step FunctionsではTask/Choice/Parallel/Wait状態を組み合わせたワークフローを構築し、LambdaなしでDynamoDB・SNSを直接呼び出すService Integrationも実装。API GatewayではREST APIのPath Parameter・Query String・Stage Variablesによる環境切り替えを実践し、VPC内限定のPrivate REST APIによる閉域CRUD設計も実装しました。Kinesis Data Streamsでは1つのProducer（S3イベント起動Lambda）のデータを複数Consumer Lambdaが同時処理する「1送信→多処理」パイプラインを構築しています。

**設計判断の実践例**
- SQS Visibility Timeout vs Delay Queueの使い分け（「処理中に触るな」vs「まだ配信するな」）
- Step Functions Service IntegrationでLambdaを介さずDynamoDB/SNSを直接操作してコスト削減
- API Gateway Stage Variables で同一API定義をDEV/PRODで共有して環境別Lambdaを呼び分け
- Kinesis Data StreamsのShard単位スケーリングで複数Consumerの並列処理を制御

---

### 5. コンテナ基盤

ECS・EKS・ECR・Dockerを組み合わせたコンテナの構築からCI/CD連携まで一貫して実践しました。ECSではEC2 Launch TypeとFargateの違いを理解したうえで、Task Definition・Service・ECS AgentのDockerとの関係を実機で確認。DockerfileでFlaskアプリをコンテナ化し、ECRへイメージをPushしてECSから自動取得するCI/CDフローを構築しました。

EKSではPod Security Admission（PSA）による`enforce/warn/audit`モードをNamespace単位で設定し、違反Podの拒否とAdmission Controllerの仕組みを検証。HPAでは`Metrics Server`経由でCPU使用率を監視し、負荷テストコンテナを起動してPodが`MinReplicas`から`MaxReplicas`まで自動増減することを実証しました。

**設計判断の実践例**
- ECS on Fargate（インフラ管理ゼロ）vs EC2 Launch Type（カスタムスケジューリング要件時）の選定
- CodeDeployのECS Blue/Greenデプロイでタスク定義改訂とTraffic Shiftを組み合わせたゼロダウンタイム更新
- EKS PSAでNamespace単位のPodセキュリティ境界（Restricted/Baseline/Privileged）を設計
- HPAのCPU Requestsとmin/maxReplicasの設定でオートスケールの上下限を制御

---

### 6. データ管理と高可用性

データ保護・フェイルオーバー・スケーリングを組み合わせた本番品質の可用性設計を実践しました。Aurora MySQL Multi-AZでは Writer/Reader構成とCluster Endpointによる自動参照を確認し、強制フェイルオーバー後もデータ損失ゼロ・エンドポイント不変を実証。RDSスナップショットではリストア時に新規DBインスタンスが発行されるため「Endpoint変更への対応」という設計判断が必要なことを実地で理解しました。

DynamoDB Streamsでは`INSERT/MODIFY/REMOVE`イベントをリアルタイムにLambdaへ連携してS3へ自動出力するパターンを構築。CSV/JSONエクスポートのETL処理もサーバーレスで実装しました。ALB + ASG + Launch Templateの構成ではTarget TrackingポリシーによるCPUベース自動スケールを実装し、CloudFrontではOrigin Groupによる`EC2（Primary）→ S3（Secondary）`フェイルオーバーを構成してCDN単体で高可用性を確保しました。

**設計判断の実践例**
- Aurora Cluster EndpointはWriter自動参照のため、フェイルオーバー後もアプリ側のEndpoint変更が不要
- RDS SnapshotとPoint-in-Time Recovery（PITR）の使い分け（任意時点 vs 最後のCommit前）
- DynamoDB Streams → Lambda で変更イベントをリアルタイムS3出力するCDC（変更データキャプチャ）設計
- CloudFront Origin GroupのHTTPエラートリガーフェイルオーバーでCDNレイヤーでの冗長化を実現

---

*AWS Certified DevOps Engineer - Professional（DOP-C02）は、AWSにおけるCI/CD・運用自動化・可観測性・セキュリティ統合を問う最高位のDevOps認定です。コードのコミットからデプロイ・監視・障害対応までの全ライフサイクルをハンズオンで実践しています。*
