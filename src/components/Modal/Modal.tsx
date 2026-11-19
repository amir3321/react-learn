import styles from '@/components/Modal/Modal.module.css';
import {  type ComponentProps, type MouseEvent, type ReactNode, type RefObject } from 'react';
import IconButton from '../IconButton/IconButton';
import MingcuteCloseLine from '@/icons/MingcuteCloseLine';
import clsx from 'clsx';


type Props=ComponentProps<'dialog'> &{
  ref:RefObject<HTMLDialogElement | null >;
  contentClassName?:string;
  heading:string;
}
//از روی ...otherProps برش میداریم بعد از اجرای ایونت خودمون دوباره داش میزنیم مثل کلیک کاربر
export default function Modal({
  ref,contentClassName,className,heading,children,onClick,...otherProps
}:Props): ReactNode {
  
const handleDialogClick=(e:MouseEvent<HTMLDialogElement>):void=>{
  if(e.target===e.currentTarget){
     ref.current?.close();
  }else{
    onClick?.(e);
  }

  
}

 
   const handleCloseButtonClick=():void=>{
    ref.current?.close();
  }
  return (
    <>
     
      <dialog ref={ref} onClick={handleDialogClick}
       className={clsx( styles['modal'],className)} 
      {...otherProps}>
        <header>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.action}>
          <IconButton onClick={handleCloseButtonClick}>
            <MingcuteCloseLine/>
          </IconButton>
          </div>
        </header>
        <main className={contentClassName}>{children}</main>
      </dialog>
      </>
    
  );
}