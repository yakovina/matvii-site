import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RevealManager from '../../components/RevealManager';
import QuizWidget from '../../components/QuizWidget';

export const metadata = {
  title: 'Тест: чи потрібен вашій дитині психолог',
  description:
    'Короткий тест для батьків із 10 питань: допоможе зорієнтуватися, чи варто звернутися до дитячого психолога. Не діагностика — орієнтир.',
  alternates: { canonical: '/quiz/' },
  robots: { index: true, follow: true },
};

export default function QuizPage() {
  return (
    <>
      <Header />
      <RevealManager />
      <section className="quiz-section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="kicker center" data-reveal>Тест для батьків</div>
          <h2 data-reveal style={{ textAlign: 'center' }}>
            Чи потрібен вашій дитині <em>психолог?</em>
          </h2>
          <QuizWidget />
        </div>
      </section>
      <Footer />
    </>
  );
}
