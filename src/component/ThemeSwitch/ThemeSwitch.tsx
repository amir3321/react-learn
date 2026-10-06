import {  type ReactNode } from "react";
import type { Theme } from "@/App";

type props={
    theme:Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;//(value:Theme)=>void;
    }
export default function ThemeSwitch({theme,setTheme}:props): ReactNode {
 

  const handleButtonClick = (): void => {
    setTheme((old) => (old == "light" ? "dark" : "light"));
  };

  return (
    <div>
      <div>{theme}</div>
      <button onClick={handleButtonClick}>Change Theme</button>
    </div>
  );
}
