# Dream-GPT

**目標達成への最短距離をあなたに。**

`Dream-GPT`は、ユーザーが設定した目標に基づき、Google Gemini APIを活用して自動で学習計画やタスクを立案するWebアプリケーションです。 生成された計画はTodoリストとして管理され、進捗率の可視化やカレンダーでのスケジュール確認が可能です。

## 🚀 主な機能

プロジェクトの要件定義に基づき、以下の機能を提供します：

* **目標設定と自動計画立案**:
    * ユーザーは達成したい目標、期間（年単位または月単位）、補足情報（使用教材など）を入力します。
    * Google Gemini APIが入力に基づき、現実的なTodoプランを自動生成します。
* **Todoリストと進捗管理**:
    * 生成されたプランはTodoリストとして表示されます。
    * タスクの完了状態（isDone）をチェックボックスで管理できます。
    * 目標全体の達成率がプログレスバーで表示されます。
    * タスクの編集・削除が可能です。
* **カレンダー連携**:
    * Todoタスクの期間をカレンダー形式で表示し、スケジュール感を把握できます。
* **ユーザー認証**:
    * Supabaseを利用したメールアドレスとパスワードによるサインアップ、ログイン、パスワードリセット機能。
* **ユーザー設定**:
    * 全ユーザーデータの削除（リセット）。
    * アカウント自体の削除。

## 🛠️ 技術スタック

本プロジェクトは以下の技術によって構築されています。

* **フレームワーク**: Next.js (v15.4.1)
* **ランタイム**: Bun
* **言語**: TypeScript
* **データベース**: PostgreSQL
* **ORM**: Prisma
* **認証 & BaaS**: Supabase
* **AI**: Google Gemini API (`@google/genai`)
* **UIライブラリ**:
    * React (v19.1.0)
    * Tailwind CSS
    * shadcn/ui
    * Lucide React (アイコン)
* **状態管理**: Jotai
* **コンテナ化**: Docker / Docker Compose

## 💿 データベース設計

データベースは`Prisma`によって管理されており、以下の3つの主要モデルで構成されています：

1.  **Users**: ユーザー情報
    * `userId` (UUID): ユーザーID (Supabase Authと連携)
    * `name` (String): ユーザー名
    * `ticket` (Int): AI利用チケット数
2.  **Goals**: ユーザーが設定する目標
    * `goalId` (UUID): 目標ID
    * `title` (String): 目標タイトル
    * `deadlineNum` (Int): 期間（例: 3）
    * `MorY` (String): 期間の単位（"年" または "ヵ月"）
    * `userId` (UUID): ユーザーへのリレーション
3.  **Plans**: AIによって生成された個別のタスク（Todo）
    * `uniqueId` (UUID): タスクのユニークID
    * `title` (String): タスク内容
    * `deadline` (String): タスク期日
    * `periodNum` (Int): 期間内の番号（例: 1ヵ月目）
    * `isDone` (Boolean): 完了フラグ
    * `goalId` (UUID): 目標へのリレーション
    * `userId` (UUID): ユーザーへのリレーション

## 🚀 セットアップと実行方法

### 1. 依存関係のインストール

プロジェクトのルートでBunを使用して依存関係をインストールします。

```bash
bun install

```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

#### Dockerでの実行 (推奨)

`docker-compose.yml` が提供されています。環境変数（.env ファイルなど）を設定した後、以下のコマンドでコンテナを起動できます。

docker-compose up -d --build

```bash
🌿 Git 運用ブランチ戦略
```

本プロジェクトでは、`main` ブランチを保護し、機能追加やバグ修正は専用のブランチで行うフローを採用しています。

## 開発フロー

### 1. ブランチの作成
`main` ブランチから作業用ブランチを切ります。

```bash
git checkout -b feature/〇〇〇
```


**新機能: feature/**

**バグ修正: bugfix/**

**緊急修正: hotfix/**

### 2. 作業とコミット

変更内容をコミットします。

```bash
git add .
git commit -m "変更内容の概要"
```
### 3. Push

リモートリポジトリにブランチをPushします。
```bash
git push origin feature/〇〇〇
```
### 4. プルリクエスト (PR) の作成

GitHub上で main ブランチに対するプルリクエストを作成します。

### 5. マージ

レビュー後、PRをマージします（**Squash and merge を推奨**）。

### 6. ローカルの同期

ローカルの main ブランチを最新の状態に更新します。
```bash
git checkout main
git pull origin main
```