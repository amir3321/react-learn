import styles from "./Button.module.css";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type props = ComponentProps<"button"> & {
  color?: "default" | "primary";
  variant?: "solid" | "outlined";
};
export const Button = ({
  className,
  variant = "solid",
  color = "default",
  children,
  ...otherProps
}: props): ReactNode => {
  return (
    <>
      <button
        className={clsx(
          styles["button"],
          styles[variant],
          styles[color],
          className,
        )}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};
