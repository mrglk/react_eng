import styles from "./DeleteModal.module.scss";
import * as cx from "classnames";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteWord, removeDeleteModal } from "../../features/wordsSlice";

export default function DeleteModal() {
  const dispatch = useDispatch();
  const isDeleting = useSelector(({ words }) => words.isDeleting);
  const deleteId = useSelector(({ words }) => words.deleteId);

  const classDelete = cx(styles.Delete, {
    [styles.DeleteShow]: isDeleting,
  });

  return (
    <div className={classDelete}>
      <div className={styles.Inner}>
        <button
          className={styles.Close}
          onClick={() => {
            dispatch(removeDeleteModal());
          }}>
          &times;
        </button>
        <div className={styles.Content}>
          <h1 className={styles.Header}>Delete word</h1>
          <p className={styles.Text}>Are you sure?</p>
          <div className={styles.Buttons}>
            <Button
              onClick={() => {
                dispatch(removeDeleteModal());
              }}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteWord(deleteId));
              }}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
