import { type ReactNode,useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter/Counter";
import ThemeSwitch from "./component/ThemeSwitch/ThemeSwitch";

export type Theme = "dark" | "light";

export default function App(): ReactNode {
   const [theme, setTheme] = useState<Theme>("light");
   const toggleTheme=():void=>{
      setTheme((old) => (old == "light" ? "dark" : "light"));
   }
  return (
    <div className="app">
      <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      <Counter primary theme={theme} title="counter 1" baseCount={10}><p>this is fine </p></Counter> {/*how to use children for props*/}
      <Counter theme={theme} title="counter 2" baseCount={20} children={<p>this is true 555</p>}/>
    </div>
  );
}
