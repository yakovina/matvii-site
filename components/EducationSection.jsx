'use client';

import { useState } from 'react';
import { BASE } from '../lib/site';

const TRAININGS = [
  {
    t: 'Основи нейропсихології для психологів і психотерапевтів',
    org: 'Українська асоціація нейропсихології',
    meta: '2024 · 30 годин',
    d: 'Напрям, який зараз найбільше мене захоплює: як мозок впливає на поведінку, навчання та емоції дитини.',
    cert: `${BASE}/assets/certs/cert_neuro.png`,
  },
  {
    t: 'Brainspotting, Phase 1',
    org: 'Brainspotting Trainings Inc., David Grand',
    meta: '2022 · 24 години',
    d: 'Методика роботи зі стресовими станами: допомагає розуміти природу травматичного досвіду і реакцій нервової системи.',
    cert: `${BASE}/assets/certs/cert_brain.png`,
  },
  {
    t: 'СЕБ-підхід, рівень 1',
    org: 'Сенсорно-емоційно-поведінковий підхід · EdWay',
    meta: 'підвищення кваліфікації',
    d: 'Практичні інструменти підтримки дітей у навчанні з урахуванням емоцій, поведінки й сенсорних особливостей.',
    cert: `${BASE}/assets/certs/cert_seb.png`,
  },
  {
    t: 'Конференція «Соціалізація і ресоціалізація особистості»',
    org: 'КНУ імені Тараса Шевченка',
    meta: '2022 · 15 годин',
    d: 'VIII міжнародна науково-практична конференція факультету психології.',
    cert: `${BASE}/assets/certs/cert_conf.png`,
  },
];

export default function EducationSection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="education" className="edu">
      <div className="wrap">
        <div className="kicker" data-reveal>Освіта</div>
        <h2 data-reveal>
          Базова освіта — <em>і навчання, що не зупиняється</em>
        </h2>
        <p className="lede" data-reveal>
          Працюю з дітьми і родинами з 2019 року — і щороку додаю до практики нові підходи.
        </p>
        <div className="edu-grid">
          <button
            type="button"
            className="edu-main"
            data-reveal
            onClick={() => setLightbox({ t: 'Диплом магістра психології', cert: `${BASE}/assets/diploma.png` })}
            aria-label="Переглянути диплом магістра"
          >
            <img src={`${BASE}/assets/diploma.png`} alt="Диплом магістра психології КНУ імені Тараса Шевченка" loading="lazy" />
            <div className="edu-main-body">
              <h3>Магістр психології</h3>
              <p className="edu-org">КНУ імені Тараса Шевченка · 2022</p>
              <p>
                Програма «Психологія дитинства і сім'ї з основами психотерапії». Майже 7 років
                навчання, які дали глибоке розуміння дитини, її меж і динаміки сімейних
                стосунків.
              </p>
              <span className="edu-view">Переглянути диплом →</span>
            </div>
          </button>
          <div className="edu-list" data-reveal>
            {TRAININGS.map((e) => (
              <button
                type="button"
                className="edu-item"
                key={e.t}
                onClick={() => setLightbox(e)}
                aria-label={`Переглянути сертифікат: ${e.t}`}
              >
                <div className="edu-item-head">
                  <h3>{e.t}</h3>
                  <span className="edu-meta">{e.meta}</span>
                </div>
                <p className="edu-org">{e.org}</p>
                <p className="edu-desc">{e.d}</p>
                <span className="edu-view">Переглянути сертифікат →</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Закрити">✕</button>
          <img src={lightbox.cert} alt={`Сертифікат: ${lightbox.t}`} />
        </div>
      )}
    </section>
  );
}
