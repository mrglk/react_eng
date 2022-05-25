import styles from "./Card.module.scss";
import * as cx from "classnames";

export default function Card(props) {
  const classCard = cx(styles.CardWrapper, {
    [styles.CardHidden]: props.changed,
  });

  return (
    <div className={classCard}>
      <div className={styles.Card}>
        <div className={styles.Word}>
          <span className={styles.English}>{props.english}</span>
          <span className={styles.Transcription}>{props.transcription}</span>
        </div>
        <div className={styles.ButtonWrapper}>
          {!props.checked ? (
            <button className={styles.Button} onClick={props.onClick}>
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
