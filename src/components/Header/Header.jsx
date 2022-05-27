import styles from "./Header.module.scss";
import WordsPage from "../WordsPage/WordsPage";
import GamePage from "../GamePage/GamePage";
import Words from "../../words.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <p className={styles.Link}>
          <Link to="/game">Game</Link>
        </p>
        <p className={styles.Link}>
          <Link to="/">Words</Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
