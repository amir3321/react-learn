import type { ListType } from "@/types/list"
import { createContext } from "react";

type ContextVlaue={
    lists:ListType[];
    create:()=>void;
    remove:(listId: string, itemId: string)=>void;
    move:(fromListId:string,itemId:string, toListId:string)=>void;
}
export const BoardContext=createContext<ContextVlaue>({
    lists:[],
    create:()=>{},
    remove:()=>{},
    move:()=>{}
})