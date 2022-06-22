import { useContext } from "react";
import { Link } from "react-router-dom";
import JournalsContext from "../../../context/journals/JournalsContext";
import {FiEdit3} from 'react-icons/fi'
import {MdDeleteOutline} from 'react-icons/md'
import {RiShareForwardLine} from 'react-icons/ri'
import {HiOutlineStar,HiStar} from 'react-icons/hi'
import Wrapper from "../../../assets/wrappers/SingleJournal";
import AlertContext from "../../../context/alert/AlertContext";

const SingleJournal = (journal) => {
  const {setAlert}=useContext(AlertContext)
  const {_id,title,content,dateCreated,category,lastModified,isFavorite}=journal
  const { setEditJournal,deleteJournal} = useContext(JournalsContext);

  const handleDelete=()=>{
    try{
    deleteJournal(_id);
    setAlert("Successfully Deleted!","success")
    }catch(err)
    {
        setAlert("Some Error Occured!","danger")
    }
  }
  
  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{title}</h5>
          <p>category:{category}</p>
          <p>last modified:{lastModified}</p>
        </div>
      </header>
      <div className="content">
        <p>{content}</p>
        <footer>
          <div className="actions">
            <Link
              to="/edit-journal"
              onClick={() => setEditJournal(_id)}
              className="btn edit-btn"
            >
              <FiEdit3/>
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={handleDelete}
            >
             <MdDeleteOutline/>
            </button>

            {/* set sharing here */}
            <button className="btn share-btn">
            <RiShareForwardLine/>
            </button>

           <button className="btn starred-btn">
            {!isFavorite?<HiOutlineStar/>:<HiStar/>}
           </button>

          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
export default SingleJournal;
