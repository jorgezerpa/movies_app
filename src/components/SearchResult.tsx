import React from 'react'
import Image from 'next/image'
import { useSearchQuery } from 'services/MoviesDatabase/search'
import { useAppSelector } from 'hooks/rtkHooks'
import { MovieCard } from './MovieCard'

export const SearchResult = () => {
    const search = useAppSelector(state=>state.searchSlice)
    const { data, isSuccess } = useSearchQuery(search.searchValue)

    return (
        <>
        <div className='pl-3 py-10'>
                <div className='flex gap-1 text-white'>
                    <p className='font-bold text-2xl'>Results for: </p>
                    <p className=' text-2xl'>{search.searchValue}</p>
                </div>
        </div>
            <div className='flex justify-center flex-center flex-wrap gap-10 px-4 sm:px-10'>
                {isSuccess && data.results.map((movie:any)=><div key={'searchedMoviesGrid'+movie.id}><MovieCard movie={movie}/></div>  )}
            </div>
        </>
    )
}
