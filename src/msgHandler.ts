import { Context, NarrowedContext } from 'telegraf';
import { Update } from 'telegraf/types';
import { BTNS, aboutText } from './help';

export function msgHandler(
  input: (typeof BTNS)[keyof typeof BTNS] | string,
  ctx: NarrowedContext<Context<Update>, Update.MessageUpdate>
) {
  switch (input) {
    case BTNS.About:
      ctx.replyWithVideo({ source: 'solodxmel_about_video.mp4' }, { caption: aboutText });
      break;
    case BTNS.Catalog:
      ctx.reply('Тут будет продукция...');
      break;
    case BTNS.BusinessHelp:
      ctx.reply('Тут будет что-то про помощь бизнесу...');
      break;
    case BTNS.Logistics:
      ctx.reply('Тут будет что-то про логистику...');
      break;
    case BTNS.Application:
      ctx.reply('Тут будет заявка на почту...');
      break;
    case BTNS.Feedback:
      ctx.reply('Тут будет обратная связь...');
      break;

    default:
      // @ts-ignore
      const _: never = input;
      ctx.reply(`Я вас не понял...\nВоспользуйтесь, пожалуйста, кнопками выбора.`);
      break;
  }
}
