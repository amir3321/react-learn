import styles from '@/components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import { useId, type ComponentProps, type ReactNode } from 'react';

type Props=ComponentProps<'input'> &{
  label:string;
}
export default function TextInput({className ,label,...otherProps}:Props): ReactNode {
  const id=useId();
  return (
   
      <div className={clsx( styles['text-input'],className)}>
        <label htmlFor={id}>{label}</label>
        <input  id={id}{...otherProps}/>
       

      </div>
  
  );
}