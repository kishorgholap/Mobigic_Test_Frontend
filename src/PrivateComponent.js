import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent(){
    const auth=localStorage.getItem('user');

    return(
       auth?<Outlet></Outlet>:<Navigate to='/login'></Navigate>
    )
}
export default PrivateComponent;