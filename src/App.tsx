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
      <Counter theme={theme} title="counter 1" baseCount={10} />
      <Counter theme={theme} title="counter 2" baseCount={20} />
    </div>
  );
}
