import { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './style.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function IconButton({ children, ...rest }: Props) {
  return (
    <button className={s.btn} {...rest}>
      {children}
    </button>
  );
}
