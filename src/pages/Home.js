import { useEffect, useState } from 'react';
import axios from 'axios';

import BooksList from '../components/BooksList';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

const Home = () => {
    const [books, setBooks] = useState([]);

    const [loader, setLoader] = useState(false);

    const [prompt, setPrompt] = useState('');

    const [rows, setRows] = useState(1);

    function handleRows(e) {
        if(window.innerWidth > 576 && e.target.value.length > 60 || window.innerWidth <= 576 && e.target.value.length > 30) {
            setRows(10);
        } else {
            setRows(1);
        }
    }
    

    function handleChange(e) {
        setPrompt(e.target.value);
        handleRows(e);
    }

    const getBooks = (e) => {
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
            <Hero rows={rows} handleChange={handleChange} prompt={prompt} getBooks={getBooks} />
            {loader ? <Loader /> : books.length ? <BooksList books={books} /> : ''}
        </div>
    )
}

export default Home;