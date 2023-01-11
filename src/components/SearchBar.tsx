import React, {SyntheticEvent, useRef, useState, useEffect } from 'react'
import { useAppDispatch } from 'hooks/rtkHooks'
import { setSearchValue } from 'store/searchSlice'

interface BaseInputInterface{
    name:string, 
    type:'email'|'text'|'number',
    placeholder?:string,
    defaultValue?:string|number
}

export const SearchBar = ({name, type, placeholder="", defaultValue}:BaseInputInterface) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const handleChange = (e:SyntheticEvent) => {
        const value = inputRef.current?.value as string
        dispatch(setSearchValue({value:value}))
    }

    return (
        <input 
            onChange={handleChange}
            ref={inputRef}
            defaultValue={defaultValue && defaultValue}
            className='border-gray-300 border-2 rounded-xl w-full p-1 outline-none' 
            name={name} 
            type={type} 
            placeholder={placeholder} 
        />
    )
}
