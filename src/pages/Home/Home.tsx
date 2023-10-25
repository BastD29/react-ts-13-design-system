import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import { FaBeer } from "react-icons/fa";
import { FaAlgolia } from "react-icons/fa";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <Button
        variant="primary"
        onClick={() => console.log("first button clicked")}
        title="ciaooo"
        text="ciaooo"
        icon={<FaBeer />}
      />
      <Button
        variant="success"
        onClick={() => console.log("second button clicked")}
        title="ciaooo"
        text="bonjour"
        icon={<FaAlgolia />}
      />
      <Input placeholder="Type something" title="title 1" />
    </div>
  );
}
