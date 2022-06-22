import React, { useContext, useState } from "react";
import AlertContext from "../../../context/alert/AlertContext.js";
import JournalsContext from "../../../context/journals/JournalsContext.js";
import Wrapper from "../../../assets/wrappers/AddJournal.js";

const EditJournal = () => {
  const {setAlert}=useContext(AlertContext)
  const { title, content, category, isEditing, handleChange, clearValues,isLoading,createJournal,editJournal } =
    useContext(JournalsContext);

  const onChange = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !content || !category) {
      setAlert('Please fill in all fields','danger')
      return
    }
    if (isEditing) {
      editJournal()
      setAlert('Journal Edited!','success')
      return
      }
  };

  return (
    <Wrapper>
    <form className="form">
      <h3>{"edit journal"} </h3>
      <div className="form-center">
        <div className="form-row">
          <label htmlFor="title" className="form-label">
            title
          </label>

          <input
            type="text"
            value={title}
            name="title"
            onChange={onChange}
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="content" className="form-label">
            Content
          </label>

          <input
            type="textarea"
            value={content}
            name="content"
            onChange={onChange}
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="category" className="form-label">
            category
          </label>

          <input
            type="text"
            value={category}
            name="category"
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
           EDIT
          </button>
        </div>
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
    </form>
    </Wrapper>
  );
};
export default EditJournal;
