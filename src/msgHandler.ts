import { Context, NarrowedContext, Markup } from 'telegraf';
import { Update } from 'telegraf/types';
import { BTNS, LOG_USERS, aboutText, applicationText, businessHelp, logisticsText, staffPhotos } from './help';
import dedent from 'dedent';

export async function msgHandler(
  input: (typeof BTNS)[keyof typeof BTNS] | string,
  ctx: NarrowedContext<Context<Update>, Update.MessageUpdate>
) {
  LOG_USERS(ctx.message, 'TEXT');

  switch (input) {
    case BTNS.About:
      await ctx.sendChatAction('upload_video');
      await ctx.reply(aboutText + '\n\nhttps://www.youtube.com/watch?v=jXetxiD6SIo');
      // await ctx.replyWithVideo({ source: 'public/solodxmel_about_video.mp4' }, { caption: aboutText });
      await ctx.sendChatAction('upload_photo');
      try {
        await ctx.sendMediaGroup(staffPhotos);
      } catch (err) {
        await ctx.reply('Не удалось отправить фотографии руководства компании... 😞');
      }
      break;

    case BTNS.Catalog:
      async function sendPhotosAsFile(photosCount: number, path: string, caption: string = '') {
        await ctx.reply(caption);
        for (let i = 0; i < photosCount; i++) {
          await ctx.sendChatAction('upload_document');
          await ctx.sendDocument({ source: `${path}${i + 1}.png` });
        }
      }
      await sendPhotosAsFile(
        4,
        `public/Каталог_comp/Фасовка_comp/Солод Хмель Фасовка_Монтажная область 1-0`,
        'Фасовка'
      );
      await sendPhotosAsFile(8, `public/Каталог_comp/Розлив_comp/Солод Хмель Разлив_Монтажная область 1-0`, 'Розлив');
      await sendPhotosAsFile(13, `public/Каталог_comp/Снеки_comp/Солод Хмель Снеки_1.`, 'Снеки');
      break;
    // await ctx.sendChatAction('upload_photo');
    // ctx.sendMediaGroup(catalog.rozliv);
    // await ctx.sendChatAction('upload_photo');
    // ctx.sendMediaGroup(catalog.fasovka);
    // await ctx.sendChatAction('upload_photo');

    // ctx.replyWithPhoto(
    //   { source: 'public/catalog.jpg' },
    //   {
    //     reply_markup: {
    //       inline_keyboard: [
    //         [
    //           Markup.button.url(
    //             'Каталог "Солод Хмель"',
    //             'https://drive.google.com/file/d/13T7OuOWS1nabcYWoh6TfPh27DKBU7MxO/view?usp=drivesdk'
    //           ),
    //         ],
    //       ],
    //     },
    //   }
    // );

    // Телеграм не дает отправлять файлы более 50мб, если больше то ошибка
    // try {
    //   await ctx.sendChatAction('upload_document');
    //   await ctx.replyWithDocument({ source: 'public/solodxmel_prices_compressed.7z' }, { caption: 'Продукция' });
    // } catch (err) {
    //   await ctx.reply('Файл слишком большой, не удалось отправить...');
    // } finally {
    //   break;
    // }

    case BTNS.BusinessHelp:
      await ctx.sendChatAction('upload_photo');
      ctx.replyWithPhoto(
        { source: 'public/businessHelp.png' },
        {
          caption: businessHelp,
          reply_markup: { inline_keyboard: [[Markup.button.url('Чат поддержки', 'https://t.me/+Ylz7GGwIlephZjZi')]] },
        }
      );
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
          reply_markup: { inline_keyboard: [[Markup.button.url('Чат поддержки', 'https://t.me/+Ylz7GGwIlephZjZi')]] },
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
