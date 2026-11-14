import styles from '@/components/CreateListItemModal/CreateListItemModal.module.css';
import { use, useRef, type ComponentProps, type ReactNode, type SubmitEvent } from 'react';
import Modal from '../Modal/Modal';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import clsx from 'clsx';
import { BoardContext } from '@/context/board-context';
import { toast } from 'react-toastify';

type Props=Omit<ComponentProps<typeof Modal>,'children'|'heading'> &{
  listId:string;
};

export default function CreateListItemModal({listId, contentClassName, ref,...otherProps}:Props): ReactNode {
  
  const {create}=use(BoardContext);

  const formRef=useRef<HTMLFormElement>(null)
  const handleFormSubmit=(e:SubmitEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    // const formData=new FormData(formRef.current!)
     const formData=new FormData(e.currentTarget)

   const id= globalThis.crypto.randomUUID();
    const title = formData.get('title')as string;//work with name tag html

    create(listId , {id,title});
    toast.success("Item created successfully.");
    e.currentTarget.reset();

    ref.current?.close();

  }
  const handleCancelButtonClick=():void=>{
     ref.current?.close();
  }
  
  return (
   
      <Modal ref={ref} contentClassName={clsx(styles['create-list-item-modal'],contentClassName)} 
      heading='Create new Item'
      {...otherProps}>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <TextInput label='Title' name='title' type='text'/>
          <div className={styles.action}>
            <Button type='reset' onClick={handleCancelButtonClick}>Cancel</Button>
            <Button color='primary'>Submit</Button>

          </div>
        </form>
        
        </Modal>
   
  );
}