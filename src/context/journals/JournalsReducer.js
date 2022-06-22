import {
  HANDLE_CHANGE,
  TOGGLE_SIDEBAR,
  CLEAR_VALUES,
  CREATE_JOURNAL_BEGIN,
  CREATE_JOURNAL_SUCCESS,
  CREATE_JOURNAL_ERROR,
  GET_JOURNALS_BEGIN,
  GET_JOURNALS_SUCCESS,
  SET_EDIT_JOURNAL,
  DELETE_JOURNAL_BEGIN,
  EDIT_JOURNAL_BEGIN,
  EDIT_JOURNAL_ERROR,
  EDIT_JOURNAL_SUCCESS,
} from "../types";
const JournalsReducer = (state, action) => {
  switch (action.type) {
    case CREATE_JOURNAL_BEGIN:
      return { ...state, isLoading: true };
    case CREATE_JOURNAL_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };
    case CREATE_JOURNAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };

    case CLEAR_VALUES:
      const initialState = {
        title: "",
        content: "",
        category: "",
        isEditing: false,
        editJournalId: "",
        showSidebar: false,
      };
      return { ...state, ...initialState };
    case GET_JOURNALS_BEGIN:
      return { ...state, isLoading: true };
    case GET_JOURNALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: action.payload.journals,
      };
    case SET_EDIT_JOURNAL:
      const journal = state.journals.find(
        (journal) => journal._id === action.payload.id
      );
      const { _id, title, content, dateCreated, category } = journal;
      return {
        ...state,
        isEditing: true,
        editJournalId: _id,
        title,
        category,
        content,
        dateCreated,
      };
    case EDIT_JOURNAL_BEGIN:
      return { ...state, isLoading: true };
    case EDIT_JOURNAL_SUCCESS:
      return { ...state, isLoading: false };
    case EDIT_JOURNAL_ERROR:
      return { ...state, isLoading: false };
    case DELETE_JOURNAL_BEGIN:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
export default JournalsReducer;
