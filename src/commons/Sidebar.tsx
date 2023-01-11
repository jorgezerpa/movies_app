import React, { useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { TbMovieOff } from 'react-icons/tb'
import { BsListStars } from 'react-icons/bs'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { SearchBar } from 'components/SearchBar'
import { useGetTitleTypesQuery, useGetGenresQuery, useGetListsQuery  } from 'services/MoviesDatabase/filters'
    //filters
import { filterbyGenre, filterbyTitleType, filterbyList, clearFilters } from '../store/filtersSlice'
import { useAppDispatch } from '../hooks/rtkHooks'

const containerStyles = 'z-50 h-screen w-[230px] sm:w-[300px] bg-gray-900 rounded-b-xl shadow-xl shadow-black'

const Sidebar = () => {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    const [showTypes, setShowTypes] = useState(false)
    const [showGenres, setShowGenres] = useState(false)
    const [showLists, setShowLists] = useState(false)
    const { data:dataTypes, isError:isErrorTypes, isLoading:isLoadingTypes, isSuccess:isSuccessTypes } = useGetTitleTypesQuery()
    const { data:dataGenres, isError:isErrorGenres, isLoading:isLoadingGenres, isSuccess:isSuccessGenres } = useGetGenresQuery()
    const { data:dataLists, isError:isErrorLists, isLoading:isLoadingLists, isSuccess:isSuccessLists } = useGetListsQuery()
    const dispatch = useAppDispatch()

    const handleShowFilters = (toOpen:'types'|'genres'|'lists') => {
        switch (toOpen) {
            case 'genres':
                setShowGenres(!showGenres)
                setShowLists(false)
                setShowTypes(false)
                break;
            case 'lists':
                setShowGenres(false)
                setShowLists(!showLists)
                setShowTypes(false)
                break;
            case 'types':
                setShowGenres(false)
                setShowLists(false)
                setShowTypes(!showTypes)        
            break;
            default:
                break;
        }
    }

    return (
        <div 
            className={`${containerStyles} absolute top-0 ${showMenu?'left-0':'left-[-220px]'}  sm:relative sm:top-0 sm:left-0`}
        >
            <div onClick={()=>setShowMenu(!showMenu)} className='sm:hidden bg-white absolute top-5 left-full p-2 rounded-full'>
                <AiOutlineMenuUnfold size={20} />
            </div>
            <div className='overflow-x-hidden overflow-y-scroll h-screen'>
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
                            <div onClick={()=>handleShowFilters('types')} className={`flex gap-1 items-center font-bold text-white text-lg  px-3 mx-2 rounded-xl`}>
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
                            <div onClick={()=>handleShowFilters('genres')} className={`flex gap-1 items-center font-bold text-white text-lg  px-3 mx-2 rounded-xl`}>
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
                            <div onClick={()=>handleShowFilters('lists')} className={`flex gap-1 items-center font-bold text-white text-lg  px-3 mx-2 rounded-xl`}>
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
        </div>
    )
}

export default Sidebar