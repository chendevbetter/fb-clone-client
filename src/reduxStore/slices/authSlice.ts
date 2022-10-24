import {createSlice} from '@reduxjs/toolkit'
import {createAction} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        id: ''
    },
    reducers: {
        login: (state, action) => {
            state.authenticated = true
            state.id = action.payload
        },
        logout: state => {
            state.authenticated = false
        },
    }
})


export const {login, logout} = authSlice.actions

export default authSlice.reducer