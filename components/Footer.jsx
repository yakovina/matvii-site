import { IG_PROFILE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="f-logo">Матвій Іванов · дитячий психолог · Київ</div>
        <div>
          <a href={IG_PROFILE} target="_blank" rel="noopener noreferrer">
            instagram.com/with.matvii
          </a>
        </div>
      </div>
    </footer>
  );
}
