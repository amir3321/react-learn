import styles from './Board.module.css';
import { useMemo, useState, type ReactNode } from 'react';
import IconButton  from '../IconButton/IconButton';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';
import MingcuteAddLine from '@/icons/MingcuteAddLine';

import  List  from '../List/List';
import type { ListType } from '@/types/list';
import type { ListItemType } from '@/types/list-item';

function cb (a:ListItemType,b:ListItemType):number{
  return a.title.localeCompare(b.title);
  
}
export default function Board (): ReactNode {
 const [todoList,setTodoList] =useState<ListType>({
  id:'1',title:"To Do",items:[
    {id:'1',title:'Setup Backend Project'},
     {id:'2',title:'Do Setup Backend Project 2'},
      {id:'3',title:'Kh Setup Backend Project 3'}
  ]
 });
  const [doingList,setDoingList] =useState<ListType>({
  id:'1',title:"Doing",items:[
    {id:'1',title:'Setup Backend Project'},
     {id:'2',title:'Doing Setup Backend Project 2'}
    
  ]
 });
  const [doneList] =useState<ListType>({
  id:'1',title:"Done",items:[
    {id:'1',title:'Setup Backend Project'},
     
  ]
 });


 const handleEditButtonClick=():void=>{
  setTodoList((old)=>{
    const clone=[...old.items];
    clone.splice(1,1);
    return {...old,items:clone};

  })

 }

 const handleAddButtonClick=():void=>{
  setDoingList((old)=>{
    const clone=[...old.items];
    clone.splice(1,1);
    return {...old,items:clone}

  })
 }
 const sortedToDoList=useMemo(()=>{ 
      return {...todoList,items:[...todoList.items].sort(cb)}
    },[todoList])
    const sortedDoingList=useMemo(()=>{ 
      return {...doingList,items:[...doingList.items].sort(cb)}
    },[doingList])

    const sortedDoneList=useMemo(()=>{ 
      return {...doneList,items:[...doneList.items].sort(cb)}
    },[doneList])



  return (
    <>
      <div className={styles['board']}>
         <div className={styles.toolbar}>
        <div className={styles.title}>🎫BoardTitle</div>
        <div className={styles.actions}>
     
          <IconButton onClick={handleEditButtonClick}>
            <MingcuteEdit2Line/>
          </IconButton>
          <IconButton onClick={handleAddButtonClick}>
            <MingcuteAddLine/>
          </IconButton>
        </div>
        </div>
           <ul className={styles.lists}>
            <li>
              <List list={sortedToDoList}/>
            </li>
              <li>
              <List list={sortedDoingList}/>
            </li>
            
              <li>
              <List list={sortedDoneList}/>
            </li>
            
            
           </ul>
      </div>
    </>
  );
}