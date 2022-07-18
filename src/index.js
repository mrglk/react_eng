import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/common.scss";
import "./styles/normalize.css";
import WordsStore from "./stores/WordsStore";
import { Provider } from "mobx-react";

const store = {
  wordsStore: new WordsStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
