import {useEffect, useState} from 'react'

import {IoMdSearch} from 'react-icons/io';

const SearchBooks = ({getBooks, prompt, handleChange, rows}) => {
  const [cols, setCols] = useState(window.innerWidth > 576 ? 60 : 40);

  window.addEventListener("resize", () => {
    if(window.innerWidth > 576) {
        setCols(60);
    } else if(window.innerWidth > 400) {
        setCols(40);
    } else {
        setCols(30);
    }
  })

  return (
    <form onSubmit={((e) => getBooks(e))} className="searchBooks">
        <div className="searchBooks__input-box">
            <textarea onChange={(e) => handleChange(e)} value={prompt} placeholder="Describe what kind of book you want to get a suggestion for." name="input" id="input" className="searchBooks__input" cols={cols} rows={rows} ></textarea>
            <IoMdSearch className="icon icon--search" />
        </div>
        <button className="btn btn--search">Submit</button>
    </form>
  )
}

export default SearchBooks