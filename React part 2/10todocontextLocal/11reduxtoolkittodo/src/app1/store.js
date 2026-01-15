import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/todoSliece'
export const store = configureStore({
    reducer: todoReducer
})