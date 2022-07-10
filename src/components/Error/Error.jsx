import styles from "./Error.module.scss";
import { WordsContext } from "../../contexts/WordsContext";
import { useState, useContext, useEffect } from "react";
import * as cx from "classnames";

export default function Error(props) {
  const { errorMessage } = useContext(WordsContext);
  const [shown, setShown] = useState(true);
  const classError = cx(styles.Error, {
    [styles.ErrorShow]: errorMessage && shown,
  });

  useEffect(() => {
    setTimeout(function () {
      setShown(false);
    }, 5000);
  }, []);

  return (
    <div className={styles.Container}>
      <div className={classError}>
        <p className={styles.Text}>
          <strong>Ошибка:</strong> {errorMessage}
        </p>
      </div>
    </div>
  );
}
