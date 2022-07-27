import styles from "./WordsPage.module.scss";
import Table from "../Table/Table";
import WordAdd from "../WordAdd/WordAdd";
import Error from "../Error/Error";
// import DeleteModal from "../DeleteModal/DeleteModal";

function WordsPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        {/* <DeleteModal /> */}
        <Error />
        <WordAdd />
        <Table />
      </div>
    </div>
  );
}
export default WordsPage;
