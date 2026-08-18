'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BASE } from '../lib/site';

const QUESTIONS = [
  'Дитині складно заспокоїтися після спалаху злості чи істерики — це триває довше, ніж у однолітків',
  'Емоції вона частіше виражає дією — криком, бійкою, грюканням дверима — ніж словами',
  'Їй складно заводити друзів або втримувати дружбу',
  'Програші, помилки чи критику переживає болісно — аж до сліз або відмови від діяльності',
  'Замикається в собі: важко дізнатися, що з нею відбувається',
  'Останнім часом змінилися сон чи апетит, або з’явилися нові страхи',
  'Ви помітили зміни в поведінці після стресової події (переїзд, втрата, розлучення, обстріли)',
  'Зі школи чи садочка частіше скаржаться на поведінку або конфлікти',
  'Домашні розмови все частіше закінчуються криком або сльозами',
  'Ви відчуваєте, що вже перепробували все, що знали — і втомилися шукати підхід',
];

const ANSWERS = [
  { label: 'Ні, рідко', score: 0 },
  { label: 'Іноді', score: 1 },
  { label: 'Часто', score: 2 },
];

const RESULTS = [
  {
    max: 5,
    icon: 'm_green.png',
    title: 'Схоже, зараз усе в межах вікової норми',
    text: 'Більшість того, що ви описали, виглядає як звичайні вікові прояви. Підтримки, яку ви даєте вдома, найімовірніше достатньо. Якщо колись відчуєте, що ситуація змінюється, — ви вже знаєте, куди звернутися.',
    cta: 'Почитати про мій підхід',
    href: '/#services',
  },
  {
    max: 11,
    icon: 'm_blue.png',
    title: 'Є моменти, на які варто звернути увагу',
    text: 'Частина відповідей вказує на складнощі, з якими дитині — і вам — було б легше впоратися з підтримкою фахівця. Гарний перший крок — разова консультація для батьків: за одну зустріч розберете ситуацію і отримаєте конкретні інструменти для дому.',
    cta: 'Залишити заявку',
    href: '/#contact',
  },
  {
    max: 20,
    icon: 'm_orange.png',
    title: 'Схоже, підтримка фахівця зараз не завадить',
    text: 'Судячи з відповідей, дитині зараз непросто, а ви вже витратили багато сил, шукаючи підхід самотужки. Це не діагноз — але розмова з дитячим психологом допоможе зрозуміти, що стоїть за поведінкою, і підібрати підтримку для дитини й для вас.',
    cta: 'Залишити заявку',
    href: '/#contact',
  },
];

export default function QuizWidget() {
  const [idx, setIdx] = useState(-1); // -1 = стартовий екран
  const [answers, setAnswers] = useState([]);

  const total = QUESTIONS.length;
  const done = idx >= total;
  const score = answers.reduce((s, a) => s + a, 0);
  const result = RESULTS.find((r) => score <= r.max) ?? RESULTS[RESULTS.length - 1];

  const answer = (s) => {
    setAnswers([...answers.slice(0, idx), s]);
    setIdx(idx + 1);
  };
  const back = () => setIdx(idx - 1);
  const restart = () => {
    setAnswers([]);
    setIdx(-1);
  };

  if (idx === -1) {
    return (
      <div className="quiz-card">
        <img className="monster" src={`${BASE}/assets/monsters/m_yellow.png`} alt="" style={{ width: 84, margin: '0 auto 18px' }} />
        <h3>10 коротких питань — близько 2 хвилин</h3>
        <p className="muted">
          Відповідайте, як воно є зараз, а не як «має бути». Тест — орієнтир для батьків, а не
          діагностика: він допоможе зрозуміти, чи варто звернутися до фахівця.
        </p>
        <button className="btn btn-orange" onClick={() => setIdx(0)} style={{ marginTop: 22 }}>
          Почати тест <span className="arr">→</span>
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="quiz-card quiz-result">
        <img className="monster" src={`${BASE}/assets/monsters/${result.icon}`} alt="" style={{ width: 92, margin: '0 auto 18px' }} />
        <h3>{result.title}</h3>
        <p className="muted">{result.text}</p>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 24 }}>
          <Link className="btn btn-orange" href={result.href}>
            {result.cta} <span className="arr">→</span>
          </Link>
          <button className="btn btn-outline" onClick={restart}>
            Пройти ще раз
          </button>
        </div>
        <p className="quiz-disclaimer">
          Результат тесту не є психологічним чи медичним висновком. Якщо ви тривожитесь за
          дитину — довіряйте своєму відчуттю незалежно від балів.
        </p>
      </div>
    );
  }

  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <div className="quiz-progress-fill" style={{ width: `${(idx / total) * 100}%` }} />
      </div>
      <p className="quiz-step">
        Питання {idx + 1} з {total}
      </p>
      <h3 className="quiz-question">{QUESTIONS[idx]}</h3>
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
        <button className="quiz-back" onClick={back}>
          ← Попереднє питання
        </button>
      )}
    </div>
  );
}
