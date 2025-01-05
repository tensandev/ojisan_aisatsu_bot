# おじさん構文挨拶bot

おじさん構文挨拶botは、Discordサーバーに新しいユーザーが参加した際に、事前に用意された「おじさん構文」の挨拶を設定されたさまざまな文からランダムに選び、そのユーザー名を挿入して挨拶するDiscordボットです。

## 特徴
- **ランダムな挨拶**：複数の挨拶構文からランダムで選択して出力。
- **カスタマイズ可能**：挨拶構文を簡単に追加・編集可能。

---

## 必要環境
- Node.js (v20(LTS)以上を推奨)
- npm
- Discord Botトークン ([取得方法はこちら](https://discord.com/developers/applications))

---

## インストール

1. **リポジトリをクローンまたはダウンロード**
   ```bash
   git clone https://github.com/star-dot123/ojisan_aisatsu_bot.git
   cd ojisan_aisatsu_bot
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **Botトークンを設定**
   `.env` ファイルに以下を記載してください。
   ```
   TOKEN=※※あなたのDiscordBotトークン※※
   ```

4. **挨拶構文を編集**
   `greetings.json` を開き、カスタマイズしたい挨拶構文を編集・追加してください。

---

## 使用方法

1. **Botを起動**
   ```bash
   node index.js
   ```

2. **Botをサーバーに招待**
   Discord Developer PortalのOAuth2設定から、Botをサーバーに追加してください。

3. **挨拶を確認**
   サーバーに新しいメンバーを追加すると、指定されたチャンネルに挨拶メッセージが送信されます。

---

## ファイル構成
```
ojisan_aisatsu_bot/
├── greetings.json      # 挨拶構文が保存されているJSONファイル
├── index.js            # Botのメインコード
├── package.json        # プロジェクト設定ファイル
├── .env                # Botトークンを設定する環境変数ファイル
└── README.md           # 本ファイル
```

---

## カスタマイズ
### 挨拶構文の追加
- `greetings.json` に新しい構文を追加できます。
- `{user}` を挿入することで、参加したユーザー名を自動で埋め込みます。

### メッセージ送信先の指定
- デフォルトでは、サーバーの「システムメッセージ用チャンネル」に挨拶が送信されます。
- 特定のチャンネルIDに変更したい場合は、コード内の以下の部分を編集してください。

```javascript
const channel = member.guild.channels.cache.get('チャンネルID');
```

---

## ライセンス
このプロジェクトはMITライセンスの下で公開されています。

---

おじさん構文挨拶botを使って、サーバーに楽しい挨拶を届けましょう！
