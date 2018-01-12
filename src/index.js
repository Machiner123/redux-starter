import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyCaKRXI91k2HLNq8BOE5IxRKAbWesO-I5U"
// Create element to render
const App = ()=>{
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Render element on DOM

ReactDOM.render(<App />, document.querySelector('.container'))
