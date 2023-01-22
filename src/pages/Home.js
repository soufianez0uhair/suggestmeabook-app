import { useEffect, useState } from 'react';
import axios from 'axios';

import BooksList from '../components/BooksList';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

const Home = () => {
    const [books, setBooks] = useState([]);

    const [loader, setLoader] = useState(false);

    const getBooks = (e, prompt) => {
        if(prompt.length) {
            e.preventDefault();
            setLoader(true);
        }
    }

    const fetchBooks = async () => {
        const response = await axios.post('https://suggestmeabook-api.onrender.com/api/books', {input: prompt});

        setBooks(response.data.books); 
    }

    useEffect(() => {
        if(books) {
           setLoader(false); 
        }
    }, [books])

    useEffect(() => {
        if(loader) {
            fetchBooks();
        }
    }, [loader]);

    return (
        <div className="home">
            <Hero getBooks={getBooks} />
            {loader ? <Loader /> : books.length ? <BooksList books={books} /> : ''}
        </div>
    )
}

export default Home;