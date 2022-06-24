import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../../context/alert/AlertContext.js";
import JournalsContext from "../../../context/journals/JournalsContext.js";
import Wrapper from "../../../assets/wrappers/AddJournal.js";

const ShareJournal = () => {

  const { setAlert } = useContext(AlertContext);
  const {
      ShareJournal,
      clearValues,
      isLoading,
      alertError,
      clearErrors,
      successMsg
    } = useContext(JournalsContext);

  useEffect(() => {
    console.log(successMsg)
    if (alertError === 'shared email cannot be same as author email') {
      setAlert(alertError, 'danger');
      clearErrors();
    }
    else if (alertError === 'Journal already shared with the requested user') {
      setAlert(alertError, 'danger');
      clearErrors();
    }
    else if (alertError === 'User to share does not exists') {
      setAlert(alertError, 'danger');
      clearErrors();
    }
    else if(successMsg==='Succesfully shared the journal with requested user!')
    {
      setAlert(successMsg,'success');
    }
    // eslint-disable-next-line
  }, [alertError]);

    const [email, setEmail] = useState('');
  
    const onChange = e => setEmail( e.target.value );
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email) {
        setAlert("Please provide a email", "danger");
        return;
      }
       ShareJournal(email)
    };
  
    return (

        <form className="form">
          <h3>Share Journal</h3>
          <div className="form-center">
            <div className="form-row">
              <label htmlFor="email" className="form-label">
                Enter User's email:
              </label>
  
              <input
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                className="form-input"
              />
            </div> 
            <div className="btn-container">
              <button
                className="btn btn-block submit-btn"
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                SEND
              </button>
            </div>
            <div className="btn-container">
              <button
                className="btn btn-block clear-btn"
                onClick={(e) => {
                  e.preventDefault();
                  clearValues();
                }}
              >
                CLEAR
              </button>
            </div>
          </div>
        </form>

    )
}

export default ShareJournal;
