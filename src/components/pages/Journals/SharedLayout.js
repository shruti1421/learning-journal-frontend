import React from "react"
import { Outlet} from "react-router-dom"
import Navbar2 from "../../layout/Navbar2.js"
import {SmallSidebar,BigSidebar} from '../../layout'
import Wrapper from "../../../assets/wrappers/SharedLayout"
const SharedLayout=()=>{
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