import styles from "./DeleteModal.module.scss";
// import { useState, useEffect } from "react";
import * as cx from "classnames";
import { inject, observer } from "mobx-react";

function DeleteModal({ wordsStore }) {
  const [isDeleting, deleteId] = wordsStore;

  const classDelete = cx(styles.Delete, {
    [styles.DeleteShow]: isDeleting,
  });

  return (
    <div className={classDelete}>
      <div className={styles.Inner}>
        <h1 className={styles.Header}>Delete word</h1>
        <p className={styles.Text}>Are you sure?</p>
        <div className={styles.Buttons}>
          <button>Cancel</button>
          <button
            onClick={() => {
              wordsStore.deleteWords(deleteId);
            }}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default inject(["wordsStore"])(observer(DeleteModal));
