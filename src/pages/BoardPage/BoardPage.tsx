// import Board from "@/components/Board/Board";
import Board from "@/components/Board/Board";
import Button from "@/components/Button/Button";
import CreateListItemModal from "@/components/CreateListItemModal/CreateListItemModal";


import styles from "@/pages/BoardPage/BoardPage.module.css";
import ActiveItemProvider from "@/providers/ActiveItemProvider";
import BoardProvider from "@/providers/BoardProvider";

import { useRef, type ReactNode } from "react";
// import { useParams } from 'react-router';

export const BoardPage = (): ReactNode => {
  const ref =useRef<HTMLDialogElement>(null);

   const handleOpenButtonClick=():void=>{
    ref.current?.showModal();
  }
  
  return (
    <BoardProvider>
      <ActiveItemProvider>
        <div className={styles["board-page"]}>
          
          <Button onClick={handleOpenButtonClick}>open</Button>
          <CreateListItemModal ref={ref} listId="1"/>
           
         <Board />
        </div>
      </ActiveItemProvider>
    </BoardProvider>
  );
};
