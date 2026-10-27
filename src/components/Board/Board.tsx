import styles from './Board.module.css';
import { useCallback, useMemo, useState, type ReactNode } from 'react';
import IconButton  from '../IconButton/IconButton';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';
import MingcuteAddLine from '@/icons/MingcuteAddLine';

import  List  from '../List/List';
import type { ListType } from '@/types/list';
import { listsData } from '@/data/lists-data';
import { Button } from '../Button/Button';
//import type { ListItemType } from '@/types/list-item';

// function cb (a:ListItemType,b:ListItemType):number{
//   return a.title.localeCompare(b.title);
  
// }
export default function Board (): ReactNode {
  const [lists,setLists]=useState<ListType[]>(listsData)
  const [activeListId,setActiveListId]=useState<string | null>(null);
  const [activeItemId,setActiveItemId]=useState<string | null>(null);


//  const handleEditButtonClick=():void=>{
//   setTodoList((old)=>{
//     const clone=[...old.items];
//     clone.splice(1,1);
//     return {...old,items:clone};

//   })

//  }

//  const handleAddButtonClick=():void=>{
//   setDoingList((old)=>{
//     const clone=[...old.items];
//     clone.splice(1,1);
//     return {...old,items:clone}

//   })
//  }
//  const sortedToDoList=useMemo(()=>{ 
//       return {...todoList,items:[...todoList.items].sort(cb)}
//     },[todoList])
//     const sortedDoingList=useMemo(()=>{ 
//       return {...doingList,items:[...doingList.items].sort(cb)}
//     },[doingList])

//     const sortedDoneList=useMemo(()=>{ 
//       return {...doneList,items:[...doneList.items].sort(cb)}
//     },[doneList])

// const handleListItemClick=useCallback((id:string):void=>{
//   console.log('clicked item...');
//   setlists((old)=>{
//     const clone = {...old[0],items:[...old[0].items].filter(item=>item.id!==id)};
//     return [clone,old[1],old[2]];
//   })},[]);

const handleListItemClick=(listId:string,itemId:string):void=>{
  setActiveListId(listId);
 setActiveItemId(itemId);
 
 console.warn('test1');

};
const handleRemoveButtonClick=():void=>{
  setLists(
   
    (old)=>{
       try{
      const activeListIndex=old.findIndex(list=>list.id===activeListId);
      if(activeListIndex==-1){
        console.error('can not find desired list.');
        return old;
      }
      const clone=[...old];
      const activeList={...clone[activeListIndex]};

        const activeItemIndex=activeList.items.findIndex(item=>item.id===activeItemId);
         if(activeItemIndex==-1){
        console.error('can not find desired item.');
        return old;
      }
      activeList.items.splice(activeItemIndex,1);

      clone[activeListIndex]=activeList;
      return clone;
    }finally{
      setActiveItemId(null);
      setActiveListId(null);
    }


    }
  )

}

const handleMoveButtonClick=(destinationListId:string):void=>{
  setLists(
   
    (old)=>{
       try{
      const activeListIndex=old.findIndex(list=>list.id===activeListId);
      const destinationListIndex=old.findIndex(list=>list.id===destinationListId);
      
      
      
      
      if(activeListIndex===-1 || destinationListIndex===-1){
        console.error('can not find desired list.');
        return old;
      }
      const clone=[...old];
      const activeList={...clone[activeListIndex],items:[...clone[activeListIndex].items]};
      const destinationList={...clone[destinationListIndex],items:[...clone[destinationListIndex].items]};

        const activeItemIndex=activeList.items.findIndex(item=>item.id===activeItemId);
         if(activeItemIndex==-1){
        console.error('can not find desired item.');
        return old;
      }
     const [activeItem]= activeList.items.splice(activeItemIndex,1);
     destinationList.items.push(activeItem);

      clone[activeListIndex]=activeList;
      clone[destinationListIndex]=destinationList;
      return clone;
    }finally{
      setActiveItemId(null);
      setActiveListId(null);
    }


    }
  )

}







  return (
    
      <div className={styles['board']}>
         <div className={styles.toolbar}>
        <div className={styles.title}>🎫BoardTitle</div>
        <div className={styles.actions}>
        
         {         
          activeListId !== null && (
            <div className={styles.spacer}>
         { lists.filter((list)=>list.id !== activeListId).map((list)=>(
            <Button key={list.id} onClick={()=>handleMoveButtonClick(list.id)}>{list.title}</Button>
          ))}
          <Button onClick={handleRemoveButtonClick}>Remove</Button>
           </div>
          )}
         
     
          <IconButton >
            <MingcuteEdit2Line/>
          </IconButton>
          <IconButton >
            <MingcuteAddLine/>
          </IconButton>
        </div>
        </div>
           <ul className={styles.lists}>
            {
              lists.map((list)=>
                 (
            <li key={list.id}>
              <List list={list} onClick={handleListItemClick}  />
            </li>

              ))
            }

           
            
           </ul>
      </div>
    
  );
}