import { createSlice } from '@reduxjs/toolkit';

const BusketSlice = createSlice({
    name: 'Busket',
    initialState: {
        value: 5,
    },
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
    },
})

export const {increment, decrement} = BusketSlice.actions

export default BusketSlice.reducer;