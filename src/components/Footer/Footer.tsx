import styles from '@/Components/Footer/Footer.module.css';
import type { ReactNode } from 'react';

export const Footer = (): ReactNode => {

  const year=new Date().getFullYear();
  return (
    <>
      <footer className={styles['footer']}>Copyright &copy; {year} Taka.co.ir</footer>
    </>
  );
}