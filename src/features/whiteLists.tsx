import { createSlice } from "@reduxjs/toolkit";

const whiteLists = createSlice({
    name: "whiteLists",
    initialState: {
        token: '',
    },
    reducers: {
        saveUser: (state, action) => {
            state.token = action.payload?.custom_token;
        },
    }
});

export const { saveUser } = whiteLists.actions;
export default whiteLists.reducer;