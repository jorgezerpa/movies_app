import React, {SyntheticEvent, useRef, useState, useEffect } from 'react'
import { useAppDispatch } from 'hooks/rtkHooks'
import { setSearchValue } from 'store/searchSlice'
import { RiCloseFill } from 'react-icons/ri'
import { useAppSelector } from 'hooks/rtkHooks'
import { clearSearch } from 'store/searchSlice'

interface BaseInputInterface{
    name:string, 
    type:'email'|'text'|'number',
    placeholder?:string,
    defaultValue?:string|number
}

export const SearchBar = ({name, type, placeholder="", defaultValue}:BaseInputInterface) => {
    const searchValue = useAppSelector(state=>state.searchSlice.searchValue)
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const handleChange = (e:SyntheticEvent) => {
        const value = inputRef.current?.value as string
        dispatch(setSearchValue({value:value}))
    }

    const handleClearSearch = () => dispatch(clearSearch())

    return (
        <div className='flex items-center'>
            <input 
                value={searchValue}
                onChange={handleChange}
                ref={inputRef}
                defaultValue={defaultValue && defaultValue}
                className='flex-1 border-gray-300 border-2 rounded-xl w-full p-1 outline-none' 
                name={name} 
                type={type} 
                placeholder={placeholder} 
            />
            { (searchValue.length>0) && <RiCloseFill color='white' size={20} onClick={handleClearSearch}/>} 
        </div>
    )
}
