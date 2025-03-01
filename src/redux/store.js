import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { authReduce } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
        auth: authReducer,
    },
      
});
