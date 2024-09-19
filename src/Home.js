import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const[file,setFile]=useState(null)
    const Navigate=useNavigate();
    const fileRef=useRef(null);

    const auth=localStorage.getItem('_id')
    // console.log(auth);
    async function uploadFile(e){
// console.log(file.name);
let formData=new FormData(); 
formData.append('img',file)
formData.append('user',auth)
formData.append('filename',file.name)

let result=await fetch('http://localhost:5000/upload',{
    method:'post',
    body:formData,
    redirect:'follow'
});
result=await result.json();
if(result.name){
    alert(`${result.name}  added successfully with ${result.otp}  otp`)
   
  setFile(null);
  fileRef.current.value=''
Navigate('allfiles')
    console.log(result.name)
}

    }
    return(
        <div> 
    <h1>Home</h1>

 <input ref={fileRef} className='signup-box' type="file"  onChange={e=>setFile(e.target.files[0])}></input>
    <button className="signup-button" onClick={uploadFile} >Upload</button>
        </div>
    )
}
export default Home;