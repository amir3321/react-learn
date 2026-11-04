import { ActiveItemContext } from "@/context/active-item-context";
import {  useEffect, useState, type PropsWithChildren, type ReactNode } from "react";

type Props=PropsWithChildren;
export default function ActiveItemProvider({children}:Props):ReactNode{

  const [activeListId,setActiveListId]=useState<string | null>(null);
  const [activeItemId,setActiveItemId]=useState<string | null>(null);



const activate=(listId:string,itemId:string):void=>{
    setActiveListId(listId);
    setActiveItemId(itemId);
}

const  deactivate=():void=>{
    setActiveItemId(null);
    setActiveListId(null);
}

useEffect(()=>{// فقط یکبار موقع اجرای اولیه اجرا میشود و بعد چون هیچ متغیری ندارد دیگر اجرا نمی شود
  const handleKeydown=(e:KeyboardEvent):void=>{
      if(e.code !== "Escape"){return;}
   deactivate();
  };

  document.addEventListener("keydown",handleKeydown);

return ():void=>{document.removeEventListener("keydown",handleKeydown);}

},[])

    return (<ActiveItemContext value={{activeListId,activeItemId,activate,deactivate}}>{children}</ActiveItemContext>)
}