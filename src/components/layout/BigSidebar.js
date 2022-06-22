import { useContext } from 'react';
import NavLinks from './NavLinks'
import JournalsContext from '../../context/journals/JournalsContext';
import {Logo} from '../layout'
import Wrapper from '../../assets/wrappers/BigSidebar';
const BigSidebar = () => {
    const { showSidebar} = useContext(JournalsContext);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
          
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
