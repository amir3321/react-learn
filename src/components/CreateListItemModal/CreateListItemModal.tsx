import styles from "@/components/CreateListItemModal/CreateListItemModal.module.css";
import {
  use,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  type SubmitEvent,
} from "react";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import clsx from "clsx";
import { BoardContext } from "@/context/board-context";
import { toast } from "react-toastify";

type Props = Omit<ComponentProps<typeof Modal>, "children" | "heading"> & {
  listId: string;
};

export default function CreateListItemModal({
  listId,
  contentClassName,
  ref,
  ...otherProps
}: Props): ReactNode {
  // const [shouldValidateOnChange, setShouldValidateOnChange] =
  //   useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);

  const { create } = use(BoardContext);

  const shouldValidateOnChange=useRef<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // const formData=new FormData(formRef.current!)
    //const formData=new FormData(e.currentTarget)
    shouldValidateOnChange.current=true;
    const id = globalThis.crypto.randomUUID();
    //const title = formData.get('title')as string;//work with name tag html
    if (!validateTitle(title)) {
      return;
    }
    create(listId, { id, title: title });
    toast.success("Item created successfully.");

    ref.current?.close();
  };
  const validateTitle = (title: unknown): boolean => {
    if (typeof title !== "string") {
      setTitleError("Title must be string.");
      return false;
    }
    if (title.length === 0) {
      setTitleError("Title can not empty.");
      return false;
    }

    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters.");
      return false;
    }

    setTitleError(null);
    return true;
  };
  const handleFormReset =():void=>{
    shouldValidateOnChange.current=false;
    setTitle("");
  }
  const handleModalClose = (): void => {
    setTitleError(null);
    setTitle("");
    formRef.current?.reset();
  };

  const handleCancelButtonClick = (): void => {
    
    ref.current?.close();
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    if (shouldValidateOnChange) validateTitle(value);

    setTitle(value);
  };
  return (
    <Modal
      ref={ref}
      contentClassName={clsx(
        styles["create-list-item-modal"],
        contentClassName,
      )}
      heading="Create new Item"
      onClose={handleModalClose}
      {...otherProps}
    >
      <form ref={formRef} onReset={handleFormReset} onSubmit={handleFormSubmit}>
        <TextInput
          label="Title"
          name="title"
          type="text"
          error={titleError}
          value={title}
          onChange={handleTitleChange}
        />
        <div className={styles.action}>
          <Button type="reset" onClick={handleCancelButtonClick}>
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
