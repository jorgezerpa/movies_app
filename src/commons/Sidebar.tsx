import React, { useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { TbMovieOff } from 'react-icons/tb'
import { BsListStars } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { SearchBar } from 'components/SearchBar'
import { useGetTitleTypesQuery, useGetGenresQuery, useGetListsQuery  } from 'services/MoviesDatabase/filters'
    //filters
import { filterbyGenre, filterbyTitleType, filterbyList, clearFilters } from '../store/filtersSlice'
import { useNotNullFilters } from 'hooks/useNotNullFilters'
import { useAppDispatch } from '../hooks/rtkHooks'

// const mockItems = [
//     { icon: BiCategoryAlt, title:'types', elements:['el1','el2','el3','el4','el5'] },
//     { icon: BsListStars, title:'lists', elements:['el1','el2','el3','el4','el5'] },
//     { icon: TbMovieOff, title:'genres', elements:['el1','el2','el3','el4','el5'] },
// ]

const Sidebar = () => {
    const router = useRouter()
    const [showTypes, setShowTypes] = useState(false)
    const [showGenres, setShowGenres] = useState(false)
    const [showLists, setShowLists] = useState(false)
    const { data:dataTypes, isError:isErrorTypes, isLoading:isLoadingTypes, isSuccess:isSuccessTypes } = useGetTitleTypesQuery()
    const { data:dataGenres, isError:isErrorGenres, isLoading:isLoadingGenres, isSuccess:isSuccessGenres } = useGetGenresQuery()
    const { data:dataLists, isError:isErrorLists, isLoading:isLoadingLists, isSuccess:isSuccessLists } = useGetListsQuery()
    //filter 
    const dispatch = useAppDispatch()
    const filters = useNotNullFilters()

    return (
        <div className={`h-screen overflow-y-scroll overflow-x-hidden w-[300px] bg-gray-900 rounded-b-xl shadow-xl shadow-black`}>
            <div onClick={()=>router.push('/')} className='shadow-sm shadow-[rgba(255,255,255,.7)] py-5 font-extrabold text-xl text-center text-white bg-gray-800 mb-3'>
                <p>  </p>
            </div>
            <ul>
                <li className='px-2 mb-4'>
                    <SearchBar name='search' type='text' placeholder='search' />
                </li>
               
                <div onClick={()=>dispatch(clearFilters()) } className='text-white text-right w-full px-2'> clear Filters </div>

                <li className="mb-5">
                    <div>
                        <div onClick={()=>setShowTypes(!showTypes)} className={`flex gap-1 items-center font-bold text-white text-lg  px-3 mx-2 rounded-xl`}>
                            <BiCategoryAlt color='white' size={20} />
                            <p>types</p>
                        </div>
                        <ul className={`text-white text-sm pl-10 ${!showTypes && 'hidden'}`}>
                            {isSuccessTypes  && dataTypes.map((element, index)=>(
                                <li onClick={()=>dispatch(filterbyTitleType({type:element})) } key={`sideBarTypes${index}${element}`}>{ element }</li>
                            ))}
                        </ul>
                    </div>
                </li>
                
                <li className="mb-5">
                    <div>
                        <div onClick={()=>setShowGenres(!showGenres)} className={`flex gap-1 items-center font-bold text-white text-lg  px-3 mx-2 rounded-xl`}>
                            <TbMovieOff color='white' size={20} />
                            <p>genres</p>
                        </div>
                        <ul className={`text-white text-sm pl-10 ${!showGenres && 'hidden'}`}>
                            {isSuccessGenres && dataGenres.map((element, index)=>(
                                <li onClick={()=>dispatch(filterbyGenre({genre:element})) } key={`sideBarTypes${index}${element}`}>{ element }</li>
                            ))}
                        </ul>
                    </div>
                </li>

                <li className="mb-5">
                    <div>
                        <div onClick={()=>setShowLists(!showLists)} className={`flex gap-1 items-center font-bold text-white text-lg  px-3 mx-2 rounded-xl`}>
                            <BsListStars color='white' size={20} />
                            <p>lists</p>
                        </div>
                        <ul className={`text-white text-sm pl-10 ${!showLists && 'hidden'}`}>
                            {isSuccessLists && dataLists.map((element, index)=>(
                                <li onClick={()=>dispatch(filterbyList({list:element})) } key={`sideBarTypes${index}${element}`}>{ element }</li>
                            ))}
                        </ul>
                    </div>
                </li>
               
            </ul>
        </div>
    )
}

export default Sidebar