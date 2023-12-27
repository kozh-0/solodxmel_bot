import { Context, NarrowedContext, Markup } from 'telegraf';
import { Update } from 'telegraf/types';
import { BTNS, LOG_USERS, aboutText, applicationText, businessHelp, logisticsText } from './help';
import dedent from 'dedent';

export async function msgHandler(
  input: (typeof BTNS)[keyof typeof BTNS] | string,
  ctx: NarrowedContext<Context<Update>, Update.MessageUpdate>
) {
  LOG_USERS(ctx.message, 'TEXT');

  switch (input) {
    case BTNS.About:
      await ctx.sendChatAction('upload_video');
      await ctx.replyWithVideo({ source: 'public/solodxmel_about_video.mp4' }, { caption: aboutText });
      break;
    case BTNS.Catalog:
      // Телеграм не дает отправлять файлы более 50мб, если больше то ошибка
      try {
        await ctx.sendChatAction('upload_document');
        await ctx.replyWithDocument({ source: 'public/solodxmel_prices_compressed.7z' }, { caption: 'Продукция' });
      } catch (error) {
        await ctx.reply('Файл слишком большой, не удалось отправить...');
      } finally {
        break;
      }
    case BTNS.BusinessHelp:
      await ctx.sendChatAction('upload_photo');
      ctx.replyWithPhoto({ source: 'public/businessHelp.png' }, { caption: businessHelp });
      break;
    case BTNS.Logistics:
      ctx.reply(logisticsText);
      break;
    case BTNS.Application:
      ctx.reply(applicationText, {
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback('Отмена', 'cancel'),
              { text: 'Сформировать письмо', web_app: { url: 'https://kozh-0.github.io/solodxmel_bot_front/' } },
            ],
          ],
        },
      });
      break;
    case BTNS.Feedback:
      await ctx.sendChatAction('upload_photo');
      await ctx.replyWithPhoto(
        { source: 'public/feedback.png' },
        {
          caption: dedent`
      Руководитель +7-(937)-363-33-36 Дмитрий 
      Отдел продаж +7-(987)-251-36-21 Артур
      E-mail Ufa.pivo@gmail.com`,
        }
      );
      break;

    default:
      // @ts-ignore При добавлении новых свойств, неиспользованные тут выдадут ошибку, (тс игнор потому что приложение ломается от малейшей ерунды)
      const _: never = input;
      ctx.reply(`Я вас не понял...\nВоспользуйтесь, пожалуйста, кнопками выбора.`);
      break;
  }
}
