import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState';


const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment className="App">
              <Navbar/>
              
              <div className='container'>
                <Alerts/>
                <Routes>
                    <Route exact path="/" element={<PrivateRoute component={Home} />}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                </Routes>
              </div>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
}

export default App;
