import React from 'react'
import axios from 'axios'
//import Movie from './Movie'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
const Login = ({setlogin}) => {
const[servervalue,setServervalue]=useState('')
const[error,setError]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[net_on,setNet_on]=useState(0)
useEffect(() => {
  localStorage.setItem('log',JSON.stringify(1))
  if(window.navigator.onLine){
    setNet_on(1)
}else{setNet_on(0)}},[])    
async function handelsubmit(e){
  e.preventDefault() 
  if(window.navigator.onLine){
    const postdata={email:`${e.target[0].value}`, password:`${e.target[1].value}`}
    try {
      const res=await axios.post('http://localhost:1313/login',postdata)
      if(res.data==='Wrong Password'){setPassword('')}else{ setPassword('')
       setEmail('')}
      
      
      setlogin(res.data)
      setServervalue(res.data)
      }catch (error) {
      setError(error.message)
      
    }
}
}

if(servervalue==='login succesfully'){
  return < Navigate to='/login/movie'/>
}



return (
    
    <main  className="  col-md-6  mx-auto mt-5">
      {!net_on?<p className='text-danger' >Internet Connection Failed</p>:error?<p className='text-danger' >{error}</p>:servervalue? <p className='text-danger'>{servervalue}</p>:null }
      {<form  onSubmit={handelsubmit}>
        <h1>Login</h1>
          <div className="form-floating mb-3">
              <input autoComplete='email' name='email' value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" className=" w-50 form-control" id="floatingInput" placeholderror="enterror your email" required />
              <label htmlFor="floatingInput">Email address</label>
          </div>
         
          <div className="form-floating">
              <input autoComplete="current-password" name='password' required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className=" w-50 form-control" id="floatingPassword" placeholderror="Password"/>
              <label htmlFor="floatingPassword">Password</label>
          </div>
          
          <button style={{width:"100px", marginTop:"8px"}} type="submit" className="btn btn-primary d-inline">Login</button>
          <p className='d-inline ' style={{marginLeft:'12px',marginTop:'5px'}}>New to Here?<Link  to="/register">Join</Link></p>   
      </form>
      }
    </main>

    
)
}

export default Login
