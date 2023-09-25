import {combineReducers, configureStore} from "@reduxjs/toolkit";
import searchReducer from './slices/searchSlice'
import sheduleReducer from './slices/sheduleCurrentSlice'


const rootReducer = combineReducers({
    searchReducer,
    sheduleReducer
})

const store = configureStore({
    reducer: rootReducer

})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch