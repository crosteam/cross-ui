import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginSlice from "../features/login/login.reducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginSlice,
    },
});
