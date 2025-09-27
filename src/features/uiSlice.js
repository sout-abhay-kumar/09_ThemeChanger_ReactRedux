import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState: {
        bgColor: "white",
        text: "Hello",
    },
    reducers: {
        toggleBg: (state) => {
            state.bgColor = state.bgColor === "white" ? "blue" : "white";
        },
        toggleTxt: (state) => {
            state.text = state.text === "Hello" ? "Goodbye" : "Hello";
        },
    },
})

export const { toggleBg, toggleTxt } = uiSlice.actions;
export default uiSlice.reducer;