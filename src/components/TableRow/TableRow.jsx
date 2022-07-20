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
  id,
  english,
  transcription,
  russian,
  tags,
  isEditable,
  onSave,
  onCancel,
  onEdit,
  onDelete,
}) {
  const classTableData = cx(styles.TableData, {
    [styles.TableData_opened]: isEditable,
  });

  const [state, setState] = useState({
    english,
    transcription,
    russian,
    tags,
    id,
  });

  const [changed, setChanged] = useState(false);

  const handleChange = (event) => {
    let value = event.target.value.trimStart().replace(/ +/g, " ");
    setState({
      ...state,
      [event.target.name]: value,
    });
    setChanged(true);
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
        <td className={classTableData} onClick={() => onDelete(id)}>
          <TableButton alt="Delete" img={Delete} />
        </td>
      </tr>
    );
  } else {
    return (
      <tr className={styles.TableRow}>
        <td className={classTableData}>
          <TableInput
            name="english"
            value={state.english}
            onChange={(e) => handleChange(e)}
          />
        </td>
        <td className={classTableData}>
          <TableInput
            name="transcription"
            value={state.transcription}
            onChange={(e) => handleChange(e)}
          />
        </td>
        <td className={classTableData}>
          <TableInput
            name="russian"
            value={state.russian}
            onChange={(e) => handleChange(e)}
          />
        </td>
        <td className={classTableData}>
          <TableInput
            name="tags"
            value={state.tags}
            onChange={(e) => handleChange(e)}
          />
        </td>
        <td className={classTableData} onClick={() => onSave(state, changed)}>
          <TableButton alt="Save" img={Tick} />
        </td>
        <td className={classTableData} onClick={onCancel}>
          <TableButton alt="Cross" img={Cross} />
        </td>
      </tr>
    );
  }
}

export default TableRow;
