import styles from "./Table.module.scss";
import TableRow from "../TableRow/TableRow";
import TableRowHead from "../TableRowHead/TableRowHead";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";

function Table({ wordsStore }) {
  const words = wordsStore.words;
  const [edit, setEdit] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    wordsStore.getWords();
  }, [wordsStore]);

  const handleCancel = () => {
    setEdit(null);
    setError(false);
  };

  const handleSave = (row, isChanged) => {
    const { english, transcription, russian, tags } = row;
    const isValid = [english, transcription, russian, tags].every((input) =>
      validate(input)
    );
    if (isValid) {
      setEdit(null);
      setError(false);
      isChanged && wordsStore.editWords(row);
    } else {
      setError(true);
      wordsStore.addError("Заполните все поля");
    }
  };

  const handleDelete = (id) => {
    wordsStore.addDeleteModal(id);
  };

  const validate = (input) => {
    return !!input;
  };

  return (
    <table className={styles.Table}>
      <TableRowHead isEdit={edit} />
      <tbody className={styles.Body}>
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
            validate={validate}
            isError={error}
          />
        ))}
        <tr>{wordsStore.isLoading && <Loader />}</tr>
      </tbody>
    </table>
  );
}

export default inject(["wordsStore"])(observer(Table));
