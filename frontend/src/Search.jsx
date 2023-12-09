import React from 'react'

const Search = ({search,setSearch}) => {
    return (
        <div >
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className="w-100 form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
    )
}

export default Search
