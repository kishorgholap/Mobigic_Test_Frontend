import { Link, useNavigate } from "react-router-dom";

function Nav(){
    const auth=localStorage.getItem('user')
    const Navigate=useNavigate();
    function logout(){
        localStorage.clear()
        Navigate('/login')
    }
    return(
        <div className="nav"> 
{/* <h1>Nav</h1> */}
{auth ?
<ul className="nav-ul">
    <li className="link"><Link to={'/'}>Home</Link></li>
    <li className="link"><Link to={'/allfiles'}>All Files</Link></li>

    <li className="link"><Link to={'/login'} onClick={logout}>Logout ({auth})</Link></li>
    </ul>:
    <ul className="nav-ul">
    <li className="link"><Link to={'/signup'}>Signup</Link></li>
    <li className="link"><Link to={'/login'}>Login</Link></li>
    

</ul>
}

        </div>
    )
}
export default Nav;