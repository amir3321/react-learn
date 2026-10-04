import {type  ReactNode,useState } from "react";
import "./App.css";
//import type MouseEvent from "react";


type User={
  username:string;
  password:string;
}


 export default function App() : ReactNode {
const [count,setCount]=useState(0);
const [user,setUser]=useState<Readonly<User>>({
  username:"Amir",
  password:"aaa"
});
// const handleClick=(e:MouseEvent<HTMLButtonElement>)=>{
//   setCount(count+1);
 
// }
// const handleClick=():void=>{
//   setCount(count+1);
 
// }
// const handleClick=():void=>{
//   setCount(x=>x+1);
//   setCount(x=>x+1);
//   setCount(x=>x+1);
 
// }

const handleClick=():void=>{
  setUser({...user,password:"bbb"})
 
}

// const handelClick=(x:number):void=>{
// console.log(`hello ${x}`)
// }

  return(
   <>
   <pre>{JSON.stringify(user,null,2)}</pre>
      <button className="btnSubmit" onClick={handleClick}>Click Me</button>
 

     </>
  )
}


