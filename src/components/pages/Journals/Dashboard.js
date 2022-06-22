import React from "react";
import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../../assets/wrappers/Dashboard";
import AllJournals from "./AllJournals";

const Dashboard=()=>{
    return(
        
        <Wrapper>
          <AllJournals/>
        </Wrapper>
    )
}

export default Dashboard