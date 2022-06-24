import JournalsContext from "../../../context/journals/JournalsContext";
import { useContext, useEffect } from "react";
import SingleJournal from "./SingleJournal.js";
import Loading from "../../layout/Loading";
import Wrapper from "../../../assets/wrappers/AllJournal";
const AllJournals = () => {
  const { journals, getJournals, isLoading } = useContext(JournalsContext);
  useEffect(() => {
    getJournals();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (journals == null) {
    return <div>0 journals</div>;
  }

  return (
    <Wrapper>
      <h3>{journals.length} journals found</h3>
      <div className="journals">
        {journals.map((eachJournal) => {
          return <SingleJournal key={eachJournal._id} journal={eachJournal} isShared={true} />;
        })}
      </div>
    </Wrapper>
  );
};
export default AllJournals;
