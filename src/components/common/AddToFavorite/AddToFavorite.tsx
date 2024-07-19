'use client';

import IconButton from '../IconButton/IconButton';
import Favorite from '@/assets//icons/favorite.svg';
import { Tooltip } from 'react-tooltip';

interface Props {
  articleId: number;
}

export default function AddToFavorite({ articleId }: Props) {
  return (
    <>
      <IconButton type="button" data-tooltip-id={`favorite-tooltip${articleId}`}>
        <Favorite />
      </IconButton>
      <Tooltip id={`favorite-tooltip${articleId}`} content="Додати в обране" />
    </>
  );
}
