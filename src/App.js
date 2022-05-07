import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsPage from "./components/WordsPage/WordsPage";
import Card from "./components/Card/Card";
import { useState } from "react";

function App() {
  const [checked, setCheked] = useState(false);

  const handleClick = () => {
    setCheked(!checked);
  }

  return (
    <div className={styles.App}>
      <Header></Header>
      <Card
       key="1"
       english="Carrort"
       transcription="[ ˈkærət ]"
       russian="Морковь"
       checked={checked}
       onClick={handleClick}
       />
      <WordsPage></WordsPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
