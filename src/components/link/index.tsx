import { ComponentProps, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Root({ ...rest }: ComponentProps<"a">) {
  return <a className={styles.link} {...rest} />;
}

function Icon({ ...rest }: ComponentProps<typeof FontAwesomeIcon>) {
  return <FontAwesomeIcon {...rest} />;
}

function Label({ ...rest }: ComponentProps<"span">) {
  return <span {...rest} />;
}

export const Link = Object.assign(Root, { Root, Icon, Label });
