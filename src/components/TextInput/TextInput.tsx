import styles from '@/components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import { useId, useState, type ChangeEvent, type ComponentProps, type ReactNode } from 'react';

   

type Props=ComponentProps<'input'> &{
  label:string;
  error?:string|null;
  }
export default function TextInput({error,className ,label,...otherProps}:Props): ReactNode {
  //const [value,setValue]=useState("");
  
  const id=useId();

//  const handleInputChange=(e:ChangeEvent<HTMLInputElement>):void=>{
//   const newIntValue=parseInt(e.target.value.replaceAll(/\D/g,""));
//   if(isNaN(newIntValue)) return;
//   setValue(newIntValue.toLocaleString());


//  }


  return (
      
      <div className={clsx( styles['text-input'], !!error && styles.error ,className)}>
        <label htmlFor={id}>{label}</label>
        <input   id={id}{...otherProps}/>
        <span className={styles.error}>{error || "\u00A0"}</span>
        {/* &nbsp;=== "\u00A0" for hold height empty tag */}
       

      </div>
  
  );
}