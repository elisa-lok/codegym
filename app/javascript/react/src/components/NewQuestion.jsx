import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const NewQuestion = () => {
  const questionsTags = [
    { label: "Ruby", value: 0 },
    { label: "Rails", value: 1 },
    { label: "React", value: 2 },
    { label: "Bootstrap", value: 3 },
    { label: "Javascript", value: 4 },
    { label: "Data Structure", value: 5 },
  ];

  // const [title, setTitle] = useState("");
  // const [tag, setTag] = useState(questionsTags[0].value);

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleTagChange = (event) => {
  //   setTag(event.target.value);
  // };

  const [formField, setFormField] = useState({
    title: "",
    tag: questionsTags[0].value,
  });

  const handleFormFields = (event) => {
    setFormField({ ...formField, [event.target.name]: event.target.value });
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    console.log(formField);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Write your question and help the world to grow
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleQuestionSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-lable mt-3 mb-3">Title</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="title"
                  value={formField.title}
                  onChange={(event) => handleFormFields(event)}
                />
              </div>
              <div className="form-group">
                <label className="form-lable mt-3 mb-3">
                  Select the question tag
                </label>
                <select
                  className="form-select form-select-lg rounded-0"
                  name="tag"
                  value={formField.tag}
                  onChange={(event) => handleFormFields(event)}
                >
                  {questionsTags.map((tag) => (
                    <option key={tag.value} value={tag.value}>
                      {tag.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
