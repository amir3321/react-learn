import {type  ReactNode,useState } from "react";
import "./App.css";
//import type MouseEvent from "react";

 export default function App() : ReactNode {
const [count,setCount]=useState(0);

// const handleClick=(e:MouseEvent<HTMLButtonElement>)=>{
//   setCount(count+1);
 
// }
const handleClick=():void=>{
  setCount(count+1);
 
}

// const handelClick=(x:number):void=>{
// console.log(`hello ${x}`)
// }

  return(
   <>
   <div>{count}</div>
      <button className="btnSubmit" onClick={handleClick}>Click Me</button>
 

     </>
  )
}


