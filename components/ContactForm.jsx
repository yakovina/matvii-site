'use client';

import { useState } from 'react';
import { FORM_EMAIL, IG_DIRECT, SERVICES } from '../lib/site';

export default function ContactForm({ defaultTopic }) {
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.target).entries());
    // Якщо батьки проходили тест — додаємо його результат до заявки.
    try {
      const quiz = JSON.parse(localStorage.getItem('quizResult') || 'null');
      if (quiz) {
        data['Результат тесту'] = `вік: ${quiz.age}; ${quiz.level}; сфера: ${quiz.area}; бали: ${quiz.score}`;
        if (quiz.details) data['Відповіді тесту'] = quiz.details;
      }
    } catch {}
    try {
      if (FORM_EMAIL.includes('REPLACE_ME')) throw new Error('form not configured');
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Заявка з сайту: ${data['Запит']}` }),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('ok');
      e.target.reset();
    } catch {
      setStatus('err');
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} data-reveal>
      <div>
        <label htmlFor="f-name">Ваше ім'я</label>
        <input id="f-name" name="Ім'я" type="text" required placeholder="Як до вас звертатися" />
      </div>
      <div>
        <label htmlFor="f-contact">Як з вами зв'язатися</label>
        <input id="f-contact" name="Контакт" type="text" required placeholder="Телефон, Telegram або email" />
      </div>
      <div>
        <label htmlFor="f-topic">Що вас цікавить</label>
        <select id="f-topic" name="Запит" defaultValue={defaultTopic ?? SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="f-msg">Кілька слів про ваш запит</label>
        <textarea id="f-msg" name="Повідомлення" placeholder="Вік дитини і що вас турбує (необов'язково)" />
      </div>
      <button className="btn btn-orange" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Надсилаю…' : 'Надіслати заявку'}
      </button>
      {status === 'ok' && (
        <div className="form-status ok">Дякую! Заявку надіслано — я зв'яжуся з вами найближчим часом.</div>
      )}
      {status === 'err' && (
        <div className="form-status err">
          Не вдалося надіслати форму. Напишіть, будь ласка, напряму в{' '}
          <a href={IG_DIRECT} target="_blank" rel="noopener noreferrer"><b>Direct Instagram</b></a> — або спробуйте ще раз.
        </div>
      )}
    </form>
  );
}
