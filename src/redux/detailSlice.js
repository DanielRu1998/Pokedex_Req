import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    moves: [],
    abilities: [],
    image: ''
};

export const detailSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        storePoke: (state, action) => {
            const {name = '', moves = [], abilities = [], sprites = {front_default: ''}} = action.payload;
            state.name = name;
            state.moves = moves;
            state.abilities = abilities;
            state.image = sprites.front_default;
        }
    }
});

export const { storePoke } = detailSlice.actions;
export default detailSlice.reducer;

