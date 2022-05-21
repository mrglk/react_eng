import styles from "./GamePage.module.scss";
import Card from "../Card/Card";
// import Words from "../../words.json";
import { useState } from "react";

export default function GamePage({ id = 1, english = "Error", transcription = "|ˈerər|", russian = "Ошибка", chosenCard = 0, words = [...words] }) {
    const [checked, setCheked] = useState(false);
    const handleClick = () => {
        setCheked(!checked);
    }

    const [index, setIndex] = useState(chosenCard);

    const handleButtons = (direction) => {
        let newIndex = index;
        switch (direction) {
            case 'next':
                ++newIndex;
                break;
            case 'back':
                --newIndex;
                break;
            default:
                ++newIndex;
        }

        if (newIndex < 0) {
            newIndex = words.length - 1;
        } else if (newIndex >= words.length) {
            newIndex = 0;
        }

        setIndex(newIndex);
        setCheked(false);
    }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Slider}>
                <button className={styles.Buttons} onClick={() => handleButtons("back")}> &lt; </button>
                <Card
                    key={words[index].id}
                    english={words[index].english}
                    transcription={words[index].transcription}
                    russian={words[index].russian}
                    checked={checked}
                    onClick={handleClick} />

                <button className={styles.Buttons} onClick={() => handleButtons("next")}> &gt; </button>
            </div>
            <div className={styles.CountWrapper}><span className={styles.Count}>{index + 1}</span> / <span className={styles.Count}>{words.length}</span></div>
        </div>
    )
}