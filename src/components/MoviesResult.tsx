import React from 'react'
import { useGetMoviesQuery } from 'services/MoviesDatabase/Movies'
import { TitleBar } from 'components/TitleBar'
import { MovieCard } from './MovieCard'
import { useNotNullFilters } from 'hooks/useNotNullFilters'
import { Loader } from './loaders/Loader'

export const MoviesResult = () => {
    const filters = useNotNullFilters()
    const { data, isSuccess, isFetching } = useGetMoviesQuery(filters)

    return (
        <>
        { isFetching ? <Loader /> : (
            <>
                <TitleBar />
                    <div className='flex justify-center flex-center flex-wrap gap-10 px-4 sm:px-10'>
                        {isSuccess && data.results.map((movie:any)=> <div key={'moviesGrid'+movie.id}><MovieCard movie={movie} /></div> )}
                    </div>
            </>
        )}
        </>
    )
}
