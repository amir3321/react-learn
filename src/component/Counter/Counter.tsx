import { useState, type ReactNode } from "react";

type Props ={
    title:string;
    baseCount :number;
}
export function Counter(props:Props): ReactNode{
    
    const {title,baseCount}=props;


  const [count,setCount]=useState(0)

const clickHandler=():void=>{
  setCount(old=>old+1);
}
  return(
    <div className="counter">
      <div className="title">{title}</div>
      <div className="count">{count+baseCount}</div>
      <button className="increment" onClick={clickHandler}>Increment</button>
    </div>
  )

}