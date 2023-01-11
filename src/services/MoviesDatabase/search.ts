import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store'

export const searchApi = createApi({
    reducerPath:'searchApi', 
    tagTypes:['search'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://moviesdatabase.p.rapidapi.com',
        prepareHeaders: (headers, store) => {
            headers.set( 'X-RapidAPI-Key', `c448da5249msh0c0cd058b531996p13835cjsnd44b48a1777f`)
            headers.set( 'X-RapidAPI-Host', `moviesdatabase.p.rapidapi.com`)
        },
    }),
    endpoints: (build) => ({
        search: build.query<any, string>({query:(keyword) => ({ url: `/search/keyword/${keyword}` }),}),
    }),
})

export const { useSearchQuery } = searchApi
