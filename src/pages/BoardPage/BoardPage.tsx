// import Board from "@/components/Board/Board";
import Board from "@/components/Board/Board";
import Button from "@/components/Button/Button";
import CreateListItemModal from "@/components/CreateListItemModal/CreateListItemModal";


import styles from "@/pages/BoardPage/BoardPage.module.css";
import ActiveItemProvider from "@/providers/ActiveItemProvider";
import BoardProvider from "@/providers/BoardProvider";

import {  type ReactNode } from "react";
// import { useParams } from 'react-router';

export const BoardPage = (): ReactNode => {
  
  return (
    <BoardProvider>
      <ActiveItemProvider>
        <div className={styles["board-page"]}>
    
         
           
         <Board />
        </div>
      </ActiveItemProvider>
    </BoardProvider>
  );
};
