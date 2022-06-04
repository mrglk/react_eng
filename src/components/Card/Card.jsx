import styles from "./Card.module.scss";
import * as cx from "classnames";
import { useRef, useEffect, useState } from "react";

function Card(props) {
  const classCard = cx(styles.CardWrapper, {
    [styles.CardHidden]: props.changed,
  });
  const ref = useRef();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  const handleClick = () => {
    setChecked(!checked);
    props.showTranslation();
  };

  return (
    <div className={classCard}>
      <div className={styles.Card}>
        <div className={styles.Word}>
          <span className={styles.English}>{props.english}</span>
          <span className={styles.Transcription}>{props.transcription}</span>
        </div>
        <div className={styles.ButtonWrapper}>
          {!checked ? (
            <button className={styles.Button} onClick={handleClick} ref={ref}>
              Check
            </button>
          ) : (
            <div className={styles.Russian}>
              <span>{props.russian}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
