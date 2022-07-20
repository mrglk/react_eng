import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className={styles.Button}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
