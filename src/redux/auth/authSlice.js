import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        name: '',
        email: '',

    },
    token: '',
    isLoggedIn: '',
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})

export const authReducer = slice.reducer; 