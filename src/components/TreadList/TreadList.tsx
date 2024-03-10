import Image from 'next/image';
import s from './style.module.scss';
import Link from 'next/link';
import AddToFavorite from '../common/AddToFavorite/AddToFavorite';
import CommentsButton from '../common/CommentsButton/CommentsButton';

export default function TreadList() {
  return (
    <section className={s.treadList}>
      <article className={s.item}>
        <div className={s.itemTop}>
          <Link href="author/1" className={s.author}>
            <div className={s.authorAvatar}>
              <Image src="/test/avatar.png" alt="autor name" width={24} height={24} />
            </div>
            <div className={s.authorName}>Author name</div>
          </Link>
          <div className={s.itemDate}>Cіч. 24, 2024</div>
        </div>
        <Link href="/article/1" className={s.itemMain}>
          <div className={s.itemLeft}>
            <div className={s.itemTitle}>
              Things You Don’t Know About Next.js Things You Don’t Know About Next.js Things You Don’t Know About
              Next.js Things You Don’t Know About Next.js
            </div>
            <div className={s.itemShor}>
              NextJS 14 isn’t just an update, it’s a refocus on developer experience and speed. Overall, NextJS 14
              promises a faster, more enjoyable development journey for React developers. Whether you’re starting fresh
              or upgrading an existing project, it’s definitely worth checking out. Today I am going to tell you about
              some…
            </div>
          </div>

          <div className={s.itemImg}>
            <Image src="/test/arc.jpg" alt="arctile title" width={112} height={112} />
          </div>
        </Link>
        <div className={s.itemBot}>
          <div className={s.itemBotLeft}>
            <Link href="/category/slug" className={s.tag}>
              next js
            </Link>
            <div className={s.itemDate}>6 хв читати</div>
          </div>
          <div className={s.itemRight}>
            <CommentsButton articleId={1} count={2} />
            <AddToFavorite articleId={1} />
          </div>
        </div>
      </article>
      <article className={s.item}>
        <div className={s.itemTop}>
          <Link href="author/1" className={s.author}>
            <div className={s.authorAvatar}>
              <Image src="/test/avatar.png" alt="autor name" width={24} height={24} />
            </div>
            <div className={s.authorName}>Author name</div>
          </Link>
          <div className={s.itemDate}>Cіч. 24, 2024</div>
        </div>
        <Link href="/article/1" className={s.itemMain}>
          <div className={s.itemLeft}>
            <div className={s.itemTitle}>
              Things You Don’t Know About Next.js Things You Don’t Know About Next.js Things You Don’t Know About
              Next.js Things You Don’t Know About Next.js
            </div>
            <div className={s.itemShor}>
              NextJS 14 isn’t just an update, it’s a refocus on developer experience and speed. Overall, NextJS 14
              promises a faster, more enjoyable development journey for React developers. Whether you’re starting fresh
              or upgrading an existing project, it’s definitely worth checking out. Today I am going to tell you about
              some…
            </div>
          </div>

          <div className={s.itemImg}>
            <Image src="/test/arc.jpg" alt="arctile title" width={112} height={112} />
          </div>
        </Link>
        <div className={s.itemBot}>
          <div className={s.itemBotLeft}>
            <Link href="/category/slug" className={s.tag}>
              next js
            </Link>
            <div className={s.itemDate}>6 хв читати</div>
          </div>
          <div className={s.itemRight}>
            <CommentsButton articleId={1} count={2} />
            <AddToFavorite articleId={1} />
          </div>
        </div>
      </article>
      <article className={s.item}>
        <div className={s.itemTop}>
          <Link href="author/1" className={s.author}>
            <div className={s.authorAvatar}>
              <Image src="/test/avatar.png" alt="autor name" width={24} height={24} />
            </div>
            <div className={s.authorName}>Author name</div>
          </Link>
          <div className={s.itemDate}>Cіч. 24, 2024</div>
        </div>
        <Link href="/article/1" className={s.itemMain}>
          <div className={s.itemLeft}>
            <div className={s.itemTitle}>
              Things You Don’t Know About Next.js Things You Don’t Know About Next.js Things You Don’t Know About
              Next.js Things You Don’t Know About Next.js
            </div>
            <div className={s.itemShor}>
              NextJS 14 isn’t just an update, it’s a refocus on developer experience and speed. Overall, NextJS 14
              promises a faster, more enjoyable development journey for React developers. Whether you’re starting fresh
              or upgrading an existing project, it’s definitely worth checking out. Today I am going to tell you about
              some…
            </div>
          </div>

          <div className={s.itemImg}>
            <Image src="/test/arc.jpg" alt="arctile title" width={112} height={112} />
          </div>
        </Link>
        <div className={s.itemBot}>
          <div className={s.itemBotLeft}>
            <Link href="/category/slug" className={s.tag}>
              next js
            </Link>
            <div className={s.itemDate}>6 хв читати</div>
          </div>
          <div className={s.itemRight}>
            <CommentsButton articleId={1} count={2} />
            <AddToFavorite articleId={1} />
          </div>
        </div>
      </article>
    </section>
  );
}
