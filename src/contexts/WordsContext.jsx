import React, { useState, useEffect } from "react";
const WordsContext = React.createContext();

function WordsContextProvider(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getWords();
  }, []);

  function getWords() {
    setLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Сервер недоступен!`);
        }
        return response.json();
      })
      .then((response) => {
        setWords(response);
      })
      .catch((errors) => setErrorMessage(errors.message))
      .finally(() => {
        setLoading(false);
      });
  }

  function editWords(word) {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
      method: "POST",
      body: JSON.stringify(word),
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setErrorMessage(errors.message))
      .finally(() => {});
  }

  function deleteWords(id) {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: "POST",
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setErrorMessage(errors.message))
      .finally(() => {});
  }

  function addWord(word) {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
      method: "POST",
      body: JSON.stringify(word),
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setErrorMessage(errors.message))
      .finally(() => {});
  }

  function addError(message) {
    setErrorMessage(message);
  }

  setTimeout(function () {
    setErrorMessage(null);
  }, 7000);

  return (
    <WordsContext.Provider
      value={{
        words,
        loading,
        errorMessage,
        addError,
        editWords,
        deleteWords,
        addWord,
      }}>
      {props.children}
    </WordsContext.Provider>
  );
}

export { WordsContext, WordsContextProvider };
