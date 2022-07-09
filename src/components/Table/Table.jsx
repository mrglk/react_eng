import styles from "./Table.module.scss";
import TableRow from "../TableRow/TableRow";
import TableRowHead from "../TableRowHead/TableRowHead";
// import Words from "../../words.json";
import { useState, useContext } from "react";
import { WordsContext } from "../../contexts/WordsContext";

export default function Table() {
  const { words, loading, editWords, deleteWords } = useContext(WordsContext);
  const [edit, setEdit] = useState(null);
  const [error, setError] = useState(false);

  const handleCancel = () => {
    setEdit(null);
    setError(false);
  };

  const handleSave = (row, isChanged) => {
    const { english, transcription, russian, tags } = row;
    const isValid = [english, transcription, russian, tags].every((input) =>
      Validate(input)
    );
    if (isValid) {
      setEdit(null);
      setError(false);
      isChanged && editWords(row);
    } else {
      setError(true);
      alert("Заполните все поля");
    }
  };

  const handleDelete = (id) => {
    let confirm = window.confirm("Are you sure?");
    if (confirm) {
      deleteWords(id);
    }
  };

  const Validate = (input) => {
    return input !== "";
  };

  return (
    <>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <table className={styles.Table}>
          <TableRowHead isEdit={edit} />
          <tbody>
            {words.map((word, i) => (
              <TableRow
                key={word.id}
                id={word.id}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                tags={word.tags}
                isEditable={edit === i}
                onEdit={() => setEdit(i)}
                onCancel={handleCancel}
                onSave={handleSave}
                onDelete={handleDelete}
                validate={Validate}
                isError={error}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
