import { memo } from 'react'
import type { IBook } from '../../../types'

function Book({ book }: IBookComponent) {
  return (
    <div className="flex h-screen items-center justify-center my-6 md:my-1 drop-shadow-2xl py-2 rounded amination-flip-in">
      {book.volumeInfo.imageLinks?.thumbnail ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      ) : (
        <img src="https://placeholder.pics/svg/150x200" alt="placeholder" />
      )}
      <section className="flex flex-col">
        <h1>{book.volumeInfo.title}</h1>
        <h1>{book.volumeInfo.categories && book.volumeInfo.categories[0]}</h1>
        <h1>{book.volumeInfo.authors}</h1>
      </section>
    </div>
  )
}

export default memo(Book)

interface IBookComponent {
  book: IBook
}
