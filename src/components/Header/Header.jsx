import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <a className={styles.Link} href="../GamePage/GamePage.jsx">
          Game
        </a>
        <a className={styles.Link} href="../WordsPage/WordsPage.jsx">
          Words
        </a>
      </div>
    </div>
  );
}

export default Header;
