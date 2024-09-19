import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Signup(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const Navigate=useNavigate();
    const signup =async()=>{
  console.log(name,email,password);
  //api call
  let result=await fetch('http://localhost:5000/register',
    {method:'post',
    body:JSON.stringify({name,email,password}),
    headers:{
        'Content-Type':'application/json',
    }
    }
  );
  result=await result.json();
  if(result.name){
    console.log(result);
    alert('User Registered  Successfully');
Navigate('/login')
  }
  else{
    console.log("User Is Present ",result);
    alert(`user ${name} is already present`);
  }
    }
    function clearData(){
      setName('');
      setEmail('');
      setPassword('');
    }
    return(
        <div className="signup">
        <h1>Signup</h1>
      <input className='signup-box' placeholder='Enter Name' type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
      <input className='signup-box' placeholder='Enter Email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input className='signup-box' placeholder='Enter Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button className='signup-button' type='button' onClick={signup} >Register</button>
      <button className='signup-button' type='button' onClick={clearData} >Clear</button>
      </div>
    )
}
export default Signup;