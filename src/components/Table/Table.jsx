import styles from "./Table.module.scss";
import TableRow from "../TableRow/TableRow";
import TableRowHead from "../TableRowHead/TableRowHead";
import Words from "../../words.json";

function Table() {
  return (
    <table className={styles.Table}>
      <TableRowHead />
      <tbody>
        {Words.map((word) => (
          <TableRow
            key={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            tags={word.tags}
            isOpened={word.isOpened}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
