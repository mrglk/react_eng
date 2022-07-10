import styles from "./WordsPage.module.scss";
import Table from "../Table/Table";
import WordAdd from "../WordAdd/WordAdd";
import Error from "../Error/Error";

function WordsPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <Error />
        <WordAdd />
        <Table />
      </div>
    </div>
  );
}
export default WordsPage;
