import styles from "./WordsPage.module.scss";
import Table from "../Table/Table";
import WordAdd from "../WordAdd/WordAdd";

function WordsPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <WordAdd />
        <Table />
      </div>
    </div>
  );
}
export default WordsPage;
