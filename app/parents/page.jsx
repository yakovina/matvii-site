import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RevealManager from '../../components/RevealManager';
import MobileCta from '../../components/MobileCta';
import ContactSection from '../../components/ContactSection';
import QuizBanner from '../../components/QuizBanner';

export const metadata = {
  title: 'Батькам',
  description:
    'Консультації для батьків у Києві та онлайн: розібратися, що стоїть за поведінкою дитини, і отримати прості інструменти підтримки вдома. Разові та сімейні консультації.',
  alternates: { canonical: '/parents/' },
};

const FORMATS = [
  {
    n: '№ 1',
    t: 'Разова консультація для батьків',
    d: [
      'Ви приходите без дитини. Розбираємо вашу ситуацію: що стоїть за поведінкою і як на неї реагувати.',
      'Йдете з розумінням причин і конкретними фразами та інструментами для дому.',
    ],
    who: 'Коли хочете розібратися самостійно або зробити перший крок',
  },
  {
    n: '№ 2',
    t: 'Перша сімейна консультація',
    d: [
      'Зустріч-знайомство разом з дитиною: безпечна атмосфера, дитина розуміє, хто такий психолог.',
      'Обговорюємо, як виглядатиме подальша робота і які інструменти я використовую.',
    ],
    who: 'Перед початком регулярної роботи з дитиною',
  },
  {
    n: '№ 3',
    t: 'Супровід під час терапії дитини',
    d: [
      'Поки дитина працює зі мною, ви отримуєте зворотний зв\'язок після зустрічей: що тренували і як підтримати вдома.',
      'Батьки — простір підтримки: коли ви розумієте, що відбувається, зміни закріплюються швидше.',
    ],
    who: 'Для батьків дітей, які вже в терапії',
    feature: true,
  },
];

export default function ParentsPage() {
  return (
    <>
      <Header />
      <RevealManager />

      <div className="group-hero on-dark">
        <div className="wrap group-hero-grid">
          <div>
            <span className="badge">Батькам</span>
            <h1>
              Іноді найкраща допомога дитині — <em>почати з себе</em>
            </h1>
            <p className="lead">
              За поведінкою дитини завжди щось стоїть. Я пояснюю простими словами, що саме, і
              даю інструменти, які працюють вдома: як реагувати на істерики, як говорити, щоб
              вас почули, і як підтримати зміни, не тиснучи.
            </p>
            <div className="hero-actions">
              <a className="btn btn-orange" href="#contact">
                Записатися <span className="arr">→</span>
              </a>
            </div>
          </div>
          <div className="gfacts" data-reveal>
            <div className="fact"><b>50 хв</b><span>одна зустріч</span></div>
            <div className="fact"><b>онлайн</b><span>або Київ</span></div>
            <div className="fact"><b>1</b><span>зустрічі часто достатньо</span></div>
            <div className="fact"><b>1 700 ₴</b><span>за зустріч</span></div>
            <div className="fact"><b>прості</b><span>фрази й інструменти</span></div>
            <div className="fact"><b>для вас</b><span>і вашої дитини</span></div>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="kicker" data-reveal>Формати</div>
          <h2 data-reveal>Як я працюю з батьками</h2>
          <div className="svc-grid" style={{ marginTop: 40 }}>
            {FORMATS.map((s) => (
              <div className={`svc ${s.feature ? 'feature' : ''}`} key={s.n} data-reveal>
                <span className="sn">{s.n}</span>
                <h3>{s.t}</h3>
                {s.d.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="who">
                  <span>Коли підходить</span>
                  {s.who}
                </div>
                <a className="svc-link" href="#contact">
                  Записатися <span className="arr">→</span>
                </a>
              </div>
            ))}
          </div>
          <p className="muted" data-reveal style={{ marginTop: 26 }}>
            Зустріч триває 50 хвилин, вартість — 1 700 ₴. Розклад надішлю у відповідь на заявку.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <QuizBanner />
        </div>
      </section>

      <ContactSection defaultTopic="Разова консультація для батьків" />
      <MobileCta />
      <Footer />
    </>
  );
}
