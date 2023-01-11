import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const MovieCard = ({movie}:{movie:any}) => {
    const router = useRouter()
    const handleClickToDetail = () => router.push(`/detail/${movie.id}`)
    
    return (
        <div className='w-[200px]' onClick={handleClickToDetail}>
            <div className='relative w-[200px] h-[300px] mb-2 bg-gray-500 shadow-lg shadow-black'>
                { movie.primaryImage && <Image sizes='100%' src={movie.primaryImage.url} alt='' fill style={{ objectFit:'cover' }} />}
            </div>
            <p className='font-bold text-white'>{movie.titleText?.text}</p>
            <p className='font-thin text-gray-200'>{movie.releaseYear?.year}</p>
        </div>
    )
}
