import styles from "./WordAdd.module.scss";
import TableInput from "../TableInput/TableInput";
import { useState } from "react";
import { inject, observer } from "mobx-react";

function WordAdd({ wordsStore }) {
  const addWord = wordsStore.addWord;
  const [disabledButton, setDisabledButton] = useState(true);

  const initialState = {
    english: "",
    transcription: "",
    russian: "",
    tags: "",
    id: "",
  };

  const [state, setState] = useState(initialState);

  const isValid = [
    state.english,
    state.transcription,
    state.russian,
    state.tags,
  ].every((input) => input !== "");

  const handleChange = (event, type) => {
    let value = event.target.value.trimStart().replace(/ +/g, " ");
    setState({
      ...state,
      [type]: value,
    });
    isValid ? setDisabledButton(false) : setDisabledButton(true);
  };

  const handleAdd = (word) => {
    addWord(state);
    setState(initialState);
    setDisabledButton(true);
  };

  return (
    <table className={styles.Container}>
      <tbody>
        <tr className={styles.TableRow}>
          <td className={styles.TableData}>
            <TableInput
              value={state.english}
              onChange={(e) => handleChange(e, "english")}
              placeholder="english"
            />
          </td>
          <td className={styles.TableData}>
            <TableInput
              value={state.transcription}
              onChange={(e) => handleChange(e, "transcription")}
              placeholder="transcription"
            />
          </td>
          <td className={styles.TableData}>
            <TableInput
              value={state.russian}
              onChange={(e) => handleChange(e, "russian")}
              placeholder="russian"
            />
          </td>
          <td className={styles.TableData}>
            <TableInput
              value={state.tags}
              onChange={(e) => handleChange(e, "tags")}
              placeholder="tags"
            />
          </td>
          <td className={styles.TableData}>
            <button
              disabled={disabledButton}
              className={styles.Button}
              onClick={() => handleAdd(state)}>
              Add word
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default inject(["wordsStore"])(observer(WordAdd));
