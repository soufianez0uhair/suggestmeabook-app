const Book = ({book}) => {
    let authors = '';
    
    for(let i = 0; i < book.authors.length; i++) {
        authors += i === book.authors.length - 1 ? book.authors[i] + '.' : `${book.authors[i] + ', '}`
    }

    console.log(authors);

    console.log(book.authors);
    return (
        <div className="booksListItem">
            <img src={book.frontCover} alt={book.title + ' book front cover'} className="booksListItem__img" />
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