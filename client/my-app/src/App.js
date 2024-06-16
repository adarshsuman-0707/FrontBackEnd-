import { Route, Routes } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
// import {  useState } from "react";

function App() {
  // let [message,setMessage]=useState(null);
  // useEffect(()=>{
  //   fetch("http://localhost:3000/message").then((res)=>res.json()).then((data)=>setMessage(data.message))
  // },[])
  return (
<>
{/* <h1 style={{color:"white"}}>{message}</h1> */}

<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  </Routes>
</>
  );
}

export default App;
