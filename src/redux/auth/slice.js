import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logOutThunk, refreshUser, registerThunk } from "./operations";

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
                state.isLoggedIn = true;
            })
            .addCase(logOutThunk.fulfilled, () => initialState)
.addCase(refreshUser.fulfilled, (state, action) => { 
    state.user = action.payload.user;
    state.isLoggedIn = true;

})
.addCase(refreshUser.rejected, (state) => {
    state.isLoggedIn = false;

});
    }
})

export const authReducer = slice.reducer; 