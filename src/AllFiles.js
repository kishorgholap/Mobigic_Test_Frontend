import { useEffect, useState } from "react";
import { apiUrl } from "./constants";
function AllFiles(){
    const [files,setFiles]=useState([]);
    // const isOpen=true;
    const [isOpen, setIsOpen] = useState(false);
    const [otp,setOtp]=useState('');
    const[id,setId]=useState('');

    const userid=localStorage.getItem('_id')
    // let mail=JSON.parse(email);
    // console.log("email",email);
    
    useEffect(()=>{
        
         getAllFiles();
    },[])
    let file=[1,1,1,1,1,1,1,1]
    //Get All Files
   async  function getAllFiles(){
        //fetch data from server
    let result=await fetch(`${apiUrl}/getallfiles?email=${userid}`,{
        // method:'post',
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body:email.json
    });
    result=await result.json();
    setFiles(result);
    // console.log(result);
    }
  async  function  selectFile(data){
     setId(data);
console.log('file id',data);
    setIsOpen(true);

// let result=await fetch(`http://localhost:5000/delete?id=${data}`,{
//  method:'Delete'
// })
// result=await result.json();
getAllFiles();
    }
    const handleClose = () => {
        setIsOpen(false);
      };
    // function handleOtp(){
    //     setOtp()
    //     console.log('otp',otp);
        
    // }
    async function deleteFile(id){

       if(window.confirm("Are you sure want to delete this file")){

           let result=await fetch(`${apiUrl}/delete?id=${id}`,{
               method:'Delete', 
            })
            
            result=await result.json();
            getAllFiles();
        }
    }
    
    async function downloadFile(params) {
        if(!otp){
            return alert("please provide code to download");
        }
        if(otp.length != 6){
            return alert("please provide 6 digit code");
        }

        let result=await fetch(`${apiUrl}/downloadFile?code=${otp}`,{
            method:'GET', 
         })
         
         result=await result.json();
        
         if(result.data){
            const link = document.createElement('a');
            link.href = `${apiUrl}/static/${result.data.path}`;
            link.download = result.data.filename
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.click();
            return
         }
         return alert(result.msg)

    }
    
    return(
        <div className="all-files"> 
        <h1>ALL Files</h1>
        <ul>
            <li>File Name</li>
            <li>File Code</li>
            <li>Action</li>
        </ul>
        {
            files.length>0 ? files.map((item,index)=>
                <ul>
                    <li>{item.filename}</li>
                    <li>{item.otp}</li>
                    <li><button className="signup-button" onClick={()=>deleteFile(item._id)}>Delete</button> <button className="signup-button" onClick={()=>selectFile(item._id)}>Download</button></li>
                    {isOpen && (
        <div className="popup">
            <input
            type="number"
            value={otp}
            onChange={((e)=> {setOtp(e.target.value)})}
            placeholder="Enter file code to download"
          />
          <button onClick={downloadFile}  >Download</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      )}
                </ul>
                
             ) :
                <h1>No files Found</h1>
        }
        </div>
    )
}
export default AllFiles;