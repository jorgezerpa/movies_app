import React from 'react'
import { useNotNullFilters } from 'hooks/useNotNullFilters'

export const TitleBar = () => {
    const filter = useNotNullFilters()

    return (
        <div className='pl-3 py-10'>
            { (Object.entries(filter)[0] && Object.entries(filter)[0].length===2) && (
                <div className='flex gap-1 text-white'>
                    <p className='font-bold text-2xl'>{Object.entries(filter)[0][0]}: </p>
                    <p className=' text-2xl'>{Object.entries(filter)[0][1]}</p>
                </div>
            )}
        </div>
    )
}
