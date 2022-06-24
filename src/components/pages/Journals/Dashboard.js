import React, { useContext } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
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