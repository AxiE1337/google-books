import { memo } from 'react'
import type { IBook } from '../../../types'

function Book({ book }: IBookComponent) {
  return (
    <div className="flex h-full items-start justify-evenly gap-4 my-6 md:my-1 drop-shadow-2xl py-2 rounded">
      {book.volumeInfo.imageLinks?.thumbnail ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="drop-shadow-xl w-1/4"
        />
      ) : (
        <img src="https://placeholder.pics/svg/150x200" alt="placeholder" />
      )}
      <section className="flex flex-col gap-6 items-start w-2/4">
        <h1>{book.volumeInfo.categories && book.volumeInfo.categories[0]}</h1>
        <section>
          <h1 className="font-bold text-xl">{book.volumeInfo.title}</h1>
          <h1>{book.volumeInfo.authors}</h1>
        </section>
        <h1 className="font-semibold break-words">
          {book.volumeInfo.description}
        </h1>
      </section>
    </div>
  )
}

export default memo(Book)

interface IBookComponent {
  book: IBook
}
