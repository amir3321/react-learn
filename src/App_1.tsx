import {type  ReactNode,useState } from "react";
import "./App.css";
//import type MouseEvent from "react";


// type User={
//   username:string;
//   password:string;
// }


 export default function App() : ReactNode {

const [numbers,setNumbers]=useState<number[]>([1,2,3,4,5,6,7,8,9,10]);

const handleClick=():void=>{
  // setNumbers((old)=>{
  //   const newNumbers=[...old];
  //   newNumbers.push(11);
  //   return newNumbers;
  // });
  setNumbers(old=>[...old,12])
}


// const [count,setCount]=useState(0);
// const [user,setUser]=useState<Readonly<User>>({
//   username:"Amir",
//   password:"aaa"
// });
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

// const handleClick=():void=>{
//   setUser({...user,password:"bbb"})
 
// }

// const handelClick=(x:number):void=>{
// console.log(`hello ${x}`)
// }

  return(
   <>
   <pre>{JSON.stringify(numbers,null,2)}</pre>
      <button className="btnSubmit" onClick={handleClick}>Click Me</button>
 

     </>
  )
}


