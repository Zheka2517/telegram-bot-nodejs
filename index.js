const TelegramBot = require('node-telegram-bot-api');

//Telegram token from @BotFather
const token = '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    let response = msg.from.first_name;

    bot.sendMessage(chatId, response);
});

bot.on('message', (msg) => {

    const message = msg.text;
    let response = 'Response: ';

    if (message === 'Who am i?') {
        response = '*Your login* ' + msg.from.username;
        response += '\r\n';
        response += '*Your name* ' + msg.from.first_name;
        response += '\r\n';
        response += '*Your id* ' + msg.from.id;
    }

    const chatId = msg.chat.id;

    let options = {
        parse_mode : "Markdown",
        reply_markup: {
            keyboard: [
                [{text:"Who am i?"}]
            ],
            resize_keyboard : true
        }
    };

    bot.sendMessage(chatId, response, options);
});