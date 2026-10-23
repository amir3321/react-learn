import styles from './ListItem.module.css';
import { memo, type ReactNode } from 'react';
import type { ListItemType } from '@/types/list-item';

type Props={
  item:ListItemType;
  onClick?:(id:string)=>void;
}
const ListItem=memo( function ListItem ({item,onClick}:Props): ReactNode  {
  return (
    
      <div className={styles['list-item']} onClick={()=>onClick?.(item.id)}>
       {item.title}
        </div>
    
  );
});

export default ListItem;