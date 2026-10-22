import styles from "./IconButton.module.css";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type props = ComponentProps<"button"> ;
export default function IconButton ({
  className,
  children,
  ...otherProps
}: props): ReactNode  {
  return (
    
      <button className={clsx(styles["icon-button"], className, )} {...otherProps}>
        {children}
      </button>
    
  );
};
