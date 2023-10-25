import React, { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";
import { Icon } from "../Icon/Icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  text?: string;
  icon?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  text,
  icon,
  ...rest
}) => {
  return (
    <button className={`${styles["button"]} ${styles[variant]}`} {...rest}>
      <span className={styles["button__text"]}>{text}</span>
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export { Button };
