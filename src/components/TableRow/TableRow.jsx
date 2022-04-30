import styles from "./TableRow.module.scss";
import TableButton from "../TableButton/TableButton";
import Edit from "../../assets/img/edit.svg";
import Delete from "../../assets/img/delete.svg";
import Tick from "../../assets/img/tick.svg";
import Cross from "../../assets/img/cross.svg";
import * as cx from "classnames";

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
            className={styles.TableInput}
            type="text"
            defaultValue={props.english}></input>
        </td>
        <td className={classTableData}>
          <input
            className={styles.TableInput}
            type="text"
            defaultValue={props.transcription}></input>
        </td>
        <td className={classTableData}>
          <input
            className={styles.TableInput}
            type="text"
            defaultValue={props.russian}></input>
        </td>
        <td className={classTableData}>
          <input
            className={styles.TableInput}
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

export default TableRow;
