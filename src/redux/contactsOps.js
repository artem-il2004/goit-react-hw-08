import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// https://67b8fd2c51192bd378dc610f.mockapi.io/contacts





export const fetchContacts = createAsyncThunk('contacts/fetchData', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('https://67b8fd2c51192bd378dc610f.mockapi.io/contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact =  createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        await axios.delete(`https://67b8fd2c51192bd378dc610f.mockapi.io/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const addContact = createAsyncThunk('contacts/addContact', async(body,thunkAPI) => { 
try {
    const { data } = await axios.post(`https://67b8fd2c51192bd378dc610f.mockapi.io/contacts/`, body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})