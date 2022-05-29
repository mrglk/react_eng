import styles from "./NoMatch.module.scss";

export default function NoMatch() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Header}>Error 404</h1>
      <p>Oops. Looks like this page doesn't exist.</p>
    </div>
  );
}
