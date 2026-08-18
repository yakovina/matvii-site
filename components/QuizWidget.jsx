'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BASE } from '../lib/site';

const AGES = ['5–7 років', '8–10 років', '11–14 років', '15–18 років'];

// area: emotions | social | family | stress. teen — варіант формулювання для 11–18.
const QUESTIONS = [
  {
    area: 'emotions',
    text: 'Дрібниця — не та чашка, програна гра, «ще п\'ять хвилин» — і вибух: крик, сльози, все летить на підлогу',
    teen: 'Дрібне зауваження — і у відповідь вибух або грюкнуті двері й мовчання на весь вечір',
  },
  {
    area: 'emotions',
    text: 'Після спалаху дитина сама не може пояснити, що це було, — а ви стоїте виснажені і без відповідей',
  },
  {
    area: 'emotions',
    text: 'Ви вгадуєте настрій дитини по кроках у коридорі — і підлаштовуєте під нього весь вечір',
  },
  {
    area: 'social',
    text: 'На майданчику чи в школі тримається осторонь: хоче гратися з іншими, але не знає, як підійти',
    teen: 'Живого спілкування все менше: друзі наче є, але більшість часу — сам у кімнаті з телефоном',
  },
  {
    area: 'social',
    text: 'Програвати нестерпно: гра закінчується сльозами або «я більше ніколи не граю»',
    teen: 'Будь-яка невдача — контрольна, спорт, зовнішність — б\'є по самооцінці сильніше, ніж мала б',
  },
  {
    area: 'social',
    text: 'Після школи розповідає, що знову посварилися чи не взяли в гру, — і ви не знаєте, що порадити',
    teen: 'Про конфлікти з однолітками дізнаєтеся випадково — сама дитина нічого не розповідає',
  },
  {
    area: 'family',
    text: 'Прості прохання — зуби, уроки, спати — перетворюються на переговори з десятьма нагадуваннями',
    teen: 'Прості домовленості — час у телефоні, уроки, прибрати — щоразу перетворюються на битву',
  },
  {
    area: 'family',
    text: 'Вечори вдома частіше закінчуються криком чи сльозами, ніж спокійною розмовою',
  },
  {
    area: 'family',
    text: 'Ви з партнером чи бабусями сперечаєтесь, як «правильно» реагувати, — і кожен тягне в свій бік',
  },
  {
    area: 'stress',
    text: 'Після великих змін — переїзд, втрата, тривоги — дитина стала іншою: тихішою, чіпкішою або вибуховішою',
  },
  {
    area: 'stress',
    text: 'Змінилися сон чи апетит, з\'явилися нові страхи або скарги на живіт чи голову «без причини»',
  },
  {
    area: 'stress',
    text: 'Ви ловите себе на думці, що втомилися бути сильними — і нема в кого спитати поради',
  },
];

const ANSWERS = [
  { label: 'Це не про нас', score: 0 },
  { label: 'Буває', score: 1 },
  { label: 'Це прямо про нас', score: 2 },
];

const AREA_INSIGHTS = {
  emotions: {
    name: 'емоції та самоконтроль',
    heard:
      'Найбільше напруги зараз у сфері емоцій: дитині складно втримувати сильні почуття, і вони виливаються дією — криком, сльозами, вибухами. За цим стоїть навичка, яка ще формується, — а навички чудово тренуються.',
    tip: 'У спокійний момент (не під час спалаху) назвіть емоцію за дитину: «Схоже, ти дуже розлютився, бо хотів ще погратися». Сама лише назва емоції вже знижує її силу — це перший крок до того, щоб дитина навчилася казати це словами.',
  },
  social: {
    name: 'дружба і однолітки',
    heard:
      'Найчутливіша точка зараз — стосунки з іншими дітьми: влитися в компанію, витримати відмову чи програш, вирішити конфлікт. Ці вміння виростають у живій взаємодії — і їх можна тренувати в безпечних умовах.',
    tip: 'Грайте вдома в короткі ігри з програшами — і програвайте самі вголос: «Ех, я програв! Прикро… Ану ще раз». Дитина вчиться переживати невдачі, дивлячись, як це робите ви.',
  },
  family: {
    name: 'атмосфера вдома',
    heard:
      'Схоже, втомилася вся родина: прохання повторюються по колу, і напруга накопичується в усіх. Ви вже робите дуже багато — системі просто потрібен свіжий погляд ззовні, щоб зрушити з місця.',
    tip: 'Спробуйте тиждень «одного правила»: оберіть єдине, найважливіше, і помічайте, коли воно виконується («Дякую, що сів за уроки сам»). Одне правило, яке працює, дає більше, ніж десять одночасно.',
  },
  stress: {
    name: 'реакція на стрес',
    heard:
      'Поведінка і тіло дитини зараз говорять те, що поки складно сказати словами: пережите досі всередині. Так психіка захищає її — і їй можна допомогти випустити це безпечно.',
    tip: 'Поверніть передбачуваність: стабільні дрібні ритуали — та сама казка, той самий чай, той самий маршрут — повертають відчуття «я в безпеці» швидше, ніж будь-які розмови.',
  },
};

export default function QuizWidget() {
  const [age, setAge] = useState(null);
  const [idx, setIdx] = useState(-1); // -1 = стартовий екран
  const [answers, setAnswers] = useState([]);

  const isTeen = age === 2 || age === 3;
  const total = QUESTIONS.length;
  const done = idx >= total && age !== null;

  const answer = (s) => {
    setAnswers([...answers.slice(0, idx), s]);
    setIdx(idx + 1);
  };
  const restart = () => {
    setAnswers([]);
    setAge(null);
    setIdx(-1);
  };

  // Стартовий екран
  if (idx === -1) {
    return (
      <div className="quiz-card">
        <img className="monster" src={`${BASE}/assets/monsters/m_yellow.png`} alt="" style={{ width: 84, margin: '0 auto 18px' }} />
        <h3>12 коротких ситуацій — близько 3 хвилин</h3>
        <p className="muted">
          Це дзеркало щоденних моментів із життя вашої родини. Відповідайте, як воно є зараз. У
          кінці на вас чекає людська відповідь: що ми почули, що спробувати вдома вже сьогодні
          і з чого почати, якщо захочете підтримки.
        </p>
        <button className="btn btn-orange" onClick={() => setIdx(0)} style={{ marginTop: 22 }}>
          Почати <span className="arr">→</span>
        </button>
      </div>
    );
  }

  // Вибір віку
  if (age === null) {
    return (
      <div className="quiz-card">
        <p className="quiz-step">Спершу — головне</p>
        <h3 className="quiz-question">Скільки років вашій дитині?</h3>
        <div className="quiz-answers">
          {AGES.map((a, i) => (
            <button key={a} className="quiz-answer" onClick={() => setAge(i)}>
              {a}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Результат
  if (done) {
    const areaScores = { emotions: 0, social: 0, family: 0, stress: 0 };
    QUESTIONS.forEach((q, i) => {
      areaScores[q.area] += answers[i] ?? 0;
    });
    const totalScore = answers.reduce((s, a) => s + a, 0);
    const topArea = Object.entries(areaScores).sort((a, b) => b[1] - a[1])[0];
    const level = totalScore <= 6 ? 'low' : totalScore <= 13 ? 'mid' : 'high';
    const insight = AREA_INSIGHTS[topArea[0]];

    const titles = {
      low: 'Ви уважні батьки — і, схоже, тримаєте руку на пульсі',
      mid: 'Вам зараз непросто — і те, що ви шукаєте відповіді, вже багато значить',
      high: 'Схоже, ви давно тримаєте все на собі — і маєте право на підтримку',
    };
    const icons = { low: 'm_green.png', mid: 'm_blue.png', high: 'm_orange.png' };

    const startWith =
      level === 'low'
        ? 'Якщо колись відчуєте, що ситуація змінюється, — разова консультація для батьків допоможе звірити курс. А поки що вам, схоже, вистачає власних сил.'
        : level === 'mid'
          ? 'Гарний перший крок — разова консультація для батьків (без дитини): за одну зустріч розберемо вашу ситуацію і ви підете з конкретним планом для дому.'
          : isTeen
            ? 'Почніть із знайомства: перша зустріч разом з підлітком, далі — індивідуальна робота на рівних, а ви отримуватимете зворотний зв\'язок і підтримку.'
            : 'Почніть із сімейної зустрічі-знайомства: дитина побачить, що психолог — це безпечно, а ми визначимо план. У цьому процесі поруч із вами буду я.';

    const showGroup = age === 0 && (topArea[0] === 'social' || topArea[0] === 'emotions') && level !== 'low';

    return (
      <div className="quiz-card quiz-result" style={{ textAlign: 'left' }}>
        <img className="monster" src={`${BASE}/assets/monsters/${icons[level]}`} alt="" style={{ width: 92, margin: '0 auto 18px' }} />
        <h3 style={{ textAlign: 'center' }}>{titles[level]}</h3>

        <div className="quiz-block">
          <span className="quiz-block-label">Що ми почули</span>
          <p className="muted">{level === 'low'
            ? 'Більшість описаного схоже на звичайні вікові прояви. Якщо десь і є напруга, то найпомітніша вона у сфері «' + insight.name + '» — і за вашими відповідями ситуація виглядає цілком керованою.'
            : insight.heard}</p>
        </div>

        <div className="quiz-block">
          <span className="quiz-block-label">Що спробувати вдома вже сьогодні</span>
          <p className="muted">{insight.tip}</p>
        </div>

        <div className="quiz-block">
          <span className="quiz-block-label">З чого почати, якщо захочете підтримки</span>
          <p className="muted">{startWith}</p>
          {showGroup && (
            <p className="muted" style={{ marginTop: 8 }}>
              А ще для віку 5–8 у мене є маленька <Link href="/group/" style={{ color: 'var(--orange)', fontWeight: 700 }}>психологічна група «Говорити, а не кричати»</Link> —
              саме про емоції і дружбу серед інших дітей.
            </p>
          )}
        </div>

        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 26 }}>
          <Link className="btn btn-orange" href="/#contact">
            Залишити заявку <span className="arr">→</span>
          </Link>
          <button className="btn btn-outline" onClick={restart}>
            Пройти ще раз
          </button>
        </div>
        <p className="quiz-disclaimer" style={{ textAlign: 'center' }}>
          Цей тест — орієнтир для батьків. Психологічний висновок може дати лише фахівець на
          консультації. Якщо ви тривожитесь за дитину — довіряйте своєму відчуттю незалежно від
          результату.
        </p>
      </div>
    );
  }

  // Питання
  const q = QUESTIONS[idx];
  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <div className="quiz-progress-fill" style={{ width: `${(idx / total) * 100}%` }} />
      </div>
      <p className="quiz-step">
        Ситуація {idx + 1} з {total}
      </p>
      <h3 className="quiz-question">{isTeen && q.teen ? q.teen : q.text}</h3>
      <div className="quiz-answers">
        {ANSWERS.map((a) => (
          <button
            key={a.label}
            className={`quiz-answer ${answers[idx] === a.score ? 'active' : ''}`}
            onClick={() => answer(a.score)}
          >
            {a.label}
          </button>
        ))}
      </div>
      {idx > 0 && (
        <button className="quiz-back" onClick={() => setIdx(idx - 1)}>
          ← Попередня
        </button>
      )}
    </div>
  );
}
