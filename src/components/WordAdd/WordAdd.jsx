import styles from "./WordAdd.module.scss";
// import * as cx from "classnames";
import TableInput from "../TableInput/TableInput";
import { useState, useContext } from "react";
import { WordsContext } from "../../contexts/WordsContext";

export default function WordAdd() {
  const { addWord } = useContext(WordsContext);
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
    isValid && setDisabledButton(false);
  };

  const handleAdd = (word) => {
    addWord(state);
    setState(initialState);
  };

  return (
    <table className={styles.Container}>
      <tbody>
        <tr>
          <td>
            <TableInput
              value={state.english}
              onChange={(e) => handleChange(e, "english")}
              placeholder="english"
            />
          </td>
          <td>
            <TableInput
              value={state.transcription}
              onChange={(e) => handleChange(e, "transcription")}
              placeholder="transcription"
            />
          </td>
          <td>
            <TableInput
              value={state.russian}
              onChange={(e) => handleChange(e, "russian")}
              placeholder="russian"
            />
          </td>
          <td>
            <TableInput
              value={state.tags}
              onChange={(e) => handleChange(e, "tags")}
              placeholder="tags"
            />
          </td>
          <td>
            <button disabled={disabledButton} onClick={() => handleAdd(state)}>
              Add word
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
