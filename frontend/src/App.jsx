import React from 'react'
import Register from './Register'
import Login from './Login'
import Movie from './Movie'
import Error from './Error'
import {useState} from 'react'
import {Routes, Route } from 'react-router-dom';
const App = () => {
const[userlogin,setUserlogin]=useState(JSON.parse(localStorage.getItem('log'))||1)
      function setlogin(a){
          setUserlogin(a)
          localStorage.setItem('log',JSON.stringify(a))
        }
    return (
    <main>
      
      <Routes>
        <Route path='*' element={<Error error={'Page Not Found'}/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login setlogin={setlogin} />} />
        <Route path='/login/movie' element={userlogin==='login succesfully'?<Movie/>:<Login setlogin={setlogin}/>} />
      </Routes>
      
    </main>
  )
}
export default App