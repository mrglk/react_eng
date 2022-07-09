import React, { useState, useEffect } from "react";
const WordsContext = React.createContext();

function WordsContextProvider(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWords();
  }, []);

  function getWords() {
    // setLoading(true);
    fetch("/api/words")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Сервер недоступен!`);
        }
        return response.json();
      })
      .then((response) => {
        setWords(response);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setLoading(false);
      });
  }

  function editWords(word) {
    fetch(`/api/words/${word.id}/update`, {
      method: "POST",
      body: JSON.stringify(word),
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors))
      .finally(() => {});
  }

  function deleteWords(id) {
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors))
      .finally(() => {});
  }

  function addWord(word) {
    fetch(`/api/words/add`, {
      method: "POST",
      body: JSON.stringify(word),
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors))
      .finally(() => {});
  }

  return (
    <WordsContext.Provider
      value={{ words, loading, error, editWords, deleteWords, addWord }}>
      {props.children}
    </WordsContext.Provider>
  );
}

export { WordsContext, WordsContextProvider };
