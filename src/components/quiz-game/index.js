import React, { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
    correctAnswer: "C",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "A. Charles Dickens",
      "B. William Shakespeare",
      "C. Jane Austen",
      "D. George Orwell",
    ],
    correctAnswer: "B",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A. Earth", "B. Mars", "C. Venus", "D. Jupiter"],
    correctAnswer: "B",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "A. Atlantic Ocean",
      "B. Indian Ocean",
      "C. Pacific Ocean",
      "D. Southern Ocean",
    ],
    correctAnswer: "C",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "A. Isaac Newton",
      "B. Galileo Galilei",
      "C. Albert Einstein",
      "D. Nikola Tesla",
    ],
    correctAnswer: "C",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["A. China", "B. Brazil", "C. USA", "D. Japan"],
    correctAnswer: "B",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["A. O2", "B. CO2", "C. H2O", "D. HO"],
    correctAnswer: "C",
  },
  {
    question: "In which year did World War II end?",
    options: ["A. 1942", "B. 1945", "C. 1948", "D. 1950"],
    correctAnswer: "B",
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    options: ["A. Silver", "B. Copper", "C. Gold", "D. Aluminum"],
    correctAnswer: "C",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "A. Vincent van Gogh",
      "B. Pablo Picasso",
      "C. Leonardo da Vinci",
      "D. Claude Monet",
    ],
    correctAnswer: "C",
  },
];

const QuizGame = () => {
  const [currentQusetionIndex, setCurrentQusetionIndex] = useState(0);
  const [checkedOption, setCheckedOption] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [join, setJoin] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkedOption[0] === questions[currentQusetionIndex].correctAnswer) {
      setMsg("Correct");
      setTimeout(() => {
        if (currentQusetionIndex <= questions.length - 1) {
          setCurrentQusetionIndex(currentQusetionIndex + 1);
        }

        setMsg(null);
      }, 2000);
    } else {
      setMsg("Wrong");
    }
    setCheckedOption(null);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (playerName) {
      setJoin(true);
    }
  };

  return (
    <div className="main-container">
      {!join ? (
        <form className="player-form" onSubmit={handleJoin}>
          <div>
            <label htmlFor="playerName">Enter Player Name</label>
            <input
              id="playerName"
              type="text"
              placeholder="Enter Player Name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <input type="submit" name="Submit" />
        </form>
      ) : (
        <form className="question-form" onSubmit={handleSubmit}>
          <h1>{msg === null ? playerName : `${msg} Answer ${playerName} `}</h1>
          <h2>{questions[currentQusetionIndex].question}</h2>
          <div>
            <div>
              <input
                type="radio"
                name="option"
                value={questions[currentQusetionIndex].options[0]}
                id={questions[currentQusetionIndex].options[0]}
                onChange={(e) => setCheckedOption(e.target.value)}
                checked={
                  checkedOption === questions[currentQusetionIndex].options[0]
                }
              />
              <label htmlFor={questions[currentQusetionIndex].options[0]}>
                {questions[currentQusetionIndex].options[0]}
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                value={questions[currentQusetionIndex].options[1]}
                id={questions[currentQusetionIndex].options[1]}
                onChange={(e) => setCheckedOption(e.target.value)}
                checked={
                  checkedOption === questions[currentQusetionIndex].options[1]
                }
              />
              <label htmlFor={questions[currentQusetionIndex].options[1]}>
                {questions[currentQusetionIndex].options[1]}
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                value={questions[currentQusetionIndex].options[2]}
                id={questions[currentQusetionIndex].options[2]}
                onChange={(e) => setCheckedOption(e.target.value)}
                checked={
                  checkedOption === questions[currentQusetionIndex].options[2]
                }
              />
              <label htmlFor={questions[currentQusetionIndex].options[2]}>
                {questions[currentQusetionIndex].options[2]}
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                value={questions[currentQusetionIndex].options[3]}
                id={questions[currentQusetionIndex].options[3]}
                onChange={(e) => setCheckedOption(e.target.value)}
                checked={
                  checkedOption === questions[currentQusetionIndex].options[3]
                }
              />
              <label htmlFor={questions[currentQusetionIndex].options[3]}>
                {questions[currentQusetionIndex].options[3]}
              </label>
            </div>
          </div>
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default QuizGame;
