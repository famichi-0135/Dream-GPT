

---

## ✅ 前提

* GitHub 上にリポジトリがある（例：`main` ブランチが存在）
* あなたのローカルに `git clone` 済み

---

## 🔁 一連のブランチ開発 & プルリク手順（個人開発でも推奨）

### 🔹 ① 作業用ブランチを切る

```bash
git checkout -b feature/〇〇〇
```

> 例：`feature/add-login-ui` など
> 命名ルール：`feature/`・`bugfix/`・`hotfix/` などをプレフィックスにつけるのが定番

---

### 🔹 ② 作業して、変更をコミット

```bash
# 変更を確認
git status

# ファイルをステージング
git add .

# コミット
git commit -m "ログインUIの追加"
```

---

### 🔹 ③ GitHub にブランチを push

```bash
git push origin feature/add-login-ui
```

---

### 🔹 ④ GitHub 上でプルリクエスト（Pull Request）を作成

1. GitHub にアクセス
2. 「Compare & pull request」ボタンを押す
3. PR のタイトル・説明を入力（簡潔に）
4. `base: main` ← `compare: feature/〇〇〇` であることを確認
5. 作成（Create Pull Request）

---

### 🔹 ⑤ PR 内容を確認してマージ

* **自分で内容を見直してOKならマージボタンを押す**
* `Squash and merge` を使うと履歴が綺麗（特に個人開発で有効）

---

### 🔹 ⑥ ローカルにマージ内容を取り込む

```bash
# main ブランチに切り替え
git checkout main

# 最新の状態を取得
git pull origin main

# 不要になった作業ブランチを削除
git branch -d feature/add-login-ui
```

> リモートブランチも不要なら削除可能：

```bash
git push origin --delete feature/add-login-ui
```

---

## 🧠 補足：このフローを使うメリット

| 項目           | 内容                                     |
| ------------ | -------------------------------------- |
| 🚫 ミス防止      | `main` 直コミットを避けられる（やらかし防止）             |
| ✅ 開発の単位化     | 変更の粒度をブランチで管理できる                       |
| 🔍 PRレビュー練習  | 将来のチーム開発を見据えた実践訓練になる                   |
| 🧼 コミット履歴が綺麗 | `Squash and merge` で1つにまとめれば履歴が読みやすくなる |

---

## 📦 最後に：ブランチ運用の命名ルール例（個人でも導入推奨）

| プレフィックス     | 用途         | 例                             |
| ----------- | ---------- | ----------------------------- |
| `feature/`  | 新機能の追加     | `feature/add-login-page`      |
| `bugfix/`   | バグ修正       | `bugfix/fix-auth-redirect`    |
| `hotfix/`   | 緊急の修正      | `hotfix/production-env-crash` |
| `chore/`    | 環境・依存・設定系  | `chore/update-eslint-config`  |
| `refactor/` | 内部リファクタリング | `refactor/clean-user-service` |

---

### ✅ この運用を1人で回せるなら、チーム開発もほぼ問題なしです。

必要であれば、GitHub Actions で自動テスト＋CIまで含めた**個人開発用のブランチ運用テンプレート**も作れますよ。興味ありますか？
