import styles from "./TableRowHead.module.scss";

function TableRowHead(props) {
  const isEdit = props.isEdit;

  return (
    <thead>
      <tr className={styles.TableRowHead}>
        <th className={styles.TableHead}>English</th>
        <th className={styles.TableHead}>Transcription</th>
        <th className={styles.TableHead}>Translation</th>
        <th className={styles.TableHead}>Category</th>
        {isEdit !== null ? (
          <th className={styles.TableHead}>Save</th>
        ) : (
          <th className={styles.TableHead}>Edit</th>
        )}
        {isEdit !== null ? (
          <th className={styles.TableHead}>Cancel</th>
        ) : (
          <th className={styles.TableHead}>Delete</th>
        )}
      </tr>
    </thead>
  );
}

export default TableRowHead;
