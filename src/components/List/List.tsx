import type { ListType } from "@/types/list";
import styles from "./List.module.css";
import { useRef, type ReactNode } from "react";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";
import IconButton from "../IconButton/IconButton";
import ListItem from "../ListItem/ListItem";
import MingcuteAddLine from "@/icons/MingcuteAddLine";

import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
type Props = {
  listIndex:number;
  list: ListType;

};
const List = function List({listIndex, list }: Props): ReactNode {
 
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCreateButtonClick = (): void => {
    modalRef.current?.showModal();
  };
 
  return (
    <div className={styles["list"]}>
      <div className={styles.header}>
        <div className={styles.title}>📚{list.title}</div>
        <div className={styles.action}>
          <IconButton>
            <MingcuteAddLine onClick={handleCreateButtonClick} />
          </IconButton>

          <IconButton>
            <MingcuteMore1Line />
          </IconButton>
        </div>
      </div>
      <ul className={styles.items}>
        {list.items.map((item,itemIndex) => (
          <li key={item.id}>
            <ListItem listIndex={listIndex} itemIndex={itemIndex} item={item} />
          </li>
        ))}
      </ul>
      <CreateListItemModal ref={modalRef} listIndex={listIndex} />
    </div>
  );
};
export default List;
