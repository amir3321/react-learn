import Board from "@/components/Board/Board";

import styles from "@/pages/BoardPage/BoardPage.module.css";
import CounterProvider from "@/providers/CounterProvider";
import { type ReactNode } from "react";
// import { useParams } from 'react-router';

export const BoardPage = (): ReactNode => {
  return (
    <div className={styles["board-page"]}>
      <CounterProvider>
        <Board />
      </CounterProvider>
    </div>
  );
};
