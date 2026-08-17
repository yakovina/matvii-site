import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RevealManager from '../../components/RevealManager';
import MobileCta from '../../components/MobileCta';
import ContactSection from '../../components/ContactSection';
import { BASE } from '../../lib/site';

export const metadata = {
  title: 'Дітям 5–10 років',
  description:
    'Дитячий психолог для дітей 5–10 років у Києві та онлайн: терапія через гру, робота з емоціями, агресією, адаптацією і дружбою. Групові заняття для дітей 5–8 років.',
  alternates: { canonical: '/children/' },
};

const STEPS = [
  { t: 'Сімейне знайомство', d: 'Перша зустріч — разом з батьками. Дитина розуміє, хто такий психолог, і виникає довіра, у якій можна працювати.' },
  { t: 'Контакт і напрям', d: 'Перші 2–3 зустрічі — формуємо контакт з дитиною і визначаємо, над чим працюємо.' },
  { t: 'Регулярні зустрічі', d: 'Працюємо через гру, малювання і зрозумілі дитині формати. Онлайн або в Києві.' },
  { t: 'Підтримка вдома', d: 'Після зустрічей ви отримуєте зворотний зв\'язок: що тренували і як підтримати дитину вдома.' },
];

const REQUESTS = [
  'розуміння і вираження емоцій',
  'агресія: як злитися без шкоди',
  'істерики і складнощі із самоконтролем',
  'дружба і взаємодія з іншими дітьми',
  'адаптація до школи, садочка чи нової країни',
  'РДУГ, труднощі з увагою',
  'переживання втрати чи стресових подій',
  'страхи і тривожність',
];

export default function ChildrenPage() {
  return (
    <>
      <Header />
      <RevealManager />

      <div className="group-hero on-dark">
        <div className="wrap group-hero-grid">
          <div>
            <span className="badge">Дітям 5–10 років</span>
            <h1>
              Мова дитини — гра. <em>Нею і працюємо</em>
            </h1>
            <p className="lead">
              У 5–10 років дитині складно годину сидіти й «розмовляти про проблеми». Тому на
              зустрічах ми граємо, малюємо, будуємо світи в пісочниці — і через це дитина
              вчиться розуміти свої емоції та справлятися з ними.
            </p>
            <div className="hero-actions">
              <a className="btn btn-orange" href="#contact">
                Записатися <span className="arr">→</span>
              </a>
              <Link className="btn btn-outline" href="/group/">
                Групові заняття 5–8
              </Link>
            </div>
          </div>
          <div className="monster-row" data-reveal style={{ justifyContent: 'center' }}>
            <img className="monster" src={`${BASE}/assets/monsters/m_orange.png`} alt="Монстрик" style={{ width: 110 }} />
            <img className="monster" src={`${BASE}/assets/monsters/m_green.png`} alt="Монстрик" style={{ width: 110 }} />
            <img className="monster" src={`${BASE}/assets/monsters/m_blue.png`} alt="Монстрик" style={{ width: 110 }} />
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
            Зустріч триває 50 хвилин. Вартість і розклад надішлю у відповідь на заявку.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap gcols">
          <div className="gcard" data-reveal>
            <h3>З чим приходять діти 5–10</h3>
            <ul>
              {REQUESTS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="gcard warn" data-reveal>
            <h3>Групові заняття для дітей 5–8 років</h3>
            <p className="muted" style={{ marginBottom: 14 }}>
              «Говорити, а не кричати» — маленька група про емоції, дружбу і самоконтроль.
              Дружба і вміння програвати найкраще тренуються серед інших дітей.
            </p>
            <ul>
              <li>4–5 дітей у групі, онлайн</li>
              <li>8 зустрічей по 50 хвилин, раз на тиждень</li>
              <li>700 ₴ за зустріч</li>
              <li>безкоштовне знайомство перед стартом</li>
            </ul>
            <p style={{ marginTop: 18 }}>
              <Link className="btn btn-orange" href="/group/">
                Про групу детальніше <span className="arr">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ContactSection defaultTopic="Терапія для дитини" />
      <MobileCta />
      <Footer />
    </>
  );
}
