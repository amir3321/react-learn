import styles from "./Button.module.css";
import clsx from "clsx";
import { memo, type ComponentProps, type ReactNode } from "react";

type props = ComponentProps<"button"> & {
  color?: "default" | "primary";
  variant?: "solid" | "outlined";
};
const Button = memo(function Button({
  className,
  variant = "solid",
  color = "default",
  children,
  ...otherProps
}: props): ReactNode {
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
});

export default Button;
