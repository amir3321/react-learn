import { BoardCard } from '@/components/BoardCard/BoardCard';
import { Button } from '@/components/Button/Button';
import styles from '@/pages/HomePage/HomePage.module.css';
import type { ReactNode } from 'react';

export const HomePage = (): ReactNode => {
  return (
    <>
      <div className={styles['home-page']}>
          <header>Header</header>
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Boards</h1>
          <Button variant="outlined" color="default">Create</Button>
        </div>
        <ul className={styles.boards}>
          <li>
           
             <BoardCard 
             id={1}
             title="sprint new 1"
             description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   A delectus
                  accusantium corrupti!"
              color="yellow"    
             />
            
          </li>
          <li>
            <BoardCard 
             id={1}
             title="sprint new 2"
             description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam corrupti earum perferendis numquam nemo? A delectus
                  Totam corrupti earum perferendis numquam nemo? A delectus
                  accusantium corrupti!"
              color="gray"    
             />
          </li>
          <li>
             <BoardCard 
             id={1}
             title="sprint new 3"
             description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam corrupti earum perferendis numquam nemo? A delectus
                  accusantium corrupti! Totam corrupti earum perferendis numquam nemo? A delectus
                  accusantium corrupti!Totam corrupti earum perferendis numquam nemo? A delectus
                  accusantium corrupti!Totam corrupti earum perferendis numquam nemo? A delectus
                  accusantium corrupti!"
              color="blue"    
             />
          </li>
        </ul>
      </main>
      <footer>Footer</footer>
      </div>
    </>
  );
}