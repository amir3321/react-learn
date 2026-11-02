import styles from './ListItem.module.css';
import { type ReactNode,type MouseEvent, use } from 'react';
import type { ListItemType } from '@/types/list-item';
import IconButton from '../IconButton/IconButton';
import MingcuteDelete2Line from '@/icons/MingcuteDelete2Line';
import { BoardContext } from '@/context/board-context';


type Props={
  listId:string;
  item:ListItemType;
  onClick?:(listId:string,itemId:string)=>void;
  // onRemove?:(listId:string,itemId:string)=>void;
}
const ListItem= function ListItem ({listId,item,onClick}:Props): ReactNode  {
 const {remove}= use(BoardContext);
  
  const handleRemoveButtonClick=(e:MouseEvent<HTMLButtonElement>):void=>{
    e.stopPropagation();
  
    remove(listId,item.id);

  }
  return (
    
      <div className={styles['list-item']} onClick={()=>onClick?.(listId,item.id)}>
       {item.title}
       <IconButton className={styles['remove-icon']} onClick={handleRemoveButtonClick}>
        <MingcuteDelete2Line/>
       </IconButton>
        </div>
    
  );
};

export default ListItem;