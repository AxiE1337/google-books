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
  const { data, isFetching, isError, isLoading } = useGetBooksQuery({
    page: page,
    search: search,
    sort: sort,
    category: category,
  })

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="flex items-center justify-center gap-2 text-center text-xl font-bold p-2">
        {`Found ${data?.totalItems} results`}
        {isFetching && <span className="loading loading-spinner"></span>}
      </h1>
      <div
        className="grid grid-cols-4 md:grid-cols-1 gap-1"
        data-cy="booksComponents"
      >
        {data?.items &&
          data?.items.map((book, index) => (
            <Book book={book} key={book.id + index} />
          ))}
      </div>
      <button
        disabled={page > data!.totalItems - 30 || isFetching}
        className="btn"
        onClick={() => dispatch(setPage(page + 30))}
        data-cy="loadMoreBtn"
      >
        Load more
        {isFetching && <span className="loading loading-spinner"></span>}
      </button>
    </main>
  )
}

export default App
