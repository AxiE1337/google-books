import Book from './components/Book'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import { useGetBookQuery } from '../../services/books'
import { useParams } from 'react-router-dom'

const BookPage = () => {
  const { id } = useParams()
  const { data, isFetching, isError } = useGetBookQuery(id as string)

  if (isError) {
    return <Error />
  }

  if (isFetching) {
    return <Loading />
  }

  return <div>{data && <Book book={data} />}</div>
}

export default BookPage
