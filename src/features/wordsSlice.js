import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
let url = "https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words";

const initialState = {
    words: [],
    isLoading: true,
    isDeleting: false,
    deleteId: null,
    errorMessage: null
}

export const fetchWords = createAsyncThunk('words/fetchWords', async (_, {rejectWithValue, dispatch}) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Сервер недоступен!`);
          }
          const data = await response.json();
        return data
        } catch(error) {
            rejectWithValue(error.message)
        }
})

export const deleteWord = createAsyncThunk('words/deleteWord', async (id, {rejectWithValue, dispatch}) => {
    try {
        const response = await fetch(`${url}/${id}/delete`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error(`Сервер недоступен!`);
        }
        dispatch(removeWord({id}));
        } catch(error) {
            rejectWithValue(error.message)
        }
})

export const addNewWord = createAsyncThunk('words/addNewWord', async (word, {rejectWithValue, dispatch}) => {
    try {
        const response = await fetch(`${url}/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        });
        if (!response.ok) {
            throw new Error(`Сервер недоступен!`);
        }
        const data = await response.json();
        dispatch(addWord(data));
        } catch(error) {
            rejectWithValue(error.message)
        }
})

export const editWord = createAsyncThunk('words/editWord', async (word, {rejectWithValue, dispatch}) => {
    try {
        const response = await fetch(`${url}/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        });
        if (!response.ok) {
            throw new Error(`Сервер недоступен!`);
        }
        dispatch(modifyWord(word));
        } catch(error) {
            rejectWithValue(error.message)
        }
})

const wordsSlice = createSlice({
    name: 'words',
    initialState: initialState,
    reducers: {
        removeWord(state, action) {
            state.words = state.words.filter(word => word.id !== action.payload.id)
            state.deleteId = null;
            state.isDeleting = false;
        },
        addWord(state, action) {
            state.words.push(action.payload);
        },
        modifyWord(state, action) {
            state.words = state.words.map(word => word.id === action.payload.id ? action.payload : word)
        },
        addError(state, action) {
            state.errorMessage = action.payload;
        },
        addDeleteModal(state, action) {
            state.deleteId = action.payload;
            state.isDeleting = true;
        },
        removeDeleteModal(state) {
            state.deleteId = null;
            state.isDeleting = false;
        },
    },
    extraReducers: {
        [fetchWords.pending]: (state) => {
            state.isLoading = true
        },
        [fetchWords.fulfilled]: (state, action) => {
            state.isLoading = false
            state.words = action.payload
            state.errorMessage = null
        },
        [fetchWords.rejected]: (state, action) => {
            state.isLoading = false
            state.words = []
            state.errorMessage = action.payload
        }
    }
})

export const {removeWord, addWord, modifyWord, addError, addDeleteModal, removeDeleteModal} = wordsSlice.actions;
export default wordsSlice.reducer
