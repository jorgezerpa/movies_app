import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BackButton } from 'components/BackButton'
import { useGetMovieQuery } from 'services/MoviesDatabase/Movies'
import { Loader2 } from 'components/loaders/Loader2'

const MovieDetail = () => {
    const router = useRouter()
    const { data, isSuccess, isFetching } = useGetMovieQuery(router.query.movieId as string)

    return (
        <>
            { isFetching ? <Loader2 /> : (
                <div className='pt-10 px-5'>
                    <BackButton />
                    { isSuccess && (
                        <div className='flex mt-10'>
                            <div className='relative min-w-[250px] w-[250px] h-[350px] bg-gray-500'>
                                { data.results.primaryImage && <Image sizes='100%' src={data.results.primaryImage.url} alt='' fill style={{ objectFit:'cover' }} />}
                            </div>
                            <div className='px-3'>
                                <p className='font-bold text-2xl'>{data.results.titleText?.text}</p>
                                <p className='font-thin mb-5'>{data.results.releaseYear?.year}</p>
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut nulla reprehenderit modi quam iusto vero, ratione sequi, ab optio rerum quis cum. Laborum perferendis, aut ad incidunt quisquam optio.</p>
                                <div className='flex mt-5 w-full'>
                                    <button className='px-5 py-2 font-bold text-white bg-green-700 rounded-xl'>Buy</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) }
        </>
    )
}

export default MovieDetail