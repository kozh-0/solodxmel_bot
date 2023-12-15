import 'dotenv/config';
import dedent from 'dedent';
// import { Loader } from './loader';
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

function LOG_USERS(msg, context?: 'START' | 'TEXT') {
  console.log(dedent`========================================================================================
  ${msg.from.first_name} ${msg.from.last_name} (@${msg.from.username}) - ${msg.text}
  ${new Date(msg.date * 1000).toLocaleString('ru')} ${context}
  `);
}

const TG_BOT = new Telegraf(process.env.TG_KEY, { handlerTimeout: 20000 });

TG_BOT.command('start', (ctx) => {
  LOG_USERS(ctx.message, 'START');
  ctx.reply(dedent`Добро пожаловать. 
  то-то то-то`);
});

TG_BOT.on(message('text'), async (ctx) => {
  const input = ctx.message.text.trim();
  if (!input) return;

  //   const loader = new Loader(ctx);
  //   loader.show();
  LOG_USERS(ctx.message, 'TEXT');

  try {
    ctx.reply(dedent`Привет, функционал пока в разработке...`);
  } catch (err) {
    console.error('TRY_CATCH AREA===========================================', err);
    ctx.reply(`Что-то пошло cооовсем не так...`);
  }
});

TG_BOT.catch((err, ctx) => {
  console.error(err);
  ctx.reply('Ошибка тг! Попробуй еще раз...');
});

TG_BOT.launch();

console.log('Запустился');
