import { memo } from 'react'
import { Link } from 'react-router-dom'
import type { IBook } from '../../../types'

function AppBook({ book }: IBookComponent) {
  return (
    <div className="flex flex-col items-center justify-center my-6 md:my-1 drop-shadow-2xl py-2 rounded amination-flip-in">
      {book.volumeInfo.imageLinks?.thumbnail ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      ) : (
        <img src="https://placeholder.pics/svg/150x200" alt="placeholder" />
      )}
      <Link className="hover:opacity-80" to={`/book/${book.id}`}>
        {book.volumeInfo.title}
      </Link>
      {book.volumeInfo.categories &&
        book.volumeInfo.categories.map((c, index) => (
          <h1 className="font-bold" key={index}>
            {c}
          </h1>
        ))}
      <h1>{book.volumeInfo.authors}</h1>
    </div>
  )
}

export default memo(AppBook)

interface IBookComponent {
  book: IBook
}
