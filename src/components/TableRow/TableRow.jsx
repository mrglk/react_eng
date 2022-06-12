import styles from "./TableRow.module.scss";
import TableButton from "../TableButton/TableButton";
import Edit from "../../assets/img/edit.svg";
import Delete from "../../assets/img/delete.svg";
import Tick from "../../assets/img/tick.svg";
import Cross from "../../assets/img/cross.svg";
import * as cx from "classnames";
import { useState } from "react";
import TableInput from "../TableInput/TableInput";

function TableRow({
  english,
  transcription,
  russian,
  tags,
  isEditable,
  onSave,
  onCancel,
  onEdit,
}) {
  const classTableData = cx(styles.TableData, {
    [styles.TableData_opened]: isEditable,
  });

  const [state, setState] = useState({ english, transcription, russian, tags });

  const handleChange = (event, type) => {
    let value = event.target.value.trimStart().replace(/ +/g, " ");
    setState({
      ...state,
      [type]: value,
    });
  };

  if (!isEditable) {
    return (
      <tr className={styles.TableRow}>
        <td className={classTableData}>{english}</td>
        <td className={classTableData}>{transcription}</td>
        <td className={classTableData}>{russian}</td>
        <td className={classTableData}>{tags}</td>
        <td className={classTableData} onClick={onEdit}>
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
          <TableInput
            value={state.english}
            onChange={(e) => handleChange(e, "english")}
          />
        </td>
        <td className={classTableData}>
          <TableInput
            value={state.transcription}
            onChange={(e) => handleChange(e, "transcription")}
          />
        </td>
        <td className={classTableData}>
          <TableInput
            value={state.russian}
            onChange={(e) => handleChange(e, "russian")}
          />
        </td>
        <td className={classTableData}>
          <TableInput
            value={state.tags}
            onChange={(e) => handleChange(e, "tags")}
          />
        </td>
        <td className={classTableData} onClick={() => onSave(state)}>
          <TableButton alt="Save" img={Tick}></TableButton>
        </td>
        <td className={classTableData} onClick={onCancel}>
          <TableButton alt="Cross" img={Cross}></TableButton>
        </td>
      </tr>
    );
  }
}

export default TableRow;
