import { Context, NarrowedContext, Markup } from 'telegraf';
import { Update } from 'telegraf/types';
import { BTNS, LOG_USERS, aboutText, applicationText } from './help';
import dedent from 'dedent';

export async function msgHandler(
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
      // @ts-ignore
      // ctx.scene.enter('wizardScene');

      ctx.reply(applicationText, {
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback('Отмена', 'cancel'),
              { text: 'Сформировать письмо', web_app: { url: 'https://www.google.ru/' } },
              Markup.button.callback('ЭКШН', 'send email'),
              // { text: 'Отмена', callback_data: 'CANCEL' },
              // { text: 'Отправить', web_app: { url: 'http://localhost:4200/reports' } },
            ],
          ],
        },
      });
      break;
    case BTNS.Feedback:
      ctx.reply(dedent`
      Руководитель +7-(937)-363-33-36 Дмитрий 
      Отдел продаж +7-(987)-251-36-21 Артур
      E-mail Ufa.pivo@gmail.com`);
      break;

    default:
      // @ts-ignore При добавлении новых свойств, неиспользованные тут выдадут ошибку, (тс игнор потому что приложение ломается от малейшей ерунды)
      const _: never = input;
      ctx.reply(`Я вас не понял...\nВоспользуйтесь, пожалуйста, кнопками выбора.`);
      break;
  }
}
