import {createSlice} from '@reduxjs/toolkit';
import Authenticate from "./login.service";

const initialState = {
    authenticated: false,
};


export const loginReducer = createSlice({
    name: 'login',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state) => {

            console.log('dffffdf');
            Authenticate().then(auth => {
                state.authenticated = auth
                console.log("authenticate: " + state.authenticated)
            })
                .catch((e) => {
                    console.dir(e);
                    console.log(`keycloak init exception: ${e}`);
                });

        },
        logout: (state) => {
            state.authenticated = false;
        },

    },

});

export const {login, logout} = loginReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const isAuthenticated = (state) => state.login.authenticated;


export default loginReducer.reducer;
