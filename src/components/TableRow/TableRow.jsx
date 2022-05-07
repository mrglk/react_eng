import styles from "./TableRow.module.scss";
import TableButton from "../TableButton/TableButton";
import Edit from "../../assets/img/edit.svg";
import Delete from "../../assets/img/delete.svg";
import Tick from "../../assets/img/tick.svg";
import Cross from "../../assets/img/cross.svg";
import * as cx from "classnames";
import { useState } from "react";

function TableRow(props) {
  const isEditable = props.isEditable;
  const classTableData = cx(styles.TableData, {
    [styles.TableData_opened]: isEditable,
  });

  const [state, setState] = useState(props);

  const handleChange = (event, type) => {
    setState({
      ...state,
      [type]: event.target.value,
    });
  };

  if (!isEditable) {
    return (
      <tr className={styles.TableRow}>
        <td className={classTableData}>{props.english}</td>
        <td className={classTableData}>{props.transcription}</td>
        <td className={classTableData}>{props.russian}</td>
        <td className={classTableData}>{props.tags}</td>
        <td className={classTableData} onClick={props.onEdit}>
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
            value={state.english}
            onChange={(e) => handleChange(e, "english")}></input>
        </td>
        <td className={classTableData}>
          <input
            className={styles.TableInput}
            type="text"
            value={state.transcription}
            onChange={(e) => handleChange(e, "transcription")}></input>
        </td>
        <td className={classTableData}>
          <input
            className={styles.TableInput}
            type="text"
            value={state.russian}
            onChange={(e) => handleChange(e, "russian")}></input>
        </td>
        <td className={classTableData}>
          <input
            className={styles.TableInput}
            type="text"
            value={state.tags}
            onChange={(e) => handleChange(e, "tags")}></input>
        </td>
        <td className={classTableData}>
          <TableButton alt="Save" img={Tick}></TableButton>
        </td>
        <td className={classTableData} onClick={props.onCancel}>
          <TableButton alt="Cross" img={Cross}></TableButton>
        </td>
      </tr>
    );
  }
}

export default TableRow;
