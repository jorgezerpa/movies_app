import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface filterState {
    titleType: string|null,
    genre: string|null,
    list: string|null,
}

const initialState: filterState = {
    titleType: null,
    genre: null,
    list: null,
}

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    filterbyTitleType:(state, action:PayloadAction<{ type:string }>) => {
        state.titleType=action.payload.type //not confuse with action.type
        state.genre=null
        state.list=null
    },
    filterbyGenre:(state, action:PayloadAction<{ genre:string }>) => {
        state.titleType=null 
        state.genre=action.payload.genre
        state.list=null
    },
    filterbyList:(state, action:PayloadAction<{ list:string }>) => {
        state.titleType=null 
        state.genre=null
        state.list=action.payload.list
    },
    clearFilters:(state) => {
        state.titleType=null 
        state.genre=null
        state.list=null
    },
  }
})

export const { filterbyGenre, filterbyList, filterbyTitleType, clearFilters } = filterSlice.actions

export const selectFilters = (state: RootState) => state.filterSlice

export default filterSlice.reducer
