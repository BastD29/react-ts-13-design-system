import { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ type = "text", label, id, ...rest }) => {
  return (
    <div className={styles["input-wrapper"]}>
      {label && (
        <label htmlFor={id} className={styles["input-label"]}>
          {label}
        </label>
      )}
      <input className={styles["input"]} type={type} {...rest} />
    </div>
  );
};

export { Input };
