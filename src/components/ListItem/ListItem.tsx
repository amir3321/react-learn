import styles from './ListItem.module.css';
import { type ReactNode,type MouseEvent, use } from 'react';
import type { ListItemType } from '@/types/list-item';
import IconButton from '../IconButton/IconButton';
import MingcuteDelete2Line from '@/icons/MingcuteDelete2Line';
import { BoardContext } from '@/context/board-context';
import { toast } from 'react-toastify';


type Props={
  listIndex:number;
  itemIndex:number;
  item:ListItemType;
  
}
const ListItem= function ListItem ({listIndex,itemIndex,item}:Props): ReactNode  {
 const {dispatchLists}= use(BoardContext);

  const handleRemoveButtonClick=(e:MouseEvent<HTMLButtonElement>):void=>{
    e.stopPropagation();
  dispatchLists({type:'item_removed',listIndex,itemIndex})
    // remove(listId,item.id);
    // deactivate();
    toast.success("Item Removed Successfull.");
  }
  return (
     <div className={ styles['list-item']}>
      {/* <div className={clsx( styles['list-item'],item.id==activeItemId && styles.active)} onClick={handleListItemClick}> */}
       {item.title}
       <IconButton className={styles['remove-icon']} onClick={handleRemoveButtonClick}>
        <MingcuteDelete2Line/>
       </IconButton>
        </div>
    
  );
};

export default ListItem;