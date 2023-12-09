import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Navigate,Link} from 'react-router-dom'
const Register = () => {
const[servervalue,setServervalue]=useState('')
const[er,setEr]=useState('')
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[net_on,setNet_on]=useState(0)
useEffect(() => { 
  if(window.navigator.onLine){
        setNet_on(1)
    }else{setNet_on(0)}
},[])
async function handelsubmit(e){
  e.preventDefault()
  if(window.navigator.onLine){
  //setServervalue('')
  const postdata= {
    name:e.target[0].value,
    email:e.target[1].value,
    password:e.target[2].value
  }
          try {
            const res=await axios.post('http://localhost:1313/signup',postdata)
            if(res.data==='Email Already Registred'){setEmail('')}
            //console.log('sr',res.data);
            setServervalue(res.data)            
          }
           catch (error) {
            //console.log(error.message);
            setEr(error.message)
          }
  }else{setNet_on(false)}
}
if(servervalue==='User Saved Successfully'){
  return < Navigate to='/login'/>
}


    return (
      <main  className="col-md-6  mx-auto mt-5">
        {!net_on?<p className='text-danger'>Internet Connection Failed</p>:er? <p className='text-danger'>{er}</p> :servervalue.includes('Email')? <p className='text-danger'>{servervalue}</p>:<p className='text-success'>{servervalue}</p> }
      <form  onSubmit={handelsubmit}>
          <h1>Register</h1>
          <div className="form-floating mb-3">
              <input autoComplete='username' name='username' value={name} onChange={(e)=>setName(e.target.value)}  type="text" className="form-control w-50" id="name" placeholder="enter your email" required />
              <label htmlFor="name">UserName</label>
          </div>

          <div className="form-floating mb-3">
              <input autoComplete='email' name='email' value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" className=" w-50 form-control" id="email" placeholder="enter your email" required />
              <label htmlFor="email">Email address</label>
          </div>
         
          <div className="form-floating">
              <input autoComplete="current-password" name='password' required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-50 form-control" id="password" placeholder="Password"/>
              <label htmlFor="password">Password</label>
          </div>
          
          <button style={{marginTop:"8px"}} type="submit" className="btn btn-primary d-inline w-25">Register</button>
          <p className='d-inline ' style={{marginLeft:'12px',marginTop:'5px'}}>Have an Acc?<Link  to="/login">login</Link></p>   
      </form>
    </main>
    
    )
}

export default Register
