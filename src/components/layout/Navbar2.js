import { useState,useContext } from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import {RiAlignCenter} from 'react-icons/ri'
import AuthContext from '../../context/auth/authContext'; 
import JournalsContext from '../../context/journals/JournalsContext'
import Wrapper from '../../assets/wrappers/Navbar';
import {Logo} from '../layout'
const Navbar2 = () => {

  const [showLogout, setShowLogout] = useState(false)
    const {logout, user } = useContext(AuthContext);
    const {showSidebar,toggleSidebar}=useContext(JournalsContext)

    const onLogout = () => {
        logout();
    }

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <RiAlignCenter/>
        </button>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user && user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={onLogout}>
              logout
            </button>
          </div>
        </div>
      </div>
      </Wrapper>
  )
}

export default Navbar2
