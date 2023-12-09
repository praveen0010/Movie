import React from 'react'
import {useState} from'react'
import Tittle from './Tittle'
import Dropdown from'./Dropdown'
import Search from './Search'
const Navbar = ({setSearch,search,setGenere_id}) => {
  const[genere,setGenere]=useState('Action')
  const[dropdowmgen,setDropdowmgen]=useState('Action')
  function handelgenere(genere_id,gen){
    setGenere(gen)
    setGenere_id(genere_id)
    setDropdowmgen(gen)
}
    
return (
<div  className=" bg-white container-fluid fixed-top pb-5 pt-3 mb-5" >
  <div className=" d-flex d-flex justify-content-evenly">
      <Dropdown dropdowmgen={dropdowmgen} handelgenere={handelgenere}/>  
      <Tittle genere={genere}/>
      <Search search={search} setSearch={setSearch}/>
    
  </div>
</div>        
        
    )
}

export default Navbar
