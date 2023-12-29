import {useState} from 'react'

const Search = ({search, setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="search">Search:</label>
      <input type="text" id='search' placeholder='search..' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default Search
