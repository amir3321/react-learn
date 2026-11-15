import styles from '@/components/CreateListItemModal/CreateListItemModal.module.css';
import { use, useRef, useState, type ComponentProps, type ReactNode, type SubmitEvent } from 'react';
import Modal from '../Modal/Modal';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import clsx from 'clsx';
import { BoardContext } from '@/context/board-context';
import { toast } from 'react-toastify';

type Props=Omit<ComponentProps<typeof Modal>,'children'|'heading'> &{
  listId:string;
};

export default function CreateListItemModal({
  listId, contentClassName, ref,...otherProps}:Props): ReactNode {
  
    const [titleError,setTitleError]=useState<string|null>(null);

  const {create}=use(BoardContext);

  const formRef=useRef<HTMLFormElement>(null)
  const handleFormSubmit=(e:SubmitEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    // const formData=new FormData(formRef.current!)
     const formData=new FormData(e.currentTarget)

   const id= globalThis.crypto.randomUUID();
    const title = formData.get('title')as string;//work with name tag html
    if(!validateTitle(title)){
      return;
    }
    create(listId , {id,title:title.trim()});
    toast.success("Item created successfully.");
    

    ref.current?.close();

  }
  const validateTitle=(title:unknown):boolean=>{
    if(typeof title !=="string")
      {setTitleError("Title must be string."); return false;}
    if(title.trim().length===0)
      {setTitleError("Title can not empty."); return false;}
    
    setTitleError(null);
    return true;

  }
const handleModalClose=():void=>{
   setTitleError(null);
  formRef.current?.reset();
   
     
  }
  

  const handleCancelButtonClick=():void=>{
    
     ref.current?.close();
  }
  
  return (
   
      <Modal ref={ref} contentClassName={clsx(styles['create-list-item-modal'],contentClassName)} 
      heading='Create new Item' onClose={handleModalClose}
      {...otherProps}>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <TextInput label='Title' name='title' type='text' error={titleError}/>
          <div className={styles.action}>
            <Button type='reset' onClick={handleCancelButtonClick}>Cancel</Button>
            <Button color='primary'>Submit</Button>

          </div>
        </form>
        
        </Modal>
   
  );
}