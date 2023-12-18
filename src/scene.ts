import { Scenes } from 'telegraf';
import { applicationText } from './help';

const { WizardScene, Stage } = Scenes;

// Создание волшебника (Wizard) сцены
const wizardScene = new WizardScene(
  'wizardScene',
  (ctx: any) => {
    ctx.reply(applicationText);
    // ctx.reply(applicationText, {
    //   reply_markup: {
    //     remove_keyboard: true,
    //     // inline_keyboard: [[{text: 'aasd', web_app}]],
    //     // inline_keyboard: [[Markup.button.callback('Отмена', 'cancel')]],
    //   },
    // });
    return ctx.wizard.next();
  },
  (ctx) => {
    console.log('2', ctx.message?.text);
    ctx.reply(`Вы написали ${ctx.message?.text}`);
    return ctx.scene.leave();
    // return ctx.wizard.next();
  }
  //   (ctx) => {
  //     ctx.reply('Step 3');
  //     return ctx.scene.leave();
  //   }
);

// @ts-ignore Создание стадии и регистрация сцен
export const stage = new Stage([wizardScene]);
