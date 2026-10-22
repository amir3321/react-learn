import styles from './Board.module.css';
import { useState, type ReactNode } from 'react';
import IconButton  from '../IconButton/IconButton';
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line';
import MingcuteAddLine from '@/icons/MingcuteAddLine';

import { List } from '../List/List';
import type { ListType } from '@/types/list';

export const Board = (): ReactNode => {
 const [todoList,setTodoList] =useState<ListType>({
  id:'1',title:"To Do",items:[
    {id:'1',title:'Setup Backend Project'},
     {id:'2',title:'Setup Backend Project 2'},
      {id:'3',title:'Setup Backend Project 3'}
  ]
 });
  const [doingList,setDoingList] =useState<ListType>({
  id:'1',title:"Doing",items:[
    {id:'1',title:'Setup Backend Project'},
     {id:'2',title:'Setup Backend Project 2'}
    
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
              <List list={todoList}/>
            </li>
              <li>
              <List list={doingList}/>
            </li>
            
              <li>
              <List list={doneList}/>
            </li>
            
            
           </ul>
      </div>
    </>
  );
}