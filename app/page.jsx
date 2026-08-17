import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RevealManager from '../components/RevealManager';
import MobileCta from '../components/MobileCta';
import ContactSection from '../components/ContactSection';
import RequestsExplorer from '../components/RequestsExplorer';
import EducationSection from '../components/EducationSection';
import { BASE } from '../lib/site';

export const metadata = {
  title: 'Матвій Іванов — дитячий психолог · Київ, онлайн',
  description:
    'Дитячий психолог у Києві та онлайн. Разові консультації для батьків, сімейні консультації, терапія для дітей 5–10 і підлітків 11–18 років. Запис через сайт.',
  alternates: { canonical: '/' },
};

const PAINS = [
  {
    t: 'Дитина 5–10',
    d: 'Істерики, крик або бійки: у момент злості їй важко зупинитися, а після — пояснити словами, що сталося.',
    href: '/children/',
  },
  {
    t: 'Підліток 11–18',
    d: 'Замикається, огризається або зникає в телефоні. Контакт загубився, і будь-яка розмова ризикує стати сваркою.',
    href: '/teens/',
  },
  {
    t: 'Серед однолітків',
    d: 'Складно знайти друзів, влитися в компанію, витримати відмову, програш чи насмішки.',
    href: '/children/',
  },
  {
    t: 'Уся родина',
    d: 'Правила не працюють, прохання повторюються по десять разів, і напругу вдома відчувають усі.',
    href: '/parents/',
  },
];

const SERVICES_CARDS = [
  {
    n: '№ 1',
    t: 'Разова консультація для батьків',
    d: [
      'Розбираємо вашу ситуацію: що стоїть за поведінкою дитини і як на неї реагувати.',
      'Ви йдете з розумінням причин і простими фразами та інструментами, щоб підтримувати дитину вдома.',
    ],
    who: 'Батькам, які хочуть розібратися самостійно або зробити перший крок',
  },
  {
    n: '№ 2',
    t: 'Перша сімейна консультація',
    d: [
      'Зустріч-знайомство з батьками й дитиною, що створює атмосферу довіри й безпеки.',
      'Дитина знайомиться зі мною і розуміє, хто такий психолог. Ми обговорюємо, як виглядатиме взаємодія і які інструменти я використовую.',
    ],
    who: 'Родинам перед початком регулярної роботи',
  },
  {
    n: '№ 3',
    t: 'Терапія для дитини',
    d: [
      'Регулярні індивідуальні зустрічі. Перші 2–3 консультації формують контакт і напрям роботи.',
      'Ідеальний формат — близько 10 зустрічей: дитина починає краще розуміти свої емоційні стани і повертати контроль у власні руки.',
    ],
    who: 'Дітям 5–10 і підліткам 11–18 років',
    feature: true,
  },
];

const STEPS = [
  { t: 'Заявка', d: 'Залишаєте заявку на сайті або пишете в Direct — я відповідаю особисто.' },
  { t: 'Знайомство', d: 'Коротка розмова про ваш запит, вік дитини та її складнощі — до 30 хвилин, безкоштовно.' },
  { t: 'Контакт і напрям', d: 'Перші 2–3 зустрічі — формуємо довіру з дитиною і визначаємо, над чим працюємо.' },
  { t: 'Динаміка', d: 'Близько 10 зустрічей — і видно результати. Ви отримуєте зворотний зв’язок і інструменти для дому.' },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <RevealManager />

      {/* HERO */}
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-quote">Говорити, а не кричати</div>
            <h1>
              Ваша дитина навчиться розуміти свої емоції — <em>а вдома стане спокійніше</em>
            </h1>
            <p className="lead">
              Дитячий психолог у Києві та онлайн для дітей 5–10 і підлітків 11–18 років. На
              зустрічах — гра і розмова, після них — конкретні фрази й інструменти для батьків.
            </p>
            <div className="hero-chips">
              <Link className="chip chip-link" href="/children/">Діти 5–10 років →</Link>
              <Link className="chip chip-link" href="/teens/">Підлітки 11–18 років →</Link>
              <Link className="chip chip-link" href="/parents/">Батьки →</Link>
              <span className="chip">Онлайн · Київ</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-orange" href="#contact">
                Залишити заявку <span className="arr">→</span>
              </a>
              <Link className="btn btn-outline" href="/group/">
                Групові заняття
              </Link>
            </div>
          </div>
          <div className="portrait-frame">
            <img src={`${BASE}/assets/portrait.jpg`} alt="Матвій — дитячий психолог" />
            <img className="monster hero-monster" src={`${BASE}/assets/monsters/m_orange.png`} alt="Помаранчевий монстрик" />
            <img className="monster hero-monster two" src={`${BASE}/assets/monsters/m_blue.png`} alt="Бірюзовий монстрик" />
            <div className="portrait-cap">
              Матвій Іванов<span>дитячий психолог</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAIN */}
      <section className="pain">
        <div className="wrap">
          <div className="kicker" data-reveal>Знайомо?</div>
          <h2 data-reveal>
            Коли емоціям не вистачає слів — <em>це чути на весь дім</em>
          </h2>
          <div className="pain-grid" data-reveal>
            {PAINS.map((p, i) => (
              <Link className="pain-cell" key={p.t} href={p.href}>
                <span className="num">0{i + 1}</span>
                <b>{p.t}</b>
                <p>{p.d}</p>
                <span className="pain-more">Детальніше →</span>
              </Link>
            ))}
          </div>
          <p className="pain-note" data-reveal>
            <img className="monster" src={`${BASE}/assets/monsters/m_green.png`} alt="Зелений монстрик" style={{ width: 64 }} />
            За криком чи мовчанням завжди щось стоїть. Моя робота — допомогти це почути і
            сказати інакше.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach on-dark">
        <div className="wrap approach-grid">
          <div data-reveal>
            <div className="kicker">Мій підхід</div>
            <h2>Навички, що залишаються на все життя</h2>
            <p className="big">
              Моя мета — щоб дитина <b>розуміла себе</b> і вміла залишатися собою поруч з
              іншими: вдома, у школі, серед друзів.
            </p>
            <p className="big">
              Для цього ми тренуємо навички, які працюватимуть усе життя: говорити про емоції,
              домовлятися, просити допомогу і знаходити вихід зі складних ситуацій — словами.
            </p>
          </div>
          <div data-reveal>
            <div className="tri">
              <div className="tri-row">
                <span className="rn">I</span>
                <div>
                  <h3>Я — як фахівець</h3>
                  <p>Веду процес, підбираю методи під вік і запит дитини.</p>
                </div>
              </div>
              <div className="tri-row">
                <span className="rn">II</span>
                <div>
                  <h3>Дитина — як активний учасник змін</h3>
                  <p>Партнер, який тренує нові навички і бачить власний прогрес.</p>
                </div>
              </div>
              <div className="tri-row">
                <span className="rn">III</span>
                <div>
                  <h3>Батьки — як простір підтримки</h3>
                  <p>Отримують прості фрази й інструменти, щоб підтримувати зміни вдома.</p>
                </div>
              </div>
            </div>
            <p className="tri-note">
              При злагодженій взаємодії цих трьох сторін ми досягаємо максимальних результатів.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <div className="services-head">
            <div data-reveal>
              <div className="kicker">Формати роботи</div>
              <h2>
                Оберіть формат, <em>з якого зручно почати</em>
              </h2>
            </div>
            <p className="lede" data-reveal>
              Не впевнені, який формат ваш? Напишіть у формі кілька слів про ситуацію — я
              підкажу, з чого почати.
            </p>
          </div>
          <div className="svc-grid">
            {SERVICES_CARDS.map((s) => (
              <div className={`svc ${s.feature ? 'feature' : ''}`} key={s.n} data-reveal>
                <span className="sn">{s.n}</span>
                <h3>{s.t}</h3>
                {s.d.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="svc-price">1 700 ₴ · 50 хвилин</div>
                <div className="who">
                  <span>Для кого</span>
                  {s.who}
                </div>
                <a className="svc-link" href="#contact">
                  Записатися <span className="arr">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="steps">
        <div className="wrap">
          <div className="kicker" data-reveal>Як це працює</div>
          <h2 data-reveal>Чотири кроки до перших змін</h2>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div className="step-col" key={s.t} data-reveal>
                <span className="sn">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUESTS */}
      <section id="requests">
        <div className="wrap">
          <div className="kicker" data-reveal>Запити</div>
          <h2 data-reveal>
            З чим до мене приходять <em>найчастіше</em>
          </h2>
          <p className="lede" data-reveal>
            Якщо ви впізнаєте свій запит у цьому списку — я зможу допомогти. Якщо ні, напишіть:
            підкажу, чи це до мене, або порекомендую колег.
          </p>
          <RequestsExplorer />
        </div>
      </section>

      <EducationSection />

      {/* GROUP TEASER */}
      <section className="gteaser on-dark">
        <div className="wrap gteaser-grid">
          <div data-reveal>
            <span className="badge">Старт — початок жовтня · набір відкрито</span>
            <h2>
              Групові заняття для дітей <em>5–8 років</em>
            </h2>
            <p>
              «Говорити, а не кричати» — маленька психологічна група про емоції, дружбу і
              самоконтроль. Через ігри й живе спілкування діти тренують навички, які важко
              «пояснити» вдома словами. Наступна група стартує на початку жовтня.
            </p>
            <div className="monster-row" style={{ marginBottom: 28 }}>
              <img className="monster" src={`${BASE}/assets/monsters/m_orange.png`} alt="Монстрик" />
              <img className="monster" src={`${BASE}/assets/monsters/m_blue.png`} alt="Монстрик" />
              <img className="monster" src={`${BASE}/assets/monsters/m_yellow.png`} alt="Монстрик" />
              <img className="monster" src={`${BASE}/assets/monsters/m_purple.png`} alt="Монстрик" />
              <span className="monster-note">Герої наших занять — монстрики, які теж вчаться дружити</span>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-orange" href="/group/">
                Дізнатися про групу <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <div data-reveal>
            <div className="gteaser-facts">
              <div className="fact"><b>4–5</b><span>дітей у групі</span></div>
              <div className="fact"><b>8</b><span>зустрічей</span></div>
              <div className="fact"><b>50 хв</b><span>одна зустріч</span></div>
              <div className="fact"><b>1×</b><span>на тиждень</span></div>
              <div className="fact"><b>онлайн</b><span>формат</span></div>
              <div className="fact"><b>800 ₴</b><span>за зустріч</span></div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <MobileCta />
      <Footer />
    </>
  );
}
