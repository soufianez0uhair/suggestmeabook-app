import React from 'react'
import SearchBooks from './SearchBooks';
import BooksWizard from '../assets/books-wizard.png';
const Hero = ({getBooks, handleChange, prompt, rows}) => {
  return (
    <div className="hero">
        <img src={BooksWizard} alt="a wizard handling a book" className="hero__img" />
        <h1 className="hero__text">Books Suggestions that match your <span>desires.</span></h1>
        <SearchBooks handleChange={handleChange} rows={rows} prompt={prompt} getBooks={getBooks} />
    </div>
  )
}

export default Hero;