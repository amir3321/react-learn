import styles from './ErrorPage.module.css';
import type { ReactNode } from 'react';
import {  getErrorMessage, type FallbackProps } from "react-error-boundary";

export const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps): ReactNode => {
  return (
    <>
      <div className={styles['error-page']}>
        <h1>Oops! Somthing Went Wrong...</h1>
         <pre style={{ color: "red" }}>{getErrorMessage(error)}</pre>
        <a href="/">Go to Home Page</a>
         <button onClick={resetErrorBoundary}>Retry</button>
      </div>
    </>
  );
}