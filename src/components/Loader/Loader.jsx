import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <td className={styles.ErrorData} rowSpan={5}>
      <svg className={styles.Spinner} viewBox="0 0 50 50">
        <circle
          className={styles.Path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"></circle>
      </svg>
    </td>
  );
}
