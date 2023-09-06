import { FormEvent, memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import {
  setCategory,
  setPage,
  setSearch,
  setSort,
} from '../store/slices/queryParams'
import type { Categoty, Sort } from '../types'
import booksImg from '../assets/booksImg.png'

function Header() {
  const [inputValue, setInputValue] = useState<string>('')
  const { search, category, sort } = useAppSelector(
    (state) => state.queryParams
  )
  const dispatch = useAppDispatch()

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue) {
      dispatch(setPage(0))
      dispatch(setSearch(inputValue))
    }
  }

  const handleSort = (value: Sort) => {
    dispatch(setPage(0))
    dispatch(setSort(value))
  }
  const handleCategory = (value: Categoty) => {
    dispatch(setPage(0))
    dispatch(setCategory(value))
  }

  return (
    <nav className="relative flex flex-col items-center justify-center bg-slate-700 min-h-[350px] gap-2 py-2 overflow-hidden">
      <img
        src={booksImg}
        alt="books"
        className="absolute top-0 left-0 min-h-full min-w-full opacity-50"
      />
      <h1 className="text-white text-4xl my-4 select-none z-10">
        Search for books
      </h1>
      <form className="flex w-3/5 md:w-4/5 py-2" onSubmit={submitHandler}>
        <div className="input-group z-10">
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => setInputValue(e.target.value)}
            defaultValue={search}
            className="input input-bordered w-full"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="flex flex-wrap w-full items-center justify-center gap-4 mt-1 z-10">
        <div className="flex items-center justify-center gap-2">
          <label className="text-white select-none" htmlFor="category">
            Category
          </label>
          <select
            className="select w-40 max-w-xs select-sm"
            onChange={(e) => handleCategory(e.target.value as Categoty)}
            value={category}
            id="category"
          >
            <option value="">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-2">
          <label className="text-white select-none" htmlFor="sort">
            Sorting by
          </label>
          <select
            id="sort"
            className="select w-40 max-w-xs select-sm"
            onChange={(e) => handleSort(e.target.value as Sort)}
            value={sort}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default memo(Header)
