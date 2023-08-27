import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/Searchbar';
import Loader from '../components/Loader/Loader';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const fetchItems = async ({
  query = '',
  page = 1,
  KEY = '31604149-1ec6bd5e260d55d5538125f55',
  BASE_URL = 'https://pixabay.com/api/'
}) => {
  return await axios.get(`${BASE_URL}?q=${query}&page=${page}
  &key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
}

const App = () => {

  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('idle')
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [btnVal, setBtnVal] = useState(0)


  useEffect(() => {

    if (!query) {
      return
    } else {

      fetchItems({ query, page })
        .then(items => {
          setItems(prev => [...prev, ...items.data.hits])
          setStatus('resolved')
          setBtnVal(items.data.hits.length)
        })
        .catch(error => setStatus('rejected'))
    }

  }, [query, page])

  console.log(items)

  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.elements.query.value

    if (text.length === 0) {
      toast('Fill in the field!')
      return;
    }

    setQuery(text)
    setItems([])
    setPage(1)
    e.target.reset()

  };

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className="App" >
      <ToastContainer autoClose={1000} className='toast' />
      <SearchBar onSubmit={handleSubmit} />
      <Loader
        loadMore={loadMore}
        status={status}
        items={items}
        btnVal={btnVal}
      />
    </div>
  );
}

export default App;