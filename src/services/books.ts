import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBook, IBooksRes } from '../types'
import { api_key, baseBookURL } from '../consts'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseBookURL,
    headers: { Authorization: api_key },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksRes, IQueryParams>({
      query: ({ page, search, sort, category }) =>
        `/volumes?q=${search}${
          category && `+subject:${category}`
        }&orderBy=${sort}&startIndex=${page}&maxResults=10`,
    }),
    getBook: builder.query<IBook, string>({
      query: (bookId) => `/volumes/${bookId}`,
    }),
  }),
})

export const { useGetBooksQuery, useGetBookQuery } = booksApi

interface IQueryParams {
  page: number
  search: string
  sort: 'newest' | 'relevance'
  category:
    | 'art'
    | 'computers'
    | 'biography'
    | 'history'
    | 'medical'
    | 'poetry'
    | ''
}
