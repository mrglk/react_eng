import { makeAutoObservable, runInAction } from "mobx";
let url = "http://itgirlschool.justmakeit.ru/api/words";

export default class WordsStore {
    words = [];
    isLoading = true;
    isDeleting = false;
    deleteId = null;
    errorMessage = null;
    constructor() {
        makeAutoObservable(this);
    }
    getWords = async () => {
        this.isLoading = true;
        fetch(url)
        .then((response) => {
            if (!response.ok) {
              throw new Error(`Сервер недоступен!`);
            }
            return response.json();
          })
        .then((response) => {
            runInAction(() => {
                this.words = response;
            })
          })
        
        .catch((errors) => runInAction(() => {
            this.words = [];
            this.errorMessage = errors.message
        }))
        .finally(() => {
        runInAction(() => {
            this.isLoading = false;
            })
          });
    }

    editWords = async (word) => {
        fetch(`${url}/${word.id}/update`, {
          method: "POST",
          body: JSON.stringify(word),
        })
          .then(() => {
            this.getWords();
          })
          .catch((errors) => this.errorMessage = errors.message)
          .finally(() => {});
      }

    deleteWords = async (id) => {
        fetch(`${url}/${id}/delete`, {
          method: "POST",
        })
          .then(() => {
            this.getWords();

            runInAction(() => {
              this.deleteId = null;
              this.isDeleting = false;
              })
          })
          .catch((errors) => this.errorMessage = errors.message)
          .finally(() => {});
      }
    
    addWord = async (word) => {
        fetch(`${url}/add`, {
          method: "POST",
          body: JSON.stringify(word),
        })
          .then(() => {
            this.getWords();
          })
          .catch((errors) => this.errorMessage = errors.message)
          .finally(() => {});
      }
    
    addError = (message) => {
        this.errorMessage = message;
      }

    addDeleteModal = (id) => {
      runInAction(() => {
        this.deleteId = id;
        this.isDeleting = true;
        })
      }
    }