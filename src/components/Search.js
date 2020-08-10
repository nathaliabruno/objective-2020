import React from 'react';
import search from '../images/search.svg'


function Search(props) {

  const {
    updateSearch
  } = props

  return (

    <div className="search">
      <h1 className="search-title">Busca de personagens</h1>
      <h2 className="search-subtitle">Nome do personagem</h2>
      <div className="search-form">
        <input type="text" placeholder="Search" className="search-form-input" onKeyUp={(e) => updateSearch(e.target.value)} />
        <button className="search-form-button"><img src={search} alt="search button" onClick={(e) => updateSearch(e.target.value)}/></button>
      </div>
    </div>
  )
}

export default Search