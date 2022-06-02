import React from "react";
import styles from "./GamePage.module.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function GamePage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [index, setIndex] = useState(0);
  const [change, setChange] = useState(false);
  const [checked, setChecked] = useState(false);
  const [learned, setLearned] = useState(0);

  const Words = props.words;

  const handleClick = () => {
    setChecked(!checked);
    setLearned((learned) => learned + 1);
  };

  const checkIndex = React.useCallback(
    (index) => {
      if (index < 0) {
        return (index = Words.length - 1);
      } else if (index >= Words.length) {
        return (index = 0);
      }
      return index;
    },
    [Words]
  );

  const handleButtons = (step = 1) => {
    const newIndex = checkIndex(index + step);
    setChange(true);

    setTimeout(() => {
      setIndex(newIndex);
      setChecked(false);
    }, 100);

    setTimeout(() => {
      setChange(false);
    }, 130);

    setSearchParams({ index: newIndex });
  };

  useEffect(() => {
    const index = searchParams.get("index");
    const newIndex = checkIndex(Number(index));
    setIndex(newIndex);
  }, [checkIndex, searchParams]);

  // useEffect(() => {
  //   const index = searchParams.get("index");
  //   const newIndex = checkIndex(Number(index));
  //   setIndex(newIndex);
  // }, [checkIndex, searchParams]);

  if (Words) {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Slider}>
          <button className={styles.Buttons} onClick={() => handleButtons(-1)}>
            {" "}
            <span>&lt; </span>
          </button>
          <Card
            key={Words[index].id}
            english={Words[index].english}
            transcription={Words[index].transcription}
            russian={Words[index].russian}
            checked={checked}
            onClick={handleClick}
            changed={change}
          />
          <button className={styles.Buttons} onClick={() => handleButtons(1)}>
            {" "}
            &gt;{" "}
          </button>
        </div>
        <div className={styles.CounttContainer}>
          <div className={styles.CountWrapper}>
            <span className={styles.Count}>{index + 1}</span> /{" "}
            <span className={styles.Count}>{Words.length}</span>
          </div>
          <span className={styles.Count}>Learned: {learned}</span>
        </div>
      </div>
    );
  }

  return <div className={styles.Wrapper_error}>Нет данных :(</div>;
}
