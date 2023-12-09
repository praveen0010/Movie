import React from 'react'
import Moviebord from './Moviebord'
import {useState} from 'react'
import Navbar from './Navbar'

const Movie = () => {
    
    const[search,setSearch]=useState('')
    const[genere_id,setGenere_id]=useState(18)
    
    return (
        <div>
            <Navbar search={search} setSearch={setSearch} setGenere_id={setGenere_id} />
            <Moviebord  search={search} genere_id={genere_id}/>
        </div>
    )
}

export default Movie
