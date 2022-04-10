import { useState } from "react";
import "./styles.css";

export default function App() {
  const quiztime = [
    {
      question: "Capital of BANGLADESH",
      answer: [
        { option: "Delhi", iscorrect: false },
        { option: "London", iscorrect: false },
        { option: "Dhaka", iscorrect: true },
        { option: "Islamabad", iscorrect: false }
      ]
    },
    {
      question: "Name of our galaxy",
      answer: [
        { option: "samsung", iscorrect: false },
        { option: "milkyway", iscorrect: true },
        { option: "ES20", iscorrect: false },
        { option: "bigbang", iscorrect: false }
      ]
    },
    {
      question: "Numbet of UT in india",
      answer: [
        { option: "7", iscorrect: false },
        { option: "6", iscorrect: false },
        { option: "4", iscorrect: false },
        { option: "9", iscorrect: true }
      ]
    },
    {
      question: "Full form of CBI",
      answer: [
        { option: "Crime Branch of India", iscorrect: false },
        { option: "Central beuru of Investigation", iscorrect: false },
        { option: "central Bank of India", iscorrect: false },
        { option: "Both A and C", iscorrect: true }
      ]
    }
  ];
  function changeoption(option) {
    if (option === true) {
      setscore((score) => score + 1);
    }
    setques((ques) => ques + 1);
    if (ques < quiztime.length) {
      console.log(ques);
    } else {
      return alert("Your Score" + score + "/4");
    }
  }
  const [quiz, setquiz] = useState(false);
  const [ques, setques] = useState(1);
  const [score, setscore] = useState(0);
  return (
    <div className="App">
      {quiz ? (
        <div className="container">
          <div
            className="row bg-dark text-white  rounded"
            id="question"
            style={{ marginTop: "200px" }}
          >
            <h1>question:{ques}/4</h1>
            <h1 className="display-3">{quiztime[ques - 1].question} ?</h1>
          </div>
          <div className="row" id="answer">
            {quiztime[ques - 1].answer.map((item) => {
              return (
                <button
                  style={{
                    height: "60px",
                    fontSize: "40px",
                    marginLeft: "40px"
                  }}
                  onClick={() => changeoption(item.iscorrect)}
                  className="btn col-5 bg-primary text-white  mt-2"
                >
                  {item.option}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container ">
          <button
            className="btn btn-primary shadow-lg p-3 mb-5  rounded"
            style={{
              height: "100px",
              width: "300px",
              fontSize: "50px",
              marginTop: "300px"
            }}
            onClick={() => setquiz(!quiz)}
          >
            start quiz
          </button>
        </div>
      )}
    </div>
  );
}
