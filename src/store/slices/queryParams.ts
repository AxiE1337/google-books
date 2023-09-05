import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Categoty, Sort } from '../../types'

interface IQueryParams {
  search: string
  sort: Sort
  category: Categoty
}

const initialState: IQueryParams = {
  search: 'js',
  sort: 'relevance',
  category: '',
}

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload
    },
    setCategory: (state, action: PayloadAction<Categoty>) => {
      state.category = action.payload
    },
  },
})

export const { setSearch, setSort, setCategory } = queryParamsSlice.actions

export default queryParamsSlice.reducer
