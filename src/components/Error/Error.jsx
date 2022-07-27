import styles from "./Error.module.scss";
import { useState, useEffect } from "react";
import * as cx from "classnames";
import { useSelector } from "react-redux";

export default function Error() {
  const errorMessage = useSelector(({ words }) => words.errorMessage);
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
