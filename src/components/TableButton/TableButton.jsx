import styles from "./TableButton.module.scss";

function TableButton(props) {
  return (
    <button className={styles.TableButton}>
      <div className={styles.ImgWrapper}>
        <img className={styles.Img} alt={props.alt} src={props.img}></img>
      </div>
    </button>
  );
}

export default TableButton;
