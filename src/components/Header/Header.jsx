import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <Link to="/">
          <img className={styles.Logo} alt="Logo" src={Logo}></img>
        </Link>
        <div className={styles.LinksWrapper}>
          <Link className={styles.Link} to="/">
            Words
          </Link>
          <Link className={styles.Link} to="/game">
            Game
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
