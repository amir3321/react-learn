import {type  ReactNode } from "react";
import "./App.css";
import { Counter } from "./component/Counter/Counter";

 export default function App() : ReactNode {

  return(
   <div className="app">
   <Counter title="counter 1" baseCount={10}/>
   <Counter title="counter 2" baseCount={20}/>

  </div>
  )
}


