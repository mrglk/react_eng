import styles from "./Table.module.scss";
import TableRow from "../TableRow/TableRow";
import TableRowHead from "../TableRowHead/TableRowHead";
import Words from "../../words.json";
import { useState } from "react";

export default function Table() {
  const [edit, setEdit] = useState(null);

  const handleClick = () => {
    setEdit(null);
  };

  return (
    <table className={styles.Table}>
      <TableRowHead isEdit={edit} />
      <tbody>
        {Words.map((word, i) => (
          <TableRow
            key={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            tags={word.tags}
            isEditable={edit === i}
            onEdit={() => setEdit(i)}
            onCancel={handleClick}
          />
        ))}
      </tbody>
    </table>
  );
}
