import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store'
import type { filterState } from 'store/filtersSlice'

export const moviesApi = createApi({
    reducerPath:'moviesApi', 
    tagTypes:['movies'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://moviesdatabase.p.rapidapi.com',
        prepareHeaders: (headers, store) => {
            headers.set( 'X-RapidAPI-Key', `c448da5249msh0c0cd058b531996p13835cjsnd44b48a1777f`)
            headers.set( 'X-RapidAPI-Host', `moviesdatabase.p.rapidapi.com`)
        },
    }),
    endpoints: (build) => ({
        getMovies: build.query<any, filterState>({
            query: (filter)=>({
                 url: '/titles',
                 params:(!filter.genre && !filter.list && !filter.titleType) ? { list:'most_pop_movies' } : filter 
            })
        }),
        getMovie: build.query<any, string>({query:(id) => ({ url: `/titles/${id}`})}),

    }),
})

export const { useGetMovieQuery, useGetMoviesQuery } = moviesApi
