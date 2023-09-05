import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from '../services/books'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import queryParams from './slices/queryParams'

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    queryParams: queryParams,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
