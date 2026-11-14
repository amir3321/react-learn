import type { ListType } from "@/types/list"
import type { ListItemType } from "@/types/list-item";
import { createContext } from "react";

type ContextVlaue={
    lists:ListType[];
    create:(listId:string,item:ListItemType)=>void;
    remove:(listId: string, itemId: string)=>void;
    move:(fromListId:string,itemId:string, toListId:string)=>void;
}
export const BoardContext=createContext<ContextVlaue>({
    lists:[],
    create:()=>{},
    remove:()=>{},
    move:()=>{}
})