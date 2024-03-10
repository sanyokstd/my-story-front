import { ReactNode } from 'react';
import Header from '../Header/Header';
import s from './style.module.scss';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
