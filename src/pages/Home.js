import { useState } from 'react';
import axios from 'axios';

import BooksList from '../components/BooksList';
import Hero from '../components/Hero';

const Home = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async (e, prompt) => {
        e.preventDefault();
        if(prompt.length) {
           const response = await axios.post('http://localhost:4000/api/books', {input: prompt});

           setBooks(response.data.books); 
        }
    }

    return (
        <div className="home">
            <Hero getBooks={getBooks} />
            <BooksList books={books} />
        </div>
    )
}

export default Home;