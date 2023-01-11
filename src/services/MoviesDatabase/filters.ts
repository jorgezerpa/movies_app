import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store'

export const filtersApi = createApi({
    reducerPath:'filtersApi', 
    tagTypes:['filters'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://moviesdatabase.p.rapidapi.com',
        prepareHeaders: (headers, store) => {
            headers.set( 'X-RapidAPI-Key', `c448da5249msh0c0cd058b531996p13835cjsnd44b48a1777f`)
            headers.set( 'X-RapidAPI-Host', `moviesdatabase.p.rapidapi.com`)
        },
    }),
    endpoints: (build) => ({
        getTitleTypes: build.query<string[], void>({query:() => ({ url: `/titles/utils/titleTypes` }), transformResponse:(res:any)=>res.results}),
        getLists: build.query<string[], void>({query:() => ({ url: `/titles/utils/lists` }), transformResponse:(res:any)=>res.results}),
        getGenres: build.query<string[], void>({query:() => ({ url: `/titles/utils/genres` }), transformResponse:(res:any)=>res.results}),
    }),
})

export const { useGetGenresQuery, useGetListsQuery, useGetTitleTypesQuery } = filtersApi
