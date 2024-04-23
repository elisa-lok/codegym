import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import QuestionDetail from "./QuestionDetail";
import EmptyQuestionMessage from "./EmptyQuestionMessage";
import Loader from "./Loader";

const QuestionList = () => {
  const questionsTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "React", value: 3 },
    { label: "Bootstrap", value: 4 },
    { label: "Javascript", value: 5 },
  ];

  const [questionsList, setQuestionsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(questionsTags[0].value);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(true);

  const questionsUrl = "http://localhost:3000/api/v1/questions";

  const fetchQuestionList = () => {
    setIsShowLoader(false);
    fetch(questionsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionsList(data);
      });
  };

  useEffect(() => {
    fetchQuestionList();
  }, []);

  // const questionsList = [
  //   {
  //     id: 1,
  //     title: 'How to check if a key is present in a hash?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 2,
  //     title: 'What is the difference between strings and symbol?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 3,
  //     title: 'What happen if you add two same keys in hash?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 4,
  //     title: 'How to delete a key from a hash?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 5,
  //     title: 'How to check if two hashes are identical?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 6,
  //     title: 'How to combine two hashes in Ruby?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 7,
  //     title: 'How to get unique keys from two hashes in Ruby?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 8,
  //     title: 'How does the has_key? key? member? and include? methods in a hash?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 9,
  //     title: 'What are blocks in Ruby?',
  //     tag: 'Ruby'
  //   },
  //   {
  //     id: 10,
  //     title: 'Does the order of keys matters to compare two hashes in Ruby?',
  //     tag: 'Ruby'
  //   },
  // ]

  const updateSelectedItem = (event) => {
    setIsShowLoader(false);
    setIsShowAlert(false);
    setQuestionsList([]);
    setSelectedOption(event.target.value);
    fetch(questionsUrl + `?tags=${questionsTags[event.target.value].label}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionsList(data);
        if (data.length == 0) {
          setIsShowAlert(true);
          setIsShowLoader(true);
        }
      });
  };

  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <p className="lead fw-bold">Filter questions by tags</p>
        <select
          className="form-select form-select-lg"
          value={selectedOption}
          onChange={(event) => updateSelectedItem(event)}
        >
          {questionsTags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>

        {questionsList.length > 0 ? (
          questionsList.map((question) => (
            <QuestionDetail question={question} key={question.id} />
          ))
        ) : (
          <Loader isShowLoader={isShowLoader} />
        )}

        {isShowAlert && (
          <EmptyQuestionMessage tagname={questionsTags[selectedOption].label} />
        )}
      </div>
    </div>
  );
};

export default QuestionList;
