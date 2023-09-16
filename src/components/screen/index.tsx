import styles from "./styles.module.css";

export function Screen({ children }) {
  return (
    <>
      <img src="/Cover.svg" width="100%" />
      <div className={styles.container}>{children}</div>
    </>
  );
}
