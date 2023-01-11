import React from 'react'
import { useSearchQuery } from 'services/MoviesDatabase/search'
import { useAppSelector } from 'hooks/rtkHooks'
import { MovieCard } from './MovieCard'
import { Loader } from './loaders/Loader'
import { HiOutlineEmojiSad } from 'react-icons/hi'

export const SearchResult = () => {
    const search = useAppSelector(state=>state.searchSlice)
    const { data, isSuccess, isFetching } = useSearchQuery(search.searchValue)

    return (
        <>
        { isFetching ? <Loader /> : (
            <>
            <div className='pl-3 py-10'>
                    <div className='flex gap-1 text-white'>
                        <p className='font-bold text-2xl'>Results for: </p>
                        <p className=' text-2xl'>{search.searchValue}</p>
                    </div>
            </div>
            <div className='flex justify-center flex-center flex-wrap gap-10 px-4 sm:px-10'>
                {(isSuccess && data.results.length>0) && data.results.map((movie:any)=><div key={'searchedMoviesGrid'+movie.id}><MovieCard movie={movie}/></div>  )}
                {(isSuccess && data.results.length<=0) && <div className='flex justify-center items-center flex-col py-20'><HiOutlineEmojiSad color='white' size={100} /><p className='font-bold text-white text-2xl'>Ups! no matches</p></div> }
            </div>
            </>
        )}
        </>
    )
}
