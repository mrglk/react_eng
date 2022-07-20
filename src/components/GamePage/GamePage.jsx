import styles from "./GamePage.module.scss";
import Card from "../Card/Card";
import { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { inject, observer } from "mobx-react";

function GamePage({ wordsStore }) {
  const words = wordsStore.words;
  const [searchParams, setSearchParams] = useSearchParams();
  const [index, setIndex] = useState(0);
  const [change, setChange] = useState(false);
  const [learnedWords, setLearnedWords] = useState([]);

  const handleClick = (id) => {
    if (learnedWords.length === 0 || !learnedWords.includes(Number(id))) {
      setLearnedWords([...learnedWords, Number(id)]);
    }
  };

  const checkIndex = useCallback(
    (index) => {
      if (index < 0) {
        return (index = words.length - 1);
      } else if (index >= words.length) {
        return (index = 0);
      }
      return index;
    },
    [words]
  );

  const handleButtons = (step = 1) => {
    const newIndex = checkIndex(index + step);
    setChange(true);

    setTimeout(() => {
      setIndex(newIndex);
    }, 100);

    setTimeout(() => {
      setChange(false);
    }, 130);

    setSearchParams({ index: newIndex });
  };

  useEffect(() => {
    wordsStore.getWords();
  }, []);

  useEffect(() => {
    const index = searchParams.get("index");
    const newIndex = checkIndex(Number(index));
    setIndex(newIndex);
  }, [checkIndex, searchParams]);

  if (words.length) {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Slider}>
          <button className={styles.Buttons} onClick={() => handleButtons(-1)}>
            {" "}
            <span>&lt; </span>
          </button>
          <Card
            key={words[index].id}
            english={words[index].english}
            transcription={words[index].transcription}
            russian={words[index].russian}
            showTranslation={() => handleClick(words[index].id)}
            changed={change}
          />
          <button className={styles.Buttons} onClick={() => handleButtons(1)}>
            {" "}
            &gt;{" "}
          </button>
        </div>

        <div className={styles.CountWrapper}>
          <span>{index + 1}</span> / <span>{words.length}</span>
        </div>
        <div className={styles.LearnedWrapper}>
          <span>Learned: </span>
          <span>{learnedWords.length}</span>
        </div>
      </div>
    );
  }

  return <div className={styles.Wrapper_error}>Нет данных :(</div>;
}

export default inject(["wordsStore"])(observer(GamePage));
