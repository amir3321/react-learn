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
  const [lists,setlists]=useState<ListType[]>(listsData)
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

  return (
    
      <div className={styles['board']}>
         <div className={styles.toolbar}>
        <div className={styles.title}>🎫BoardTitle</div>
        <div className={styles.actions}>
        
         {         
          activeListId !== null && (
            <div className={styles.spacer}>
         { lists.filter((list)=>list.id !== activeListId).map((list,index)=>(
            <Button key={index}>{list.title}</Button>
          ))}
          <Button>Remove</Button>
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