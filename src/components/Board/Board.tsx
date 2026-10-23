import styles from './Board.module.css';
import { useCallback, useMemo, useState, type ReactNode } from 'react';
import IconButton  from '../IconButton/IconButton';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';
import MingcuteAddLine from '@/icons/MingcuteAddLine';

import  List  from '../List/List';
import type { ListType } from '@/types/list';
import { listsData } from '@/data/lists-data';
//import type { ListItemType } from '@/types/list-item';

// function cb (a:ListItemType,b:ListItemType):number{
//   return a.title.localeCompare(b.title);
  
// }
export default function Board (): ReactNode {
  const [lists,setlists]=useState<ListType[]>(listsData)
 


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

const handleListItemClick=useCallback((id:string):void=>{
  console.log('clicked item...');
  setlists((old)=>{
    const clone = {...old[0],items:[...old[0].items].filter(item=>item.id!==id)};
    return [clone,old[1],old[2]];
  });

},[]);

  return (
    <>
      <div className={styles['board']}>
         <div className={styles.toolbar}>
        <div className={styles.title}>🎫BoardTitle</div>
        <div className={styles.actions}>
     
          <IconButton >
            <MingcuteEdit2Line/>
          </IconButton>
          <IconButton >
            <MingcuteAddLine/>
          </IconButton>
        </div>
        </div>
           <ul className={styles.lists}>
            <li>
              <List list={lists[0]} onClick={handleListItemClick}  />
            </li>
              <li>
              <List list={lists[1]}/>
            </li>
            
              <li>
              <List list={lists[2]}/>
            </li>
            
            
           </ul>
      </div>
    </>
  );
}