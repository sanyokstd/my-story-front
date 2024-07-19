import { Recommendations, TreadList } from '@/components';
import s from './style.module.scss';

export default function MainPage() {
  return (
    <div className={s.mainPage}>
      <div className={s.flex}>
        <div className={s.left}>
          <TreadList />
        </div>
        <div className={s.right}>
          <Recommendations />
        </div>
      </div>
    </div>
  );
}
