import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa'
import JournalsContext from '../../context/journals/JournalsContext.js';
import NavLinks from './NavLinks'
import Wrapper from '../../assets/wrappers/SmallSidebar.js';
import {Logo} from '../layout'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useContext(JournalsContext);
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
          </button>
          <header>
           
          </header>
        <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
      </Wrapper>
  )
}

export default SmallSidebar
