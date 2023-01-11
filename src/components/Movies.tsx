import React from 'react'
import Image from 'next/image'
import { useGetMoviesQuery } from 'services/MoviesDatabase/Movies'
import { useNotNullFilters } from 'hooks/useNotNullFilters'

export const Movies = () => {
    const filters = useNotNullFilters()
    const { data, isSuccess } = useGetMoviesQuery(filters)
    console.log(data)

    return (
        <div className='flex justify-center flex-center flex-wrap gap-10 px-4 sm:px-10'>
            {isSuccess && data.results.map((movie:any)=>(
                <div key={'moviesGrid'+movie.id} className='w-[200px]'>
                    <div className='relative w-[200px] h-[300px] bg-gray-500'>
                        { movie.primaryImage && <Image sizes='100%' src={movie.primaryImage.url} alt='' fill style={{ objectFit:'cover' }} />}
                    </div>
                    <p className='font-bold text-white'>{movie.titleText.text}</p>
                    <p className='font-thin text-gray-200'>{movie.releaseYear.year}</p>
                </div>
            ))}
        </div>
    )
}
