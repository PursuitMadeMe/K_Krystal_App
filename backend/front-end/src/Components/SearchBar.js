import React from 'react'

function SearchBar ({searchTerm, setSearchTerm}) {

const updateSearchTerm = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
}

  return (
    <input
    className='searchBar'
    placeholder='Heal By Chakra'
    value={searchTerm}
    onChange={updateSearchTerm}
    />
  )
}

export default SearchBar;