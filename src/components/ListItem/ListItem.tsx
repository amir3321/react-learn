import styles from './ListItem.module.css';
import { type ReactNode,type MouseEvent, use } from 'react';
import type { ListItemType } from '@/types/list-item';
import IconButton from '../IconButton/IconButton';
import MingcuteDelete2Line from '@/icons/MingcuteDelete2Line';
import { BoardContext } from '@/context/board-context';
import { ActiveItemContext } from '@/context/active-item-context';
import clsx from 'clsx';


type Props={
  listId:string;
  item:ListItemType;
  // onClick?:(listId:string,itemId:string)=>void;
  // onRemove?:(listId:string,itemId:string)=>void;
}
const ListItem= function ListItem ({listId,item}:Props): ReactNode  {
 const {remove}= use(BoardContext);
 const {activeItemId,activate,deactivate}=use(ActiveItemContext);
  
 
const handleListItemClick=():void=>{
  if(item.id===activeItemId)
    deactivate();
  else
  activate(listId,item.id);
 

};
  const handleRemoveButtonClick=(e:MouseEvent<HTMLButtonElement>):void=>{
    e.stopPropagation();
  
    remove(listId,item.id);
    deactivate();

  }
  return (
    
      <div className={clsx( styles['list-item'],item.id==activeItemId && styles.active)} onClick={handleListItemClick}>
       {item.title}
       <IconButton className={styles['remove-icon']} onClick={handleRemoveButtonClick}>
        <MingcuteDelete2Line/>
       </IconButton>
        </div>
    
  );
};

export default ListItem;