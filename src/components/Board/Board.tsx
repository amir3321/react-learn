import styles from './Board.module.css';
import {   use, type ReactNode } from 'react';
import IconButton  from '../IconButton/IconButton';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';
import MingcuteAddLine from '@/icons/MingcuteAddLine';

import  List  from '../List/List';
// import type { ListType } from '@/types/list';
// import { listsData } from '@/data/lists-data';
import  Button  from '../Button/Button';
import { BoardContext } from '@/context/board-context';
import { ActiveItemContext } from '@/context/active-item-context';

//import type { ListItemType } from '@/types/list-item';

// function cb (a:ListItemType,b:ListItemType):number{
//   return a.title.localeCompare(b.title);
  
// }





export default function Board (): ReactNode {
 const {lists,create,move}= use(BoardContext);//useContext  to  use
const {activeListId,activeItemId,deactivate}=use(ActiveItemContext);





const handleMoveButtonClick=(toListId:string):void=>{
  if(activeListId && activeItemId)
  move(activeListId,activeItemId,toListId);

  deactivate();

};

const handleCreateButtonClick=():void=>{
  create();

}


//  const editIcon=useMemo(()=>  <MingcuteEdit2Line/> ,[])
//   const addIcon=useMemo(()=>  <MingcuteAddLine/> ,[])


  return (
    
      <div className={styles['board']}>
         <div className={styles.toolbar}>
        <div className={styles.title}>🎫BoardTitle </div>
        <div className={styles.actions}>
        
         {         
          activeListId !== null && (
            <div className={styles.spacer}>
         { lists.filter((list)=>list.id !== activeListId).map((list)=>(
            <Button key={list.id} onClick={()=>handleMoveButtonClick(list.id)}>{list.title}</Button>
          ))}
          {/* <Button onClick={handleRemoveButtonClick}>Remove</Button> */}
           </div>
          )}
         
     
          <IconButton >
            <MingcuteEdit2Line/> 
           {/*      {editIcon} */}
          </IconButton>
          <IconButton onClick={handleCreateButtonClick} >
          <MingcuteAddLine/>
          </IconButton>
        </div>
        </div>
           <ul className={styles.lists}>
            {
              lists.map((list)=>
                 (
            <li key={list.id}>
              <List list={list}  />
            </li>

              ))
            }

           
            
           </ul>
      </div>
    
  );
}

