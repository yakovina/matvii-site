import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RevealManager from '../../components/RevealManager';
import MobileCta from '../../components/MobileCta';
import ContactSection from '../../components/ContactSection';

export const metadata = {
  title: 'Підліткам 11–18 років',
  description:
    'Психолог для підлітків 11–18 років у Києві та онлайн: розмова на рівних про мотивацію, кордони, стосунки з однолітками і стрес. Без моралізаторства.',
  alternates: { canonical: '/teens/' },
};

const STEPS = [
  { t: 'Знайомство', d: 'Перша зустріч — з батьками й підлітком: домовляємось, як виглядатиме робота і чого кожен від неї чекає.' },
  { t: 'Контакт', d: 'Перші 2–3 зустрічі — будуємо довіру. Підліток бачить, що тут його чують і поважають.' },
  { t: 'Регулярна робота', d: 'Розмова на рівних, схемотерапія, робочі зошити. Теми задає підліток — я допомагаю в них розібратися.' },
  { t: 'Динаміка', d: 'Близько 10 зустрічей — і видно зміни: більше розуміння себе, менше конфліктів, повертається мотивація.' },
];

const REQUESTS = [
  'зникла мотивація: «нічого не хоче»',
  'конфлікти з батьками, сварки вдома',
  'стосунки з однолітками, самотність',
  'особисті кордони: казати «ні» і чути «ні»',
  'тривожність, стрес, емоційні гойдалки',
  'впевненість у собі і самооцінка',
  'адаптація до нової школи чи країни',
  'підтримка після складних подій',
];

export default function TeensPage() {
  return (
    <>
      <Header />
      <RevealManager />

      <div className="group-hero on-dark">
        <div className="wrap group-hero-grid">
          <div>
            <span className="badge">Підліткам 11–18 років</span>
            <h1>
              Розмова на рівних — <em>і простір, де тебе чують</em>
            </h1>
            <p className="lead">
              Підлітку важливо, щоб його слухали як дорослого. Допомагаю розібратися в собі, у
              стосунках з однолітками й батьками, у тому, чого хочеться далі. А батькам
              пояснюю, як підтримувати дбайливо і з повагою до кордонів.
            </p>
            <div className="hero-actions">
              <a className="btn btn-orange" href="#contact">
                Записатися <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="gfacts" data-reveal>
            <div className="fact"><b>50 хв</b><span>одна зустріч</span></div>
            <div className="fact"><b>1 на 1</b><span>формат роботи</span></div>
            <div className="fact"><b>онлайн</b><span>або Київ</span></div>
            <div className="fact"><b>2–3</b><span>зустрічі на контакт</span></div>
            <div className="fact"><b>~10</b><span>зустрічей — динаміка</span></div>
            <div className="fact"><b>1 700 ₴</b><span>за зустріч</span></div>
          </div>
        </div>
      </div>

      <section className="steps">
        <div className="wrap">
          <div className="kicker" data-reveal>Як проходить робота</div>
          <h2 data-reveal>Крок за кроком</h2>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div className="step-col" key={s.t} data-reveal>
                <span className="sn">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <p className="muted" data-reveal style={{ marginTop: 26 }}>
            Зустріч триває 50 хвилин, вартість — 1 700 ₴. Розклад надішлю у відповідь на заявку.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="kicker" data-reveal>Запити</div>
          <h2 data-reveal>З чим приходять підлітки</h2>
          <div className="req-chips" data-reveal>
            {REQUESTS.map((r) => (
              <span className="req-chip" key={r} style={{ cursor: 'default' }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultTopic="Терапія для дитини" />
      <MobileCta />
      <Footer />
    </>
  );
}
