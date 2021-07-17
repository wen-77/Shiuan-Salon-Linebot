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
    console.log(event);
    switch (event.message.text) {
        case '你好':
            event.reply('你好，請問需要什麼？')
            break
        case 'hi':
            event.reply('hello')
            break
        case 'hello':
            event.reply('hi')
            break
        case '有人嗎':
            event.reply('請敘述您的問題，謝謝。')
            break
        case '請問':
            event.reply('是的，請說')
            break
        case '預約':
            event.reply('好的，請留姓名電話，會在與您確認。')
            break
        default:
            event.reply('不好意思，現在客服人員不在線上！')
    }
});

const line = require('@line/bot-sdk');

const client = new line.Client({
    channelAccessToken: '<channel access token>'
});

async function App(context) {
    await context.sendFlex('This is an advanced flex', {
        type: 'bubble',
        hero: {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
            size: 'full',
            aspectRatio: '20:13',
        },
        body: {
            type: 'box',
            layout: 'vertical',
            contents: [{
                    type: 'text',
                    text: 'Brown Cafe',
                    weight: 'bold',
                    size: 'xl',
                },
                {
                    type: 'box',
                    layout: 'vertical',
                    margin: 'lg',
                    contents: [{
                        type: 'box',
                        layout: 'baseline',
                        contents: [{
                                type: 'text',
                                text: 'Place',
                                color: '#aaaaaa',
                                size: 'sm',
                                flex: 1,
                            },
                            {
                                type: 'text',
                                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                                wrap: true,
                                color: '#666666',
                                size: 'sm',
                                flex: 5,
                            },
                        ],
                    }, ],
                },
            ],
        },
        footer: {
            type: 'box',
            layout: 'vertical',
            contents: [{
                type: 'button',
                action: {
                    type: 'uri',
                    label: 'WEBSITE',
                    uri: 'https://linecorp.com',
                },
            }, ],
        },
    });
};

client.pushMessage('<to>', message).then(() => {
    console.log("success")
}).catch((err) => {
    console.log(err)
});

app.post('/', linebotParser);

app.listen(process.env.PORT || 8080, () => {
    console.log('Express serve start')
});