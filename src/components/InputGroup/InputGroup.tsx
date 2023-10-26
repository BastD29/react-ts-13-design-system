import { FC, InputHTMLAttributes } from "react";

import styles from "./InputGroup.module.scss";
import { Input } from "../Input/Input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

interface InputGroupProps {
  inputs: InputProps[];
}

const InputGroup: FC<InputGroupProps> = ({ inputs }) => {
  return (
    <div className={styles["input-group"]}>
      {inputs.map((inputProps) => (
        <Input {...inputProps} key={inputProps.id} />
      ))}
    </div>
  );
};

export { InputGroup };
