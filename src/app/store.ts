import { configureStore } from "@reduxjs/toolkit";
import listItemsReducer from "../listItemsSlice";

export const store = configureStore({
    reducer: {
        listItems: listItemsReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch