import styles from "./TableRowHead.module.scss";

function TableRowHead() {
  return (
    <thead>
      <tr className={styles.TableRowHead}>
        <th className={styles.TableHead}>English</th>
        <th className={styles.TableHead}>Transcription</th>
        <th className={styles.TableHead}>Translation</th>
        <th className={styles.TableHead}>Category</th>
        <th className={styles.TableHead}>Edit</th>
        <th className={styles.TableHead}>Delete</th>
      </tr>
    </thead>
  );
}

export default TableRowHead;
