import React from 'react'
import { SearchResult } from './SearchResult'
import { useAppSelector } from 'hooks/rtkHooks'
import { MoviesResult } from './MoviesResult'

export const Movies = () => {
    const search = useAppSelector(state=>state.searchSlice)

    return (
        <>
            {search.searchValue.length>0 
                ? <SearchResult />
                : <MoviesResult />
            }
            
        </>
    )
}
