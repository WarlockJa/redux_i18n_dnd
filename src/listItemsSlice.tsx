import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./app/store"

const initialState = {
    listItems: ['A', 'B', 'C']
}

export const listItemsSlice = createSlice({
    name: 'listitems',
    initialState: initialState,
    reducers: {
        setListItems: (state, action: PayloadAction<string[]>) => {
            state.listItems = action.payload
        }
    },
})

export const {
    setListItems
} = listItemsSlice.actions

export default listItemsSlice.reducer

export const selectListItems = (state: RootState) => state.listItems.listItems