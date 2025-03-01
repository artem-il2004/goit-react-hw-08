import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logOut,  refreshUser, registerThunk } from "./operations";

const initialState = {
user: {

        name: null,
        email: null,

    },
token: null,
isLoggedIn: false,
isRefreshing: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => { 
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true;
        })
            .addCase(registerThunk.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.token = null;
                console.error("Registration failed:", action.payload);
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isLoggedIn = true
            })
            .addCase(logOut.fulfilled, () => initialState) //logOut fulfielled 
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
    state.user = action.payload; 
    state.isLoggedIn = true;
    state.isRefreshing = false;
})
            .addCase(refreshUser.rejected, (state) => {
                state.isLoggedIn = false;
                state.isRefreshing = false
            });   
    }
})

export const authReducer = slice.reducer; 