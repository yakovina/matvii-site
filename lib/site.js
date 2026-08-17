// Центральні налаштування сайту — редагуйте тут.

// Домен сайту (для SEO-метаданих і sitemap). Замініть, коли буде реальний домен.
export const SITE_URL = 'https://with-matvii.pp.ua';

// Префікс шляхів для GitHub Pages (порожній при локальній розробці).
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Куди падають заявки з форми (FormSubmit надішле лист-підтвердження при першій заявці).
export const FORM_EMAIL = 'quoren.mopatis@gmail.com';

export const IG_PROFILE = 'https://www.instagram.com/with.matvii/';
export const IG_DIRECT = 'https://ig.me/m/with.matvii';

// Вільні години для консультацій (щотижневий розклад) — показуються біля форми запису.
// Оновлюйте цей список або підключіть Google-таблицю нижче.
// Порожній список = блок на сайті не показується.
export const SLOTS = [];
export const SLOTS_NOTE = '';

// Опційно: посилання на опубліковану Google-таблицю (Файл → Опублікувати в інтернеті → CSV).
// Якщо вказано, слоти беруться звідти: перша колонка — слот, можна оновлювати без програміста.
export const SLOTS_SHEET_URL = '';

export const SERVICES = [
  'Разова консультація для батьків',
  'Перша сімейна консультація',
  'Терапія для дитини',
  'Групові заняття (діти 5–8 років)',
  'Інше питання',
];
