import {useState} from 'react'

import {IoMdSearch} from 'react-icons/io';

const SearchBooks = ({getBooks}) => {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(60);

  function handleRows(e) {
    if(e.target.value.length > 2) {
        setRows(10);
    } else {
        setRows(1);
    }
  }

  const [prompt, setPrompt] = useState('');

  function handleChange(e) {
    setPrompt(e.target.value);
    handleRows(e);
  }

  return (
    <form onSubmit={((e) => getBooks(e, prompt))} className="searchBooks">
        <div className="searchBooks__input-box">
            <textarea onChange={(e) => handleChange(e)} value={prompt} placeholder="Describe what kind of book you want to get a suggestion for." name="input" id="input" className="searchBooks__input" cols={cols} rows={rows} ></textarea>
            <IoMdSearch className="icon icon--search" />
        </div>
        <button className="btn btn--search">Submit</button>
    </form>
  )
}

export default SearchBooks