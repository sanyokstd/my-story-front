'use client';

import Link from 'next/link';
import s from './style.module.scss';
import Button from '../common/Button/Button';
import useScrollInfo from './useScrollInfo';

export default function Header() {
  const translateY = useScrollInfo();

  return (
    <header className={`${s.header}`} style={{ transform: `translateY(${translateY}px)` }}>
      <div className="wrap">
        <div className={s.headerWrap}>
          <Link href="/" className={s.logo}>
            Logo
          </Link>
          <div className={s.headerRight}>
            <nav className={s.headerMenu}>
              <ul>
                <li>
                  <Link href="/categories">Категорії</Link>
                </li>
                <li>
                  <Link href="/authors">Автори</Link>
                </li>
              </ul>
            </nav>
            <Button>Стати автором</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
