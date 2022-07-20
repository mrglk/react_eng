import styles from "./DeleteModal.module.scss";
import * as cx from "classnames";
import { inject, observer } from "mobx-react";
import Button from "../Button/Button";

function DeleteModal({ wordsStore }) {
  const classDelete = cx(styles.Delete, {
    [styles.DeleteShow]: wordsStore.isDeleting,
  });

  return (
    <div className={classDelete}>
      <div className={styles.Inner}>
        <button
          className={styles.Close}
          onClick={() => {
            wordsStore.removeDeleteModal();
          }}>
          &times;
        </button>
        <div className={styles.Content}>
          <h1 className={styles.Header}>Delete word</h1>
          <p className={styles.Text}>Are you sure?</p>
          <div className={styles.Buttons}>
            <Button
              onClick={() => {
                wordsStore.removeDeleteModal();
              }}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                wordsStore.deleteWords(wordsStore.deleteId);
              }}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject(["wordsStore"])(observer(DeleteModal));
