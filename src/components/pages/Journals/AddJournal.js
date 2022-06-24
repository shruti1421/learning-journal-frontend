import React, { useContext, useState } from "react";
import AlertContext from "../../../context/alert/AlertContext.js";
import JournalsContext from "../../../context/journals/JournalsContext.js";
import Wrapper from "../../../assets/wrappers/AddJournal.js";
const AddJournal = () => {
  const { setAlert } = useContext(AlertContext);
  const {
    title,
    content,
    category,
    handleChange,
    clearValues,
    isLoading,
    createJournal
  } = useContext(JournalsContext);

  const onChange = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !category) {
      setAlert("Please fill in all fields", "danger");
      return;
    }
    setAlert("New Journal Created", "success");
    createJournal();
    clearValues();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>add journal</h3>
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
              CREATE
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
    </Wrapper>
  );
};

export default AddJournal;
