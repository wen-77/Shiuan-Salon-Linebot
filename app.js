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
    if (event.message.type = 'text') {
        var msg = event.message.text;
        event.reply(msg).then(function(data) {
          // success 
          console.log(msg);
        }).catch(function(error) {
          // error 
          console.log('error');
        });
      }
});
app.post('/', linebotParser);

app.listen(process.env.PORT || 8080, () => {
    console.log('Express serve start')
});