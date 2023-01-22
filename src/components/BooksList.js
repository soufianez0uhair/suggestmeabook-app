import React from 'react'
import Book from './BooksListItem'
import Loader from './Loader'

const BooksList = ({books, loader}) => {
  return (
    <div className="booksList">
        {
            !loader ? books.map(book => (
                <Book book={book} key={book.id} />
            )) : <Loader />
        }
    </div>
  )
}

export default BooksList