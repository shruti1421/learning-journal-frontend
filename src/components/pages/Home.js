import React from 'react'
import { Link} from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Home'
import HomeScreenImage from '../../assets/images/HomeScreenImage.svg'
const Home = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1>
            Learning<span>Journal</span> app
          </h1>
          <p>
          Make journals the simple way for free. Forever.
          </p>
          <p>
          Keep a track of your daily learnings, share it with your friends and get going!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={HomeScreenImage} alt='landing page' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Home