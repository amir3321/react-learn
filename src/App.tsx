import { type ReactNode,useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter/Counter";
import ThemeSwitch from "./component/ThemeSwitch/ThemeSwitch";

export type Theme = "dark" | "light";

export default function App(): ReactNode {
   const [theme, setTheme] = useState<Theme>("light");
  return (
    <div className="app">
      <ThemeSwitch setTheme={setTheme} />
      <Counter title="counter 1" baseCount={10} />
      <Counter title="counter 2" baseCount={20} />
    </div>
  );
}
