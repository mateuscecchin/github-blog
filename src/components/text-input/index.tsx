import styles from "./styles.module.css";
import { ComponentProps } from "react";

export function TextInput({ ...rest }: ComponentProps<"input">) {
  return <input type="text" className={styles.input} {...rest} />;
}
