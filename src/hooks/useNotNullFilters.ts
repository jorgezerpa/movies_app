//This is to avoid pass keys with null values to the getMovies endpoint params.
import { useAppSelector } from '../hooks/rtkHooks'
import type { filterState } from 'store/filtersSlice'

export const useNotNullFilters = () => {
    const filter = useAppSelector(state=>state.filterSlice)
    const notNullFilter = Object.fromEntries(Object.entries(filter).filter(value => value[1]));
    return notNullFilter as filterState
}
