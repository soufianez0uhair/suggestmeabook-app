const Book = ({book}) => {
    let authors = '';
    
    for(let i = 0; i < book.authors.length; i++) {
        authors += i === book.authors.length - 1 ? book.authors[i] + '.' : `${book.authors[i] + ', '}`
    }

    return (
        <div className="booksListItem">
            <img src={book.frontCover ? book.frontCover : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'} alt={book.title + ' book front cover'} className="booksListItem__img" />
            <div className="booksListItem__details">
                <h3 className="booksListItem__title">{book.title}</h3>
                <span className="booksListItem__authors">by: {authors}</span>
            </div>
            <div className="booksListItem__description">
                <h3 className="booksListItem__title">{book.title}</h3>
                <span className="booksListItem__authors">by: {authors}</span>
                <p>{book.description}</p>
            </div>
        </div>
    )
}

export default Book