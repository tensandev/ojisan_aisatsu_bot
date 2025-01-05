const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

// Botの設定
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// 構文リストを読み込み
const greetings = JSON.parse(fs.readFileSync('./greetings.json', 'utf8'));

// Botが起動したときの処理
client.once('ready', () => {
    console.log(`おじさん構文挨拶Botが起動しました！`);
    console.log(`ログイン中: ${client.user.tag}`);
});

// ユーザーがサーバーに参加したときの処理
client.on('guildMemberAdd', (member) => {
    // ニックネームがある場合はそれを使用、ない場合はユーザー名を使用
    const username = member.nickname || member.user.username;

    // ランダムに挨拶構文を選択
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // {user} をユーザー名で置き換え
    const message = randomGreeting.replace(/{user}/g, username);

    // サーバーの一般チャンネルで挨拶
    const channel = member.guild.systemChannel; // システムメッセージ用のチャンネル
    // const channel = member.guild.channels.cache.get('チャンネルID'); //　特定のチャンネル
    if (channel) {
        channel.send(message);
        console.log(`メッセージが出力されました！`);
        console.log(message);
    }
});

// BotをDiscordにログインさせる
client.login(process.env.TOKEN);
