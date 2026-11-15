import styles from '@/components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import { useId, type ComponentProps, type ReactNode } from 'react';

   

type Props=ComponentProps<'input'> &{
  label:string;
  error?:string|null;
  }
export default function TextInput({error,className ,label,...otherProps}:Props): ReactNode {
  const id=useId();
  return (
   
      <div className={clsx( styles['text-input'], !!error && styles.error ,className)}>
        <label htmlFor={id}>{label}</label>
        <input  id={id}{...otherProps}/>
        <span className={styles.error}>{error}</span>
       

      </div>
  
  );
}