import styles from "./styles.module.css";

export function Screen({ children }) {
  return (
    <>
      <Cover />
      <div className={styles.container}>
        <div className={styles.blur} />
        {children}
      </div>
    </>
  );
}

function Cover() {
  return (
    <div className={styles.cover}>
      <img src="/effect-1.svg" />
      <div className={styles.cover_logo}>
        <img src="/terminal.svg" />
        <p>GITHUB BLOG</p>
      </div>
      <img src="/effect-2.svg" />
    </div>
  );
}
