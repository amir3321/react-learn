import styles from './ListItem.module.css';
import { type ReactNode } from 'react';
import type { ListItemType } from '@/types/list-item';

type Props={
  listId:string;
  item:ListItemType;
  onClick?:(listId:string,itemId:string)=>void;
}
const ListItem= function ListItem ({listId,item,onClick}:Props): ReactNode  {
  return (
    
      <div className={styles['list-item']} onClick={()=>onClick?.(listId,item.id)}>
       {item.title}
        </div>
    
  );
};

export default ListItem;