import React, { useReducer} from "react";
import axios from "axios";
import JournalContext from "./JournalsContext";
import JournalsReducer from "./JournalsReducer";
import {
  HANDLE_CHANGE,
  TOGGLE_SIDEBAR,
  CLEAR_VALUES,
  CREATE_JOURNAL_BEGIN,
  CREATE_JOURNAL_ERROR,
  CREATE_JOURNAL_SUCCESS,
  GET_JOURNALS_BEGIN,
  GET_JOURNALS_SUCCESS,
  SET_EDIT_JOURNAL,
  EDIT_JOURNAL_BEGIN,
  EDIT_JOURNAL_SUCCESS,
  EDIT_JOURNAL_ERROR,
  DELETE_JOURNAL_BEGIN,
  ERROR,
  CLEAR_ERRORS,
} from "../types";

const initialState = {
  title: "",
  content: "",
  category: "",
  toggleButton: false,
  isEditing: false,
  editJournalId: "",
  showSidebar: false,
  isLoading: false,
  journals: null,
  alertError:null,
  successMsg: null
};
const url = "https://learning-journal-backend.herokuapp.com/api/journals";

const JournalState = ({ children }) => {
  const [state, dispatch] = useReducer(JournalsReducer, initialState);

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createJournal = async () => {
    dispatch({ CREATE_JOURNAL_BEGIN });
    try {
      const { title, content, category } = state;
      await axios.post(url, {
        title,
        content,
        category,
      });
      console.log("New Journal Craeted");
      dispatch({ type: CREATE_JOURNAL_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOURNAL_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getJournals = async () => {
    dispatch({ GET_JOURNALS_BEGIN });
    try {
      const data = await axios.get(url);
      dispatch({
        type: GET_JOURNALS_SUCCESS,
        payload: {
          journals: data.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setEditJournal = (id) => {
    //console.log(id)
    dispatch({ type: SET_EDIT_JOURNAL, payload: { id } });
  };

  const editJournal = async () => {
    dispatch({ type: EDIT_JOURNAL_BEGIN });

    try {
      const { title, category, content } = state;

      const editUrl = url + "/" + state.editJournalId;
      const data = await axios.put(editUrl, {
        title,
        category,
        content,
      });
      dispatch({ type: EDIT_JOURNAL_SUCCESS, payload: data.data.msg });
      clearValues();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOURNAL_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  // DELETE JOURNAL
  const deleteJournal = async (journalId) => {
    const deleteUrl = url + "/" + journalId;
    //console.log(deleteUrl)
    dispatch({ type: DELETE_JOURNAL_BEGIN });
    try {
      await axios.delete(deleteUrl);
      getJournals();
    } catch (error) {
      console.log(error);
    }
  };

const toggleFavorite=async(id)=>{
    dispatch({ type: EDIT_JOURNAL_BEGIN });
    try {
      const { isFavorites } = state;
      const favoriteToggleUrl=url+"/favorites/"+id
      const data = await axios.put(favoriteToggleUrl, {
       isFavorites
      });
      dispatch({ type: EDIT_JOURNAL_SUCCESS, payload: data.data.msg });
      clearValues();
      getJournals()
     
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOURNAL_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  }

  const ShareJournal = async (email) =>{
    dispatch({ type: EDIT_JOURNAL_BEGIN });

    try {
      //console.log(state.editJournalId);
      const data = await axios.post(url+`/share/`+ state.editJournalId, {email});
      dispatch({ type: EDIT_JOURNAL_SUCCESS, payload:data.data.msg });
      clearValues();
    } catch (err) {
      console.log(err.response.data)
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }


  }

      //CLEAR ERRORS
      const clearErrors = () => {
        dispatch({type: CLEAR_ERRORS});
    }

  //Get shared journals
  const getSharedJournals = async (user) =>{
    dispatch({ GET_JOURNALS_BEGIN });
    try {
      const data = await axios.get(url+'/share');
      dispatch({
        type: GET_JOURNALS_SUCCESS,
        payload: {
          journals: data.data,
        },
      });
    } catch (error) {
      console.log(error);
    }

    
  }

  return (
    <JournalContext.Provider
      value={{
        ...initialState,
        title: state.title,
        content: state.content,
        category: state.category,
        isEditing: state.isEditing,
        editJournalId: state.editJournalId,
        isLoading: state.isLoading,
        showSidebar: state.showSidebar,
        journals: state.journals,
        alertError: state.alertError,
        successMsg: state.successMsg,
        toggleButton:state.toggleButton,
        toggleSidebar,
        handleChange,
        clearValues,
        createJournal,
        getJournals,
        setEditJournal,
        editJournal,
        deleteJournal,
        getSharedJournals,
        ShareJournal,
        clearErrors,
        toggleFavorite
      }}
    >
      {children}
    </JournalContext.Provider>
  );
};

export default JournalState;
