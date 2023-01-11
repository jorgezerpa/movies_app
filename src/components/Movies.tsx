import React from 'react'
import { SearchResult } from './SearchResult'
import { useGetMoviesQuery } from 'services/MoviesDatabase/Movies'
import { useNotNullFilters } from 'hooks/useNotNullFilters'
import { useAppSelector } from 'hooks/rtkHooks'
import { TitleBar } from 'components/TitleBar'
import { MovieCard } from './MovieCard'

export const Movies = () => {
    const filters = useNotNullFilters()
    const { data, isSuccess } = useGetMoviesQuery(filters)
    const search = useAppSelector(state=>state.searchSlice)

    return (
        <>
            {search.searchValue.length>0 
                ? <SearchResult />
                : (
                    <>
                        <TitleBar />
                        <div className='flex justify-center flex-center flex-wrap gap-10 px-4 sm:px-10'>
                            {isSuccess && data.results.map((movie:any)=> <div key={'moviesGrid'+movie.id}><MovieCard movie={movie} /></div> )}
                        </div>
                    </>
                )
            }
            
        </>
    )
}
