import type { ReactNode } from "react";
import styles from "@/component/Post/Post.module.css"

export default function Post():ReactNode{
    return(
        <div className={styles.post}>
            <div className={styles.title}>Post Title</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem porro sint eligendi facere, error nulla tenetur a corrupti laudantium unde vero! Voluptate, explicabo tenetur ipsa odit corrupti recusandae voluptatem!</p>
        </div>
    )

}