import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsPage from "./components/WordsPage/WordsPage";
import GamePage from "./components/GamePage/GamePage";
// import Card from "./components/Card/Card";
// import { useState } from "react";
import Words from "./words.json";

function App() {
  // console.log(Words)
  // let word = JSON.parse(Words);
  // console.log(word)
  return (
    <div className={styles.App}>
      <Header />
      <GamePage words={Words}/>
      <WordsPage />
      <Footer />
    </div>
  );
}

export default App;
