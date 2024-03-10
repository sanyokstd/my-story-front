'use client';

import CommentsIcon from '@/public/assets/icons/comments.svg';
import IconButton from '../IconButton/IconButton';
import { Tooltip } from 'react-tooltip';
import Link from 'next/link';
import s from './style.module.scss';

interface Props {
  articleId: number;
  count: number;
}

export default function CommentsButton({ articleId, count }: Props) {
  return (
    <>
      <Link href={`/arcticle/${articleId}#comments`} className={s.btn} data-tooltip-id={`comments-tooltip${articleId}`}>
        <IconButton>
          <CommentsIcon />
        </IconButton>
        <div className={s.count}>{count}</div>
      </Link>
      <Tooltip id={`comments-tooltip${articleId}`} content="Коментарі" />
    </>
  );
}
