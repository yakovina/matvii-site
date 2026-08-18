import Link from 'next/link';
import { BASE } from '../lib/site';

export default function QuizBanner() {
  return (
    <Link className="quiz-banner" href="/quiz/" data-reveal>
      <img className="monster" src={`${BASE}/assets/monsters/m_yellow.png`} alt="" style={{ width: 56 }} />
      <span>
        <b>Сумніваєтесь, чи потрібен дитині психолог?</b>
        <span className="sub">Пройдіть короткий тест — 12 ситуацій, близько 3 хвилин</span>
      </span>
      <span className="go">Пройти тест →</span>
    </Link>
  );
}
