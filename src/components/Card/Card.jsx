import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={styles.CardWrapper}>
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
