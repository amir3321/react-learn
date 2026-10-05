import {type  ReactNode,useState } from "react";
import "./App.css";

 export default function App() : ReactNode {

  return(
   <div className="app">
   <Counter/>
   <Counter/>

  </div>
  )
}

export function Counter(): ReactNode{
  const [count,setCount]=useState(0)
const clickHandler=():void=>{
  setCount(old=>old+1);
}
  return(
    <div className="counter">
      <div className="title">Title</div>
      <div className="count">{count}</div>
      <button className="increment" onClick={clickHandler}>Increment</button>
    </div>
  )

}

