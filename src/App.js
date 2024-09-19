import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import PrivateComponent from './PrivateComponent';
import AllFiles from './AllFiles';

function App() {
 
  
  return (
    <div className="signup">
      {/* <h1>App.js</h1> */}
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route element={<PrivateComponent></PrivateComponent>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allfiles' element={<AllFiles></AllFiles>}></Route>
        </Route>
        <Route path='/login' element ={<Login/>}> </Route>
        <Route path='/signup' element ={<Signup/>}> </Route>
        {/* <Route path='/login' element ={<Login/>}> </Route> */}

      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
