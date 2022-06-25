import React, { useContext } from "react";
import Wrapper from "../../../assets/wrappers/AllJournal";
import JournalsContext from "../../../context/journals/JournalsContext";
import SingleJournal from "./SingleJournal";
import Loading from "../../layout/Loading";
const Favorites=()=>{
    
    const {journals,isLoading}=useContext(JournalsContext)
    if (isLoading) {
      return <Loading center />;
    }
    if (journals == null) {
      return <h3>0 journals</h3>;
    }
    const filterFavorites=journals.filter(eachJournal => eachJournal.isFavorites===true)
    
    return(
        <Wrapper>
        <h3>{filterFavorites.length} Journals Marked as Favorites</h3>
        <div className="journals">
        {filterFavorites.map(filteredJournals => (
          <SingleJournal key={filteredJournals._id} journal={filteredJournals} isShared={false}/>
        ))}
       </div>
       </Wrapper>
    )
}

export default Favorites