import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsPage from "./components/WordsPage/WordsPage";
import GamePage from "./components/GamePage/GamePage";
import Words from "./words.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className={styles.App}>
          <Header />
          <Routes>
          <Route path="/" element={<WordsPage />} />
          <Route path="/game" element={<GamePage words={Words} />} />
        </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
