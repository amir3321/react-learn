import styles from './NotFoundPage.module.css';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

export const NotFoundPage = (): ReactNode => {
  return (
    <>
      <div className={styles['not-found-page']}>
        <h1>404 | Page Not Found</h1>
        <Link to="/">Go To Home Page</Link>
      </div>
    </>
  );
}