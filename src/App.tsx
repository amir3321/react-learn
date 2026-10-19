import { type ReactNode } from "react";

import styles from "./App.module.css";

import { BoardCard } from "./components/BoardCard/BoardCard";
import { Button } from "./components/Button/Button";


export default function App(): ReactNode {
  return (
    <div className={styles.app}>
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
  );
}
