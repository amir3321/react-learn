import { BoardCard } from '@/components/BoardCard/BoardCard';
import { Button } from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import styles from '@/pages/HomePage/HomePage.module.css';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';

export const HomePage = (): ReactNode => {
  const navigate=useNavigate();
const handleCreateButtonClick= ():void=>{
  navigate("/board");

}


  return (
    <>
      <div className={styles['home-page']}>
        <Header/>
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Boards</h1>
          <Button variant="outlined" color="default" onClick={handleCreateButtonClick}>Create</Button>
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
      <Footer/>
      </div>
    </>
  );
}