import type { ListType } from "@/types/list";
import styles from "./List.module.css";
import { use, useRef, type ReactNode } from "react";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";
import IconButton from "../IconButton/IconButton";
import ListItem from "../ListItem/ListItem";
import MingcuteAddLine from "@/icons/MingcuteAddLine";
import { toast } from "react-toastify";
import { BoardContext } from "@/context/board-context";
import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
type Props = {
  list: ListType;
  // onClick?:(listId:string,itemId:string)=>void;
  // onRemove?:(listId:string,itemId:string)=>void;
};
const List = function List({ list }: Props): ReactNode {
  // const { create } = use(BoardContext);
  // // const handleCreateButtonClick = (): void => {
  // //   console.warn("check");

  // //   create();
  // //   toast.success("Item Created Successfull.");
  // // };
  const ref = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = (): void => {
    ref.current?.showModal();
  };
  //const moreIcon=useMemo(()=> ,[])
  return (
    <div className={styles["list"]}>
      <div className={styles.header}>
        <div className={styles.title}>📚{list.title}</div>
        <div className={styles.action}>
          <IconButton>
            <MingcuteAddLine onClick={handleOpenButtonClick} />
          </IconButton>

          <IconButton>
            <MingcuteMore1Line />
          </IconButton>
        </div>
      </div>
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem listId={list.id} item={item} />
          </li>
        ))}
      </ul>
      <CreateListItemModal ref={ref} listId={list.id} />
    </div>
  );
};
export default List;
