import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RevealManager from '../../components/RevealManager';
import QuizWidget from '../../components/QuizWidget';
import { SITE_URL } from '../../lib/site';

export const metadata = {
  title: 'Тест: чи потрібен вашій дитині психолог',
  description:
    'Короткий тест для батьків із 12 життєвих ситуацій: допоможе зорієнтуватися, чи варто звернутися до дитячого психолога, і що спробувати вдома вже сьогодні.',
  alternates: { canonical: '/quiz/' },
  robots: { index: true, follow: true },
};

const quizJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Чи потрібен вашій дитині психолог? Тест для батьків',
  url: `${SITE_URL}/quiz/`,
  abstract:
    'Безкоштовний онлайн-тест для батьків дітей 5–18 років: 12 щоденних ситуацій допомагають зорієнтуватися, де звичайні вікові зміни, а де привід звернутися до дитячого психолога.',
  audience: { '@type': 'Audience', audienceType: 'батьки дітей 5–18 років' },
  numberOfQuestions: 12,
  inLanguage: 'uk',
  provider: {
    '@type': 'Person',
    name: 'Матвій Іванов',
    jobTitle: 'Дитячий психолог',
    url: SITE_URL,
  },
};

export default function QuizPage() {
  return (
    <>
      <Header />
      <RevealManager />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }}
      />
      <section className="quiz-section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="kicker center" data-reveal>Тест для батьків</div>
          <h2 data-reveal style={{ textAlign: 'center' }}>
            Чи потрібен вашій дитині <em>психолог?</em>
          </h2>
          <QuizWidget />
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="kicker" data-reveal>Про цей тест</div>
          <h2 data-reveal>Як він працює</h2>
          <div data-reveal>
            <p className="muted" style={{ marginBottom: 14 }}>
              Тест склав дитячий психолог Матвій Іванов для батьків дітей від 5 до 18 років.
              Це 12 упізнаваних ситуацій з щоденного життя родини — істерики й вибухи емоцій,
              стосунки з однолітками, домашні правила, реакції на стресові події. Ви відмічаєте,
              наскільки кожна ситуація схожа на вашу, а формулювання підлаштовуються під вік
              дитини.
            </p>
            <p className="muted" style={{ marginBottom: 14 }}>
              Відповіді непомітно вимірюють чотири сфери: емоції та самоконтроль, дружба і
              однолітки, атмосфера вдома та реакція на стрес. У підсумку ви отримуєте
              персональний розбір: у якій сфері зараз найбільше напруги, одну конкретну пораду,
              яку можна спробувати вдома вже сьогодні, і рекомендацію, з якого формату роботи з
              психологом краще почати — від разової консультації для батьків до групових занять
              для дітей 5–8 років.
            </p>
            <p className="muted">
              Проходження займає близько трьох хвилин. Тест — орієнтир для батьків: психологічний
              висновок може дати лише фахівець на консультації. Якщо ви тривожитесь за дитину —
              довіряйте своєму відчуттю незалежно від результату.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
