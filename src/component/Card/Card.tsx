import type { ReactNode } from "react";
import styles from "./Card.module.css"

export default function Card():ReactNode{
    return(
        <div className={styles.card}>
            <div className={styles.title}>Card Title</div>
            <div className="content">Card Content</div>
        </div>
    
    )
}