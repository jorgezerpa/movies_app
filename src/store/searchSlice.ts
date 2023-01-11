import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface filterState {
    isSearching:boolean,
    searchValue:string
}

const initialState: filterState = {
    isSearching:false,
    searchValue:''
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setIsSearching : (state, action:PayloadAction<{ value:boolean }>) => { state.isSearching = action.payload.value },
    setSearchValue : (state, action:PayloadAction<{ value:string }>) => { 
        state.searchValue = action.payload.value
    },
  }
})

export const { setIsSearching, setSearchValue } = searchSlice.actions

export const selectSearch = (state: RootState) => state.searchSlice

export default searchSlice.reducer
