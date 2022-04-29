import styles from "./WordsPage.module.scss";
import Table from "../Table/Table";

function WordsPage() {
  return (
    <div class={styles.Container}>
      <div class={styles.Inner}>
        <Table></Table>
      </div>
    </div>
  );
}
export default WordsPage;
