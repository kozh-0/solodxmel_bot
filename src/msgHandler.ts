import { Context, NarrowedContext } from 'telegraf';
import { Update } from 'telegraf/types';
import { BTNS, LOG_USERS, aboutText, applicationText } from './help';
// import { sendEmail } from './mail';

export function msgHandler(
  input: (typeof BTNS)[keyof typeof BTNS] | string,
  ctx: NarrowedContext<Context<Update>, Update.MessageUpdate>
) {
  LOG_USERS(ctx.message, 'TEXT');

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
      // sendEmail();
      ctx.reply(applicationText, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Отмена', callback_data: 'CANCEL' },
              { text: 'Отправить', callback_data: 'SEND' },
            ],
          ],
        },
      });
      // Markup.inlineKeyboard([
      //   Markup.button.callback('Отмена', 'cancel'),
      //   Markup.button.callback('Сформировать письмо', 'sendEmail'),
      // ])
      break;
    case BTNS.Feedback:
      ctx.reply('Тут будет обратная связь...');
      break;

    default:
      // @ts-ignore При добавлении новых свойств, неиспользованные тут выдадут ошибку, (тс игнор потому что приложение ломается от малейшей ерунды)
      const _: never = input;
      ctx.reply(`Я вас не понял...\nВоспользуйтесь, пожалуйста, кнопками выбора.`);
      break;
  }
}
