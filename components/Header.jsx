'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

const LINKS = [
  { href: '/#services', label: 'Формати' },
  { href: '/#requests', label: 'Запити' },
  { href: '/#education', label: 'Освіта' },
  { href: '/group/', label: 'Групові заняття' },
  { href: '/#contact', label: 'Контакти' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="logo" href="/">
          Матвій Іванов <b>·</b> дитячий психолог
        </Link>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href="#contact">
          Залишити заявку
        </a>
        <button
          className="burger"
          aria-label="Відкрити меню"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span /><span /><span />
        </button>
      </div>
      {mounted &&
        createPortal(
          <div className={`mobile-menu ${open ? 'open' : ''}`}>
            <button className="mm-close" aria-label="Закрити меню" onClick={close}>
              ✕
            </button>
            <Link href="/" onClick={close}>
              Головна
            </Link>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            ))}
            <a className="mm-cta" href="#contact" onClick={close}>
              Залишити заявку
            </a>
          </div>,
          document.body
        )}
    </header>
  );
}
