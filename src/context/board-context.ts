import type { ListAction } from "@/reducers/list-reducer";
import type { ListType } from "@/types/list"
// import type { ListItemType } from "@/types/list-item";
import { createContext, type ActionDispatch } from "react";

type ContextVlaue={
    lists:ListType[];
    dispatchLists:ActionDispatch<[action:ListAction]>

    // create:(listId:string,item:ListItemType)=>void;
    // remove:(listId: string, itemId: string)=>void;
    // move:(fromListId:string,itemId:string, toListId:string)=>void;
}
export const BoardContext=createContext<ContextVlaue>({
    lists:[],
    dispatchLists:()=>{}
    // create:()=>{},
    // remove:()=>{},
    // move:()=>{}
})