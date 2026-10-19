import styles from '@/components/Header/Header.module.css';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

export const Header = (): ReactNode => {
  return (
    <>
      <header className={styles.header}>

       <Link className={styles.logo} to={"/"}>
       <img src='/favicon.svg' alt='Canban Logo'/>
       </Link>
       </header>
    </>
  );
}