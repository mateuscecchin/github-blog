import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Loading() {
  return (
    <div className={styles.loading}>
      <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
    </div>
  );
}
