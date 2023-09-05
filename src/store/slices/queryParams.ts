import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Categoty, Sort } from '../../types'

interface IQueryParams {
  search: string
  sort: Sort
  category: Categoty
  page: number
}

const initialState: IQueryParams = {
  search: 'js',
  sort: 'relevance',
  category: '',
  page: 0,
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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
})

export const { setSearch, setSort, setCategory, setPage } =
  queryParamsSlice.actions

export default queryParamsSlice.reducer
