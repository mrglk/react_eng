import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsPage from "./components/WordsPage/WordsPage";
import GamePage from "./components/GamePage/GamePage";
import NoMatch from "./components/NoMacth/NoMatch";
import {
  HashRouter as Router,
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
            <Route path="/game" element={<GamePage/>} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
