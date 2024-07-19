import Link from 'next/link';
import s from './styles.module.scss';

const Recommendations = () => {
  return (
    <div className={s.recommendations}>
      <h2 className={s.title}>Рекомендовані теми</h2>
      <div className={s.wrap}>
        <Link href="/category/1" className={s.item}>
          Тема 1
        </Link>
        <Link href="/category/2" className={s.item}>
          Тема 2
        </Link>
        <Link href="/category/3" className={s.item}>
          Тема 3
        </Link>
        <Link href="/category/4" className={s.item}>
          Тема 4
        </Link>
      </div>
      <Link href="/category" className="link-underline">
        Переглянути всі
      </Link>
    </div>
  );
};

export default Recommendations;
