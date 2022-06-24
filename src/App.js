import React, {Fragment} from 'react';
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute.js';

import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState';
import JournalState from './context/journals/JournalState';
import {Dashboard,Favorites,SharedJournals,AddJournal,SharedLayout,EditJournal}  from './components/pages/Journals';
import ShareJournal from './components/pages/Journals/ShareJournal';


const App = () => {
  return (
    <AlertState>
    <AuthState>
      
       <JournalState>
        <BrowserRouter>
          <Fragment>
               
              {/* <div className='container'> */}
                <Alerts/>
                <Routes>
                    <Route exact path="/landing" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>

                    <Route path='/' element={<PrivateRoute component={SharedLayout}/>}
                    >
                      <Route index element={<Dashboard/>}/>
                      <Route path='add-journals' element={<AddJournal/>}/>
                      <Route path='share-journal' element={<ShareJournal/>}/>
                      <Route path='shared-with-me' element={<SharedJournals/>}/>
                      <Route path='add-journals' element={<AddJournal/>}/>
                      <Route path='edit-journal' element={<EditJournal/>}/>
                      <Route path='favorites' element={<Favorites/>}/>
                    </Route>
                </Routes>
              {/* </div> */}
          </Fragment>
        </BrowserRouter>
        </JournalState>
      
    </AuthState>
    </AlertState>
  );
}

export default App;
