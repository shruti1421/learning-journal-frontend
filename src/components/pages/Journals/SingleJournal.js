import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import JournalsContext from "../../../context/journals/JournalsContext";
import {FiEdit3} from 'react-icons/fi'
import {MdDeleteOutline} from 'react-icons/md'
import {RiShareForwardLine} from 'react-icons/ri'
import {HiOutlineStar,HiStar} from 'react-icons/hi'
import Wrapper from "../../../assets/wrappers/SingleJournal";
import AlertContext from "../../../context/alert/AlertContext";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const SingleJournal = ({journal,isShared}) => {
  const {setAlert}=useContext(AlertContext)
  const {_id,title,content,category,lastModified,isFavorites}=journal
  const { setEditJournal,deleteJournal,toggleFavorite} = useContext(JournalsContext);
  
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleDelete=()=>{
    try{
    deleteJournal(_id);
    setAlert("Successfully Deleted!","success")
    }catch(err)
    {
        setAlert("Some Error Occured!","danger")
    }
  }
  const handleFavorite=()=>{
    toggleFavorite(_id)
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
    <p>{content.substring(0, 100)}....
    <Button
      onClick={handleClickOpen("paper")}
    >READ MORE</Button>
    </p>
  </div>
  <Dialog
    open={open}
    onClose={handleClose}
    scroll={scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title">
      <header>
        <div className="info">
          <h5>{title}</h5>
        </div>
      </header>
    </DialogTitle>
    <DialogContent dividers={scroll === "paper"}>
      <DialogContentText
        id="scroll-dialog-description"
        ref={descriptionElementRef}
        tabIndex={-1}
      >
        <div className="content">
          <p>{content}</p>
        </div>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} className="btn close-btn">Close</Button>
    </DialogActions>
  </Dialog>
  <div className="content">
  {isShared && (
    <footer>
      <div className="actions">
        <Link
          to="/edit-journal"
          onClick={() => setEditJournal(_id)}
          className="btn edit-btn"
        >
          <FiEdit3 />
        </Link>
        <button type="button" className="btn delete-btn" onClick={handleDelete}>
          <MdDeleteOutline />
        </button>

        {/* set sharing here */}
        <Link
          to="/share-journal"
          onClick={() => setEditJournal(_id)}
          className="btn share-btn"
        >
          <RiShareForwardLine />
        </Link>

        <button className="btn starred-btn" onClick={handleFavorite}>
          {isFavorites ? <HiStar />:<HiOutlineStar /> }
        </button>
      </div>
    </footer>
  )}
  </div>
</Wrapper>
  );
}
export default SingleJournal;
