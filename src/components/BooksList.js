import React from 'react'
import Book from './BooksListItem'

const BooksList = ({books}) => {
  return (
    <div className="booksList">
        {
            books.map(book => (
                <Book book={book} />
            ))
        }
    </div>
  )
}

export default BooksList