import { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ type = "text", ...rest }) => {
  return <input className={styles["input"]} type={type} {...rest} />;
};

export { Input };
