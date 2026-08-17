import ContactForm from './ContactForm';
import AvailableSlots from './AvailableSlots';
import { IG_DIRECT } from '../lib/site';

export default function ContactSection({ defaultTopic }) {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-side" data-reveal>
          <div className="kicker">Контакти</div>
          <h2>Залишити заявку</h2>
          <p>
            Розкажіть кілька слів про дитину і ваш запит — так перша розмова буде
            предметнішою.
          </p>
          <p>Відповідаю сам, зазвичай протягом дня.</p>
          <AvailableSlots />
          <div className="contact-alt">
            Зручніше в месенджері? Напишіть у{' '}
            <a href={IG_DIRECT} target="_blank" rel="noopener noreferrer">
              Direct Instagram @with.matvii
            </a>
          </div>
        </div>
        <ContactForm defaultTopic={defaultTopic} />
      </div>
    </section>
  );
}
