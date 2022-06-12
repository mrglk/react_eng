import styles from "./Table.module.scss";
import TableRow from "../TableRow/TableRow";
import TableRowHead from "../TableRowHead/TableRowHead";
import Words from "../../words.json";
import { useState } from "react";

export default function Table() {
  const [edit, setEdit] = useState(null);
  const [error, setError] = useState(false);

  const handleCancel = () => {
    setEdit(null);
    setError(false);
  };

  const handleSave = (row) => {
    const { english, transcription, russian, tags } = row;
    const isValid = [english, transcription, russian, tags].every((input) =>
      Validate(input)
    );

    if (isValid) {
      setEdit(null);
      setError(false);

      console.log(`
      English: ${row.english}
      Transcription: ${row.transcription}
      Russian: ${row.russian}
      Tags: ${row.tags}`);
    } else {
      setError(true);
      alert("Заполните все поля");
    }
  };

  const Validate = (input) => {
    return input !== "";
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
            onCancel={handleCancel}
            onSave={handleSave}
            validate={Validate}
            isError={error}
          />
        ))}
      </tbody>
    </table>
  );
}
