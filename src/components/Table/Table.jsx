import styles from "./Table.module.scss";
import Words from "../../words.json";
import TableButton from "../TableButton/TableButton";
import Edit from "../../assets/img/edit.svg";
import Delete from "../../assets/img/delete.svg";
import Tick from "../../assets/img/tick.svg";
import Cross from "../../assets/img/cross.svg";
import * as cx from "classnames";

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

function TableRow(props) {
  const isOpened = props.isOpened;
  const classTableData = cx(styles.TableData, {
    [styles.TableData_opened]: isOpened,
  });

  if (!isOpened) {
    return (
      <tr className={styles.TableRow}>
        <td className={classTableData}>{props.english}</td>
        <td className={classTableData}>{props.transcription}</td>
        <td className={classTableData}>{props.russian}</td>
        <td className={classTableData}>{props.tags}</td>
        <td className={classTableData}>
          <TableButton alt="Edit" img={Edit} />
        </td>
        <td className={classTableData}>
          <TableButton alt="Delete" img={Delete} />
        </td>
      </tr>
    );
  } else {
    return (
      <tr className={styles.TableRow}>
        <td className={classTableData}>
          <input
            class={styles.TableInput}
            type="text"
            defaultValue={props.english}></input>
        </td>
        <td className={classTableData}>
          <input
            class={styles.TableInput}
            type="text"
            defaultValue={props.transcription}></input>
        </td>
        <td className={classTableData}>
          <input
            class={styles.TableInput}
            type="text"
            defaultValue={props.russian}></input>
        </td>
        <td className={classTableData}>
          <input
            class={styles.TableInput}
            type="text"
            defaultValue={props.tags}></input>
        </td>
        <td className={classTableData}>
          <TableButton alt="Save" img={Tick}></TableButton>
        </td>
        <td className={classTableData}>
          <TableButton alt="Cross" img={Cross}></TableButton>
        </td>
      </tr>
    );
  }
}

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

export default Table;
