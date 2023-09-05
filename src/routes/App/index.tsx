import { useGetBooksQuery } from '../../services/books'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { setPage } from '../../store/slices/queryParams'
import Error from '../../components/Error'
import Book from './components/AppBook'
import Loading from '../../components/Loading'

function App() {
  const { search, category, sort, page } = useAppSelector(
    (state) => state.queryParams
  )
  const dispatch = useAppDispatch()
  const { data, isFetching, isError } = useGetBooksQuery({
    page: page,
    search: search,
    sort: sort,
    category: category,
  })

  const handlePage = (value: 'next' | 'prev') => {
    if (!data) return
    switch (value) {
      case 'next':
        if (page < data.totalItems - 10) {
          dispatch(setPage(page + 10))
        }
        break
      case 'prev':
        if (page >= 10) {
          dispatch(setPage(page - 10))
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
        {`Found ${data?.totalItems} results`}
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-1 gap-1">
        {data?.items &&
          data?.items.map((book, index) => (
            <Book book={book} key={book.id + index} />
          ))}
      </div>
      <div className="flex gap-2 items-center justify-center">
        {
          <button
            disabled={page < 10}
            className="btn"
            onClick={() => handlePage('prev')}
          >
            prev
          </button>
        }
        <button
          disabled={page > data!.totalItems - 10}
          className="btn"
          onClick={() => handlePage('next')}
        >
          next
        </button>
      </div>
    </main>
  )
}

export default App
