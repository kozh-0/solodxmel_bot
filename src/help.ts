import dedent from 'dedent';

export function LOG_USERS(msg, context?: 'START' | 'TEXT') {
  console.log(dedent`================================================================================
    ${msg.from.first_name} ${msg.from.last_name} (@${msg.from.username}) - ${msg.text}
    ${new Date(msg.date * 1000).toLocaleString('ru')} ${context}
    `);
}
// 🍺
export const enum BTNS {
  About = 'О компании',
  Catalog = '📋 Каталог продукции',
  BusinessHelp = 'Помощь в открытии бизнеса',
  Logistics = '📦 Логистика',
  Application = 'Оставить заявку',
  Feedback = 'Обратная связь',
}

export const aboutText = `Компания Солод Хмель это надёжный поставщик и производитель пивоваренной продукции, снеков и сопутствующих товаров с 2011 года.

🔶Самые низкие оптовые цены
🔶Только высокое качество 
🔶Доставляем сами
🔶Помощь в открытии бизнеса 
🔶Доставка от 1 кеги
🔶Оборудование в аренду
🔶Постоянный складской запас
🔶100% решение вопросов`;

export const applicationText = `Вас интересуют более выгодные условия поставки пива?
Отправьте ваши контакты и мы свяжемся с вами.

Ваше имя
Номер телефона
Email
Ваше местоположение (город, район)`;
// Почта куда должны падать заявки - Ufa.pivo@gmail.com
