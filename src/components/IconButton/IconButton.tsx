import styles from "./IconButton.module.css";
import clsx from "clsx";
import { memo, type ComponentProps, type ReactNode } from "react";

type props = ComponentProps<"button"> ;
const IconButton=memo( function IconButton ({
  className,
  children,
  ...otherProps
}: props): ReactNode  {
  return (
    
      <button className={clsx(styles["icon-button"], className, )} {...otherProps}>
        {children}
      </button>
    
  );
});

export default IconButton;
