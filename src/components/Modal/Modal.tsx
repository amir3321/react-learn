import styles from '@/components/Modal/Modal.module.css';
import {  type ComponentProps, type ReactNode, type RefObject } from 'react';
import IconButton from '../IconButton/IconButton';
import MingcuteCloseLine from '@/icons/MingcuteCloseLine';
import clsx from 'clsx';


type Props=ComponentProps<'dialog'> &{
  ref:RefObject<HTMLDialogElement | null >;
  heading:string;
}
export default function Modal({ref,className,heading,children,...otherProps}:Props): ReactNode {
  


 
   const handleCloseButtonClick=():void=>{
    ref.current?.close();
  }
  return (
    <>
     
      <dialog ref={ref} className={clsx( styles['modal'],className)} {...otherProps}>
        <header>
          <div className={styles.heading}>{heading}</div>
          <IconButton onClick={handleCloseButtonClick}>
            <MingcuteCloseLine/>
          </IconButton>

        </header>
        <main>
          {children}
        </main>
      </dialog>
      </>
    
  );
}