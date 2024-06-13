import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './Login.css'

const Signup = () => {
    let [input,setInput]=useState({
        firstname:""
        ,lastname :""
       , email: ""
       , password :""
    })
    function fun1(e){
        const {name,value}=e.target;
        setInput({...input,[name]:value})
    }
    const done=(e)=>{
        e.preventDefault()
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
<input  type='text' name="firstname"  onInput = {fun1} value={input.firstname} required  className='input' />
<span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{'--index':0}}>F</span>
    <span className="label-char" style={{'--index':1}}>I</span>
    <span className="label-char" style={{'--index':2}}>R</span>
    <span className="label-char" style={{'--index':3}}>S</span>
    <span className="label-char" style={{'--index':4}}>T</span>
    <span className="label-char" style={{'--index':5}}>N</span>
    <span className="label-char" style={{'--index':6}}>A</span>
    <span className="label-char" style={{'--index':7}}>M</span>
    <span className="label-char" style={{'--index':8}}>E</span>


  </label>
</div>
<div className="wave-group">
<input type='text' name="lastname" onInput = {fun1} value={input.lastname} required  className='input'/>
<span className="bar"></span>
  <label className="label">
    <span className="label-char" style={{'--index':0}}>L</span>
    <span className="label-char" style={{'--index':1}}>A</span>
    <span className="label-char" style={{'--index':2}}>S</span>
    <span className="label-char" style={{'--index':3}}>T</span>
    <span className="label-char" style={{'--index':4}}>N</span>
    <span className="label-char" style={{'--index':5}}>A</span>
    <span className="label-char" style={{'--index':6}}>M</span>
    <span className="label-char" style={{'--index':7}}>E</span>


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
    <button class="button">
<p class="submit">Signup</p>

</button> </p><p style={{color:"red"}}>Already have an account ? <NavLink to='/' style={{textDecoration:"none" ,color:"blueviolet"}}> Login</NavLink></p></div>

                </div>
            </form>
            </div>
            </body>
   </>
  )
}

export default Signup