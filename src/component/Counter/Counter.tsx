import { useState, type PropsWithChildren, type ReactNode } from "react";
import type { Theme } from "@/App";

type Props =PropsWithChildren<{
    theme:Theme;
    title:string;
    baseCount :number;
    primary?:boolean;
    //children:ReactNode
}>
export function Counter(props:Props): ReactNode{

    const {title,baseCount,primary}=props;


  const [count,setCount]=useState(0)

const clickHandler=():void=>{
  setCount(old=>old+1);
}
  return(
    <div  className={`counter ${props.theme} ${primary==true ?"true":"false" }`}>
      <div className="title">{title}</div>
      <div className="count">{count+baseCount}</div>
      <button className="increment" onClick={clickHandler}>Increment</button>
      {props.children}
    </div>
  )

}