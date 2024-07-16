import { createSlice } from '@reduxjs/toolkit';

import Cookies from 'js-cookie';


const initialState = {
    isAuth: false,
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            Cookies.set('user', JSON.stringify(action.payload), { expires: 7, sameSite: 'strict' });
            console.log("User logged in!");
            return {
                isAuth: true,
                user: action.payload
            }
        },
        logout: (state) => {
            Cookies.remove('user');
            console.log("User logged out!");
            return initialState;
        },
        loadUserFromCookies: (state) => {
            const user = Cookies.get('user');
            if (user) {
                return {
                    isAuth: true,
                    user: JSON.parse(user)
                }
            }

            return initialState;
        }
    }
});



export const { login, logout, loadUserFromCookies } = authSlice.actions;
export default authSlice.reducer;