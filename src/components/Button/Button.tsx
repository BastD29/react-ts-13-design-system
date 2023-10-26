import React, { ButtonHTMLAttributes, FC } from "react";

import { Icon } from "../Icon/Icon";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  text?: string;
  icon?: React.ReactElement;
  hoverEffect?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  hoverEffect = false,
  text,
  icon,
  ...rest
}) => {
  return (
    <button
      className={`${styles["button"]} ${styles[variant]} ${
        hoverEffect ? styles["hoverEffect"] : ""
      }`}
      {...rest}
    >
      <span className={styles["button__text"]}>{text}</span>
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export { Button };
