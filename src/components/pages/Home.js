import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Register'
import HomeScreenImage from '../../assets/images/HomeScreenImage.svg'
const Home = () => {
  return (
    <div className='container-landing center text-center'>
    <Wrapper>
    <img src={HomeScreenImage} className="notes-img text-center" height="60%" alt="empty"  />
      <div className=' page-text'>
        {/* info */}
        <div className='info-page center'>
          <h1>
            Learning <span>Journal</span> App
          </h1>
          <p className='center'>
            Make journals the simple way for free. Forever.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
    </div>
  )
}

export default Home