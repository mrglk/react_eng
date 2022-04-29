import styles from "./App.module.scss";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import WordsPage from "./components/WordsPage/WordsPage"


function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <WordsPage></WordsPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
