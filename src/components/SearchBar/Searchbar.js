import './SearchBar.css';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSubmit }) => {

  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <FiSearch size='1.5rem' className='icon' />
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </form>
    </header>
  );

}

export default SearchBar



