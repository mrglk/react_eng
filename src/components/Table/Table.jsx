// import TableRow from "../TableRow/TableRow";
import styles from "./Table.module.scss";
import Words from "../../words.json";
import Edit from "../../assets/img/edit.svg";
import Delete from "../../assets/img/delete.svg";

function Table() {
  return (
    <div className={styles.Container}>
      <table className={styles.Table}>
        <thead>
          <tr className={styles.TableRow}>
            <th className={styles.TableHead}>English</th>
            <th className={styles.TableHead}>Transcription</th>
            <th className={styles.TableHead}>Translation</th>
            <th className={styles.TableHead}>Category</th>
            <th className={styles.TableHead}>Edit</th>
            <th className={styles.TableHead}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Words.map((word) => (
            <TableRow
              key={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRow(props) {
  return (
    <tr className={styles.TableRow}>
      <td className={styles.TableData}>{props.english}</td>
      <td className={styles.TableData}>{props.transcription}</td>
      <td className={styles.TableData}>{props.russian}</td>
      <td className={styles.TableData}>{props.tags}</td>
      <td className={styles.TableData}>
        <img alt="Edit" src={Edit}></img>
      </td>
      <td className={styles.TableData}>
        <img alt="Delete" src={Delete}></img>
      </td>
    </tr>
  );
}

export default Table;
