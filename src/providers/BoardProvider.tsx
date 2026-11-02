import { BoardContext } from "@/context/board-context";
import { listsData } from "@/data/lists-data";
import { ListReducer } from "@/reducers/list-reducer";
import type { ListType } from "@/types/list";
import  { useEffect, useReducer, useState, type PropsWithChildren, type ReactNode } from "react";

function save(lists: ListType[]): void {
  localStorage.setItem("lists", JSON.stringify(lists));
}
function load(): ListType[] {
  const item = localStorage.getItem("lists");
  if (!item) {
    return listsData;
  }
  return JSON.parse(item);
}

type Props = PropsWithChildren;
export default function BoardProvider({ children }: Props): ReactNode {
  // const [lists, setLists] =useState<ListType[]>(load);
  const [lists,dispatch]= useReducer(ListReducer,load())

  useEffect(() => {
    save(lists);
  }, [lists]);

  const create = (): void => {
    dispatch({type:'created'});
  };

  const remove = (listId: string, itemId: string): void => {
    dispatch({type:'removed',listId,itemId});
  };

  const move = (fromListId:string,itemId:string, toListId:string): void => {
    dispatch({type:'moved',fromListId,itemId,toListId});
  };

  return (
    <BoardContext value={{ lists, create, remove, move }}>
      {children}
    </BoardContext>
  );
}

