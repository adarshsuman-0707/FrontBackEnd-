import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    let [input,setInput]=useState({
        username:""
        ,number :""
       , email: ""
       , password :""
    })
    let navigate=useNavigate()
    function fun1(e){
        const {name,value}=e.target;
        setInput({...input,[name]:value})
    }
    const done=async(e)=>{
        e.preventDefault()
        let res= await axios.post("http://localhost:3001/signup",input)
        if(res.data=="ALready existing user "){
          alert("user already exist");
        }
        else{
          alert("Signup done")
        }
        console.log(res,"From server");
        navigate("/")
    }
        
    console.log(input);
    return (
   <>
   <body>    
               <div className='container'>
     <form onSubmit={done}>
        <div className='innerside'>
              
              <h1 className='subheading'>SIGNUP HERE</h1>
<br/>
<div className="wave-group">
<input  type='text' name="username"  onInput = {fun1} value={input.username} required  className='input' />
<span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{'--index':0}}>U</span>
    <span className="label-char" style={{'--index':1}}>S</span>
    <span className="label-char" style={{'--index':2}}>E</span>
    <span className="label-char" style={{'--index':3}}>R</span>
    <span className="label-char" style={{'--index':4}}>N</span>
    <span className="label-char" style={{'--index':5}}>A</span>
    <span className="label-char" style={{'--index':6}}>M</span>
    <span className="label-char" style={{'--index':7}}>E</span>


  </label>
</div>
<div className="wave-group">
<input type='text' name="number" onInput = {fun1} value={input.number} required maxLength={10} minLength={10}  className='input'/>
<span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{'--index':0}}>N</span>
    <span className="label-char" style={{'--index':1}}>U</span>
    <span className="label-char" style={{'--index':2}}>M</span>
    <span className="label-char" style={{'--index':3}}>B</span>
    <span className="label-char" style={{'--index':4}}>E</span>
    <span className="label-char" style={{'--index':5}}>R</span>
  </label>
</div>
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
<p className="submit">Signup</p>

</button> </p><p style={{color:"red"}}>Already have an account ? <NavLink to='/' style={{textDecoration:"none" ,color:"blueviolet"}}> Login</NavLink></p></div>

                </div>
            </form>
            </div>
            </body>
   </>
  )
}

export default Signup