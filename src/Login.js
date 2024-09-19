import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const Navigate=useNavigate();

    const login =async()=>{
        // console.log(email,password);
        if(email&&password){
        let result=await fetch('http://localhost:5000/login',
            {
                method:'post',
                body:JSON.stringify({email,password}),
                headers:{
                     "Content-Type": "application/json"
                }
            }
        );
        result=await result.json();
        // console.log('result is',result);
        if(result.err){
            alert(result.err)
        }
        else{
            console.log(result.data.name,' is login'); 
        localStorage.setItem('user',result.data.name)
        localStorage.setItem('email',result.data.email)
        localStorage.setItem('_id',result.data._id)

            Navigate('/')      
        }
    }
    else{
        alert('Please enter Email And Password')
    }
}
   
    
    function clearData(){ 
        setEmail('');
        setPassword('');
      }
    return(
        <div className="signup">
<h1>Login</h1>
<input className='signup-box' placeholder='Enter Email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<input className='signup-box' placeholder='Enter Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
<button className='signup-button' type='button' onClick={login} >Login</button>
<button className='signup-button' type='button' onClick={clearData} >Clear</button>


        </div>
    )
}
export default Login;