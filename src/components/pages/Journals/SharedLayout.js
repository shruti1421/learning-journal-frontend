import React, { useEffect } from "react"
import { Outlet,Link } from "react-router-dom"
import Navbar2 from "../../layout/Navbar2.js"
import {SmallSidebar,BigSidebar} from '../../layout'
import Wrapper from "../../../assets/wrappers/SharedLayout"
//import authContext from '../../context/auth/authContext.js';
const SharedLayout=()=>{

  // const AuthContext = useContext(authContext);

  // const { isAuthenticated } = AuthContext;

  // if (isAuthenticated) return <Navigate to='/' />;

  return (
    <Wrapper>
      <main className='dashboard'>
    <SmallSidebar />
    <BigSidebar />
    <div>
      <Navbar2 />
      <div className='dashboard-page'>
        <Outlet />
      </div>
    </div>
</main>
</Wrapper>
    
  )
}
export default SharedLayout