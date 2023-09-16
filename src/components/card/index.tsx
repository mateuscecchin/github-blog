import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

function Root({ children }) {
  return <section className={styles.root}>{children}</section>;
}

function Image({ src }) {
  return <img src={src} width={148} />;
}

function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

function Title({ children }) {
  return <h1>{children}</h1>;
}

function ContentDescription({ children }) {
  return <p>{children}</p>;
}

function TagList({ children }) {
  return <ul className={styles.tags}>{children}</ul>;
}

function TagItem({ children, icon }: { icon: IconProp; children: ReactNode }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} />
      <span>{children}</span>
    </li>
  );
}

export const Card = Object.assign(Root, {
  Image,
  Header,
  Content,
  Title,
  ContentDescription,
  TagList,
  TagItem,
});
