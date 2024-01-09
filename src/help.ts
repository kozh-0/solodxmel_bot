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
  BusinessHelp = 'Сотрудничество',
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
Отправьте ваши контакты и мы свяжемся с вами.`;
// Почта куда должны падать заявки - Ufa.pivo@gmail.com

export const businessHelp = `🔶 Эксклюзивные цены от производителя 
🔶 Бесплатное оборудование + сервисное обслуживание 
🔶 Бесплатная доставка от 1 кеги в любой населенный пункт согласно географии продаж без выходных 
🔶 Высочайший сервис, постоянный складской запас 
🔶 Персональный бесплатный менеджер, для внедрения процессов и обучения персонала`;

export const logisticsText = `🔶 У нас более 15-ти транспортных единиц техники 
🔶 Сеть партнёров компании 1000+ магазинов
🔶 Доставка в течении суток со дня принятия заявки
🔶 Зона покрытия респ. Башкортостан и Татарстан , Удмуртия, Челябинская и Оренбургская область
🔶 Работаем в 60 населенных пунктах 
🔶 Доставка от одной кеги, без выходных 
🔶 Погрузо-разгрузочный процесс на складах механизированный
🔶 Продукция доставляется в склад покупателя
🔶 Транспортировка кег осуществляется на тележках`;

// Группой телега отправляет только фото, которые лежат в интернете, лоакльные фото отправляет по одной
// const photos = new Array(11).fill(0).map((_, i) => ({ type: 'photo', media: `public/staff/${i + 1}.png` }));
// console.log(photos);
export const staffPhotos: any[] = [
  {
    caption: 'Руководство компании',
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYRXopEBuRfPJkGGhWMwc87Yida1yV24HdcxW-f2tRv4GU3uLun38kTtF42BfzbC9sgwnvYxX8LqrVx9uK7WPqoJDGtnHg=w2494-h1292',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYSWGygJejrwd0SRvp4dHXsrT9jVUg1WDl9dsMCRGs_D16-qoJu3bhe8ME0U5fswZIIFxqd-61nLVDojuA0nW8fIlAF5FA=w1920-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYQ044q_vtk8ZWbtvNPaTAYfF5TyRHvi7STrPd-BFVd8IfnkdU8jSkL6eL8PIZyOuWQDlZnWpDpB1pE5-vdZSJ542dTWYw=w1920-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYQvT6IsURCrg88EvMHMDxZmJFMKCMWf3e9obtucjxXWOAzKvEn6Awz6D2txCodp2KmtXigqU4oIvFaBk17UGmcIXfvK=w1166-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYQ8JdZimhCAHBCuC_TOBwqs3Ody5jINP9ZBHCilop-DmqxGzQYk1cj_jkMxMULgSevssYHIiyhacfoqRN581d2tzNmdDw=w1920-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYS2wW45URDmcznFlE4fxkhYZ5k7t4etaOfY6X-4h8LSlBwYKxbwuXiNgACnU0VIGEIScM2pJzO7jmTWPDJUNdve2UTIaQ=w1166-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYRhxWAynVODYmBzAYpHv1glFZgP0p-dhe5N_PTLdUUqwhG42h8SFeS6l8ubSvHaYqrGQbnfa1gvyXn-Xj4gpN3ZHgenQg=w1166-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYQLuBa8fSg_7Sd-S9fLAsMESAUolGNt6MeLAdJwq1EJoGOc2D9kXDfd4FA5LS8UsNwb158vKCxp8uc01fTql_noDz4k=w1166-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYRj36Q53mMdg7NqW67bMNTog7nai1BxlQA7wulvgqJDd1MBH1gAXe2HvP9smfjDWqj1dkW9k3RPckIidQZ-MdWYyXGh=w1920-h959',
  },
  {
    type: 'photo',
    media:
      'https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYTx3CD0MpBrUMS3BYB-ejbBcQ2bbjX4VXOgt5NGHGTCY_dDd2EdW2-XNioXK0mknktVN1edss-kLMCggjhrUKBYtXPa=w1166-h959',
  },
];
