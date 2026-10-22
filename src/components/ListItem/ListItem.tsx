import styles from './ListItem.module.css';
import type { ReactNode } from 'react';
import type { ListItemType } from '@/types/list-item';

type Props={
  item:ListItemType;
}
export default function ListItem ({item}:Props): ReactNode  {
  return (
    
      <div className={styles['list-item']}>
       {item.title}
        </div>
    
  );
}