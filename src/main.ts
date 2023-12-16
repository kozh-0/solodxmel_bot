import 'dotenv/config';
import { Telegraf } from 'telegraf';
import { Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import { BTNS, LOG_USERS } from './help';
import { msgHandler } from './msgHandler';

const bot = new Telegraf(process.env.TG_KEY, { handlerTimeout: 20000 });

bot.start((ctx) => {
  LOG_USERS(ctx.message, 'START');
  ctx.reply(
    'Компания Солод Хмель это надёжный поставщик и производитель пивоваренной продукции, снеков и сопутствующих товаров с 2011 года.',
    Markup.keyboard([
      [BTNS.About, BTNS.Catalog, BTNS.BusinessHelp],
      [BTNS.Logistics, BTNS.Application, BTNS.Feedback],
    ]).resize()
  );
  // Это чтобы можно было внутри сообщения кнопки выводить
  // ctx.reply('message, {reply_markup: { inline_keyboard: [[{ text: 'О компании', callback_data: 'AHAHHAh' }]] }}')
});

bot.on(message('text'), async (ctx) => {
  const input = ctx.message.text.trim();
  if (!input) return;
  LOG_USERS(ctx.message, 'TEXT');
  msgHandler(input, ctx);
});

bot.on('voice', (ctx) => ctx.reply('Какой чудный у вас голос 😉'));
bot.on('sticker', (ctx) => ctx.reply('Классный стикер 🙃'));
bot.on('photo', (ctx) => ctx.reply('👍'));
bot.help((ctx) => ctx.replyWithPhoto({ source: 'darkLogo.jpg' }));

bot.catch((err, ctx) => {
  console.error(err);
  ctx.reply('Упс... Что-то пошло не так. Попробуйте снова.');
});

bot.launch();
console.log('Запустился');
