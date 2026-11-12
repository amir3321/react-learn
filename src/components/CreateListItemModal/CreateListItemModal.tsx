import styles from '@/components/CreateListItemModal/CreateListItemModal.module.css';
import type { ComponentProps, ReactNode } from 'react';
import Modal from '../Modal/Modal';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import clsx from 'clsx';

type Props=Omit<ComponentProps<typeof Modal>,'children'|'heading'>;

export default function CreateListItemModal({contentClassName, ref,...otherProps}:Props): ReactNode {
  return (
   
      <Modal ref={ref} contentClassName={clsx(styles['create-list-item-modal'],contentClassName)} 
      heading='Create new Item'
      {...otherProps}>
        <form action="">
          <TextInput label='Title'/>
          <div className={styles.action}>
            <Button type='button'>Cancel</Button>
            <Button color='primary'>Submit</Button>

          </div>
        </form>
        
        </Modal>
   
  );
}