import  Board  from '@/components/Board/Board';
import { CounterContext } from '@/context/counter-context';
import styles from '@/pages/BoardPage/BoardPage.module.css';
import { useState, type ReactNode } from 'react';
// import { useParams } from 'react-router';

export const BoardPage = (): ReactNode => {
   const [count,setCount] =useState<number>(0);

   const increment=():void=>{
    setCount(old=>old+1);
   }
   
   const decrement=():void=>{
    setCount(old=>old-1);

   }
   
   const reset=():void=>{
    setCount(0);

   }
  // const {id}= useParams();

  return (
    <>
      <div className={styles['board-page']}>
        <CounterContext value={{count,increment,decrement,reset}}>
       <Board/>
       </CounterContext>
      </div>
    </>
  );
}