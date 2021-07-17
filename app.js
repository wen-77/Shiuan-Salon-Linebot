const express = require('express')
const app = express()

const linebot = require('linebot');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});
const linebotParser = bot.parser();

bot.on('message', function (event) {
    // console.log(event);
    if (event.message.type == text) {
        var msg = event.message.text;
        var replyMsg;
        if (msg == 'hi') {
            replyMsg = "你好！";
        };
        // case 'hi':
        //     event.reply()
        //     break
        // case 'hello':
        //     event.reply('請問有什麼是我可以幫你的嗎？')
        //     break
        // case '有人在嗎？':
        //     event.reply('是的，我在！')
        //     break
        // default:
        //     event.reply('目前無法回覆，請稍作等候，謝謝。')
    };
});
app.post('/', linebotParser);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express serve start')
});