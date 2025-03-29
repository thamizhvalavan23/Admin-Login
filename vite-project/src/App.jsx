import React, { useContext } from 'react';
import './index.css';
import Login from './AdminLogin/Login';
import { ToastContainer } from 'react-toastify';
import { Appcontext } from './AdminLogin/Context.jsx';
import Home from './Home/Home.jsx';
import Update from './Home/Update.jsx';
import {BrowserRouter , Routes , Route} from 'react-router-dom';




const App = () => {

  const {Atoken} = useContext(Appcontext);

  return Atoken ? (
    <div>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/update/:upid' element = {<Update />} />
      </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <>
    <ToastContainer />
   <Login />
   </>
  )
}

export default App
