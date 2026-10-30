import type { ListType } from "@/types/list";
import styles from "./List.module.css";
import { type ReactNode } from "react";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";
import IconButton from "../IconButton/IconButton";
import ListItem from "../ListItem/ListItem";
type Props = {
  list: ListType;
  onClick?:(listId:string,itemId:string)=>void;
};
 const List =  function List ({ list ,onClick}: Props): ReactNode {

  //const moreIcon=useMemo(()=> ,[])
  return (
    
      <div className={styles["list"]}>
        <div className={styles.header}>
          <div className={styles.title}>📚{list.title}</div>
          <IconButton>
           <MingcuteMore1Line />
          </IconButton>
        </div>
        <ul className={styles.items}>
          {list.items.map((item) => (
            <li key={item.id}>
              <ListItem  listId={list.id} item={item} onClick={onClick} />
            </li>
          ))}
        </ul>
      </div>
    
  );
};
export default List;
