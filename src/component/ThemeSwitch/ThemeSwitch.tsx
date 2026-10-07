import {  type ReactNode } from "react";
import type { Theme } from "@/App";

type props={
    theme:Theme;
    //setTheme: React.Dispatch<React.SetStateAction<Theme>>;//(value:Theme)=>void;
    toggleTheme:()=>void;
    }
export default function ThemeSwitch({theme,toggleTheme}:props): ReactNode {
 

  const handleButtonClick = (): void => {
    toggleTheme();
  };

  return (
    <div>
      <div>{theme}</div>
      <button onClick={handleButtonClick}>Change Theme</button>
    </div>
  );
}
