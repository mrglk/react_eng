import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import CustomLink from "../CustomLink/CustomLink";

function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <Link to="/">
          <img className={styles.Logo} alt="Logo" src={Logo} />
        </Link>
        <div className={styles.LinksWrapper}>
          <CustomLink className={styles.Link} to="/">
            Words
          </CustomLink>
          <CustomLink className={styles.Link} to="/game">
            Game
          </CustomLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
