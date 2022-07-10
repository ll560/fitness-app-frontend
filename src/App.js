import { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer';
import Workouts from './pages/Workouts';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

import * as usersService from '../src/utilities/users-service'

const App = () => {
  const [user, setUser] = useState('')
  

  useEffect(() => {
    console.log('we are updating')
   if (usersService.getUser())  
       setUser(usersService.getUser().firstName)
    
  }, [])
 
  return (
    <div className="App">
     <Header user={user} setUser={setUser} logOut={usersService.logOut}/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login setUser={setUser}/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       {
         user && <Route path='/workouts' element={<Workouts/>}/> //render this if both are true
       }
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
