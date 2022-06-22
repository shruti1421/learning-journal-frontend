import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import About from './About.js'
const Home = () => {
  return (
      <div className='container page'>
        
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        
      </div>
  )
}

export default Home