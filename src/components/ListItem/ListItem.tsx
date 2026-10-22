import styles from './ListItem.module.css';
import { memo, type ReactNode } from 'react';
import type { ListItemType } from '@/types/list-item';

type Props={
  item:ListItemType;
}
const ListItem=memo( function ListItem ({item}:Props): ReactNode  {
  return (
    
      <div className={styles['list-item']}>
       {item.title}
        </div>
    
  );
});

export default ListItem;