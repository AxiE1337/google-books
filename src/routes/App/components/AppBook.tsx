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
          className="drop-shadow-xl"
        />
      ) : (
        <img src="https://placeholder.pics/svg/150x200" alt="placeholder" />
      )}
      <div className="flex flex-col items-start gap-2 my-4 w-4/5">
        {book.volumeInfo.categories &&
          book.volumeInfo.categories.map((c, index) => (
            <h1 className="underline opacity-80" key={index}>
              {c}
            </h1>
          ))}
        <Link
          className="hover:opacity-80 text-left break-words font-bold"
          to={`/book/${book.id}`}
        >
          {book.volumeInfo.title}
        </Link>
        <h1 className="text-left">{book.volumeInfo.authors}</h1>
      </div>
    </div>
  )
}

export default memo(AppBook)

interface IBookComponent {
  book: IBook
}
