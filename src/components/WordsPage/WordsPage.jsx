import styles from "./WordsPage.module.scss";
import Table from "../Table/Table";

function WordsPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <Table></Table>
      </div>
    </div>
  );
}
export default WordsPage;
