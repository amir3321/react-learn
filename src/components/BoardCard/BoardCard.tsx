import styles from './BoardCard.module.css';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

type BoardColor="gray"|"blue"|"green"|"yellow"|"orange"|"red";

type props={
  id:number;
  title:string;
  description:string;
  color:BoardColor;


}

export const BoardCard = ({id,title,description,color}:props): ReactNode => {
  return (
    <>
      <div className={clsx( styles['board-card'],color)}>
         <div className={styles.cover }></div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.title}>{title}</div>
                  <Link to={`/board/${id}`}>View</Link>
                </div>
                <p className={styles.description}>
                  {description}
                </p>
              </div>
      </div>
    </>
  );
}