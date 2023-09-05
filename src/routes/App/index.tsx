import { useState } from 'react'
import { useGetBooksQuery } from '../../services/books'
import { useAppSelector } from '../../store/store'
import Error from '../../components/Error'
import Book from './components/AppBook'
import Loading from '../../components/Loading'

function App() {
  const [page, setPage] = useState<number>(0)
  const { search, category, sort } = useAppSelector(
    (state) => state.queryParams
  )
  const { data, isFetching, isError } = useGetBooksQuery({
    page: page,
    search: search,
    sort: sort,
    category: category,
  })

  const handlePage = (value: 'next' | 'prev') => {
    switch (value) {
      case 'next':
        setPage((prev) => prev + 10)
        break
      case 'prev':
        if (page >= 10) {
          setPage((prev) => prev - 10)
        }
        break
    }
  }

  if (isFetching) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-center text-xl font-bold p-2">
        {data?.totalItems === 1
          ? `${data?.totalItems + ' book was found'}`
          : `${data?.totalItems + ' books were found'}`}
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-1 gap-1">
        {data?.items &&
          data?.items.map((book, index) => (
            <Book book={book} key={book.id + index} />
          ))}
      </div>
      <button className="btn" onClick={() => handlePage('prev')}>
        prev
      </button>
      <h1>page:{page}</h1>
      <button className="btn" onClick={() => handlePage('next')}>
        next
      </button>
    </main>
  )
}

export default App
