import Board from "@/components/Board/Board";

import styles from "@/pages/BoardPage/BoardPage.module.css";
import BoardProvider from "@/providers/BoardProvider";

import { type ReactNode } from "react";
// import { useParams } from 'react-router';

export const BoardPage = (): ReactNode => {
  return (
    <div className={styles["board-page"]}>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
};
