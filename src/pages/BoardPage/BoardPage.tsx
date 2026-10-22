import { Board } from '@/components/Board/Board';
import styles from '@/pages/BoardPage/BoardPage.module.css';
import type { ReactNode } from 'react';
// import { useParams } from 'react-router';

export const BoardPage = (): ReactNode => {
  // const {id}= useParams();

  return (
    <>
      <div className={styles['board-page']}>
       <Board/>
      </div>
    </>
  );
}