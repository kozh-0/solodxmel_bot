import 'dotenv/config';
import dedent from 'dedent';
import { Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import { LOG_USERS, aboutText } from './help';

const bot = new Telegraf(process.env.TG_KEY, { handlerTimeout: 20000 });

bot.command('help', (ctx) => ctx.replyWithPhoto({ source: 'darkLogo.jpg' }));
bot.command('about', (ctx) => ctx.replyWithVideo({ source: 'solodxmel_about_video.mp4' }, { caption: aboutText }));

bot.command('start', (ctx) => {
  LOG_USERS(ctx.message, 'START');
  ctx.reply('Добро пожаловать!', {
    //@ts-ignore
    reply_markup: Markup.keyboard(['О компании']),
  });
});

bot.on(message('text'), async (ctx) => {
  const input = ctx.message.text.trim();
  if (!input) return;
  LOG_USERS(ctx.message, 'TEXT');

  try {
    ctx.reply(dedent`Привет, функционал пока в разработке...`);
  } catch (err) {
    console.error('TRY_CATCH AREA===========================================', err);
    ctx.reply(`Что-то пошло cооовсем не так...`);
  }
});

bot.catch((err, ctx) => {
  console.error(err);
  ctx.reply('Ошибка! Попробуй еще раз...');
});

bot.launch();
console.log('Запустился');
