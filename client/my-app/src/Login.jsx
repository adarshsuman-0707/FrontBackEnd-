import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './Login.css'
import axios from 'axios'
const Login = () => {
    let [input,setInput]=useState({
        email: ""
       , password :""
    })
    function fun1(e){
        const {name,value}=e.target;
    
        setInput({...input,[name]:value})
   
      }
     const done=async(e)=>{
        e.preventDefault()
      console.log(input,"From frontend");
     let res= await axios.post("http://localhost:3001/login",input)
     if(res.data=="Finally login"){
      alert("Finally login")
     }
     else{
      alert("invalid password")
     }
     console.log(res,"From server");
    }
       
    console.log(input);
    return (
   <>

   <div className='container'>
     <form onSubmit={done}>
        <div className='innerside'>
              
              <h1 className='subheading'>LOGIN HERE</h1>
<br/>
<div className="wave-group">
<input type='email'name="email" onInput = {fun1} value={input.email} required  className='input' />
<span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{'--index':0}}>E</span>
    <span className="label-char" style={{'--index':1}}>M</span>
    <span className="label-char" style={{'--index':2}}>A</span>
    <span className="label-char" style={{'--index':3}}>I</span>
    <span className="label-char" style={{'--index':4}}>L</span>

  </label>
</div>
{/* 
                <input type='password'onInput = {fun1} name="password" value={input.password}  required placeholder='Enter password ' />
                <br/> */}
                <div className="wave-group">
                <input type='password'onInput = {fun1} name="password" value={input.password}  required className='input' />
<span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{'--index':0}}>P</span>
    <span className="label-char" style={{'--index':1}}>A</span>
    <span className="label-char" style={{'--index':2}}>S</span>
    <span className="label-char" style={{'--index':3}}>S</span>
    <span className="label-char" style={{'--index':4}}>W</span>
    <span className="label-char" style={{'--index':5}}>O</span>
    <span className="label-char" style={{'--index':6}}>R</span>
    <span className="label-char" style={{'--index':7}}>D</span>
    

  </label>
</div>
<div className='form-footer'>
    <p>
    <button className="button">
<p className="submit">Login</p>

</button> </p><p style={{color:"red"}}>Don't have an account ? <NavLink to='/Signup' style={{textDecoration:"none" ,color:"blueviolet"}}> Signup</NavLink></p></div>

                </div>
            </form>
            </div>
   </>


  )
}


export default Login