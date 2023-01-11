import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './filtersSlice'
import { moviesApi } from 'services/MoviesDatabase/Movies'
import { actorsApi } from 'services/MoviesDatabase/actors'
import { filtersApi } from 'services/MoviesDatabase/filters'
import { searchApi } from 'services/MoviesDatabase/search'

export const store = configureStore({
  reducer: {
    [filterSlice.name]:filterSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [actorsApi.reducerPath]: actorsApi.reducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
        .concat(moviesApi.middleware)
        .concat(actorsApi.middleware)  
        .concat(filtersApi.middleware)  
        .concat(searchApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
