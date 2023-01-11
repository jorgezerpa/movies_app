import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store/store'

export const actorsApi = createApi({
    reducerPath:'actorsApi', 
    tagTypes:['actors'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://moviesdatabase.p.rapidapi.com',
        prepareHeaders: (headers, store) => {
            headers.set( 'X-RapidAPI-Key', `c448da5249msh0c0cd058b531996p13835cjsnd44b48a1777f`)
            headers.set( 'X-RapidAPI-Host', `moviesdatabase.p.rapidapi.com`)
        },
    }),
    endpoints: (build) => ({
        getActor: build.query<any, string>({query:(id) => ({ url: `/actors/${id}` }),}),
    }),
})

export const { useGetActorQuery } = actorsApi
