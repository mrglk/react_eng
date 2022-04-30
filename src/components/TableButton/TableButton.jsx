import styles from "./TableButton.module.scss";

function TableButton(props) {
  return (
    <button class={styles.TableButton}>
      <div class={styles.ImgWrapper}>
        <img class={styles.Img} alt={props.alt} src={props.img}></img>
      </div>
    </button>
  );
}

export default TableButton;
