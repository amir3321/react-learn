import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list-item";
import type { Draft } from "immer";

export type ListAction =
  | { type: "item_created"; listIndex: number; item: ListItemType }
  // | { type: "moved"; fromListId: string; itemId: string; toListId: string }
  | { type: "item_removed"; listIndex: number ; itemIndex: number };

export function ListReducer(
  draft:Draft< ListType[]>, 
  action: ListAction
): void{

  switch (action.type) {
    case "item_created": {
      const list=draft[action.listIndex];

      list.items.push(action.item);
    
      return ;
    }

    case "item_removed": {
      const list=draft[action.listIndex];
      list.items.splice(action.itemIndex,1);
     
      return ;
    }
    default: {
      throw new Error("Unknon action.");
    }
  }
}
