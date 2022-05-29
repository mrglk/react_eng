import styles from "./GamePage.module.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function GamePage(props) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [index, setIndex] = useState(0);
  const [change, setChange] = useState(false);
  const [checked, setCheked] = useState(false);

  const Words = props.words;

  const handleClick = () => {
    setCheked(!checked);
  };

  const checkIndex = (index) => {
    if (index < 0) {
      return (index = Words.length - 1);
    } else if (index >= Words.length) {
      return (index = 0);
    }
    return index;
  };

  const handleButtons = (step = 1) => {
    const newIndex = checkIndex(index + step);
    setChange(true);

    setTimeout(() => {
      setIndex(newIndex);
      setCheked(false);
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
  }, [location]);

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
        <div className={styles.CountWrapper}>
          <span className={styles.Count}>{index + 1}</span> /{" "}
          <span className={styles.Count}>{Words.length}</span>
        </div>
      </div>
    );
  }

  return <div className={styles.Wrapper_error}>Нет данных :(</div>;
}
