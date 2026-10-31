import { BoardContext } from "@/context/board-context";
import { listsData } from "@/data/lists-data";
import type { ListType } from "@/types/list";
import  { useEffect, useState, type PropsWithChildren, type ReactNode } from "react";

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
  const [lists, setLists] =useState<ListType[]>(load);
  useEffect(() => {
    save(lists);
  }, [lists]);

  const create = (): void => {
    setLists((old:ListType[]) => {
      const clone = [...old];
      const id = globalThis.crypto.randomUUID();
      clone[0] = { ...clone[0], items: [...clone[0].items, { id, title: id }] };
      // save(clone);
      return clone;
    });
  };

  const remove = (listId: string, itemId: string): void => {
    setLists((old:ListType[]) => {
      const listIndex = old.findIndex((list) => list.id === listId);
      if (listIndex == -1) {
        console.error("can not find desired list.");
        return old;
      }
      const clone = [...old];
      const list = {
        ...clone[listIndex],
        items: [...clone[listIndex].items],
      };

      const itemIndex = list.items.findIndex(
        (item) => item.id === itemId,
      );
      if (itemIndex == -1) {
        console.error("can not find desired item.");
        return old;
      }
      list.items.splice(itemIndex, 1);

      clone[listIndex] = list;
      // save(clone);
      return clone;
    });
  };

  const move = (fromListId:string,itemId:string, toListId:string): void => {
    setLists((old:ListType[]) => {
      const fromListIndex = old.findIndex((list) => list.id === fromListId);
      const toListIndex = old.findIndex(
        (list) => list.id === toListId,
      );

      if (fromListIndex === -1 || toListIndex === -1) {
        console.error("can not find desired list.");
        return old;
      }
      const clone = [...old];
      const list = {
        ...clone[fromListIndex],
        items: [...clone[fromListIndex].items],
      };
      const destinationList = {
        ...clone[toListIndex],
        items: [...clone[toListIndex].items],
      };

      const itemIndex = list.items.findIndex(
        (item) => item.id === itemId,
      );
      if (itemIndex == -1) {
        console.error("can not find desired item.");
        return old;
      }
      const [activeItem] = list.items.splice(itemIndex, 1);
      destinationList.items.push(activeItem);

      clone[fromListIndex] = list;
      clone[toListIndex] = destinationList;
      // save(clone);
      return clone;
    });
  };

  return (
    <BoardContext value={{ lists, create, remove, move }}>
      {children}
    </BoardContext>
  );
}

