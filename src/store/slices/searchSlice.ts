import {createSlice} from '@reduxjs/toolkit'

type Search = {
    open: boolean
}

const initialState: Search = {
    open: false
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        searchHandler(state) {
            state.open = true
        },
        closeSearch(state) {
            state.open = false
        }
    }
})

export const {searchHandler, closeSearch} = searchSlice.actions
export default searchSlice.reducer