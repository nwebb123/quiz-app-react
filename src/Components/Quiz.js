import { React, useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { JSQuestions } from "../Helpers/JSQuestionsBank";


function Quiz() {
  //Destructuring gamestate and set gamestate function from Quiz context.
  const { gameState, setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [optionChosen, setOptionChosen] = useState("");

  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const selectOption = option => {
    setOptionChosen(option);
    // console.log(JSQuestions[currentQuestion].answer)
    // console.log(option)
    console.log(optionChosen)
    if (JSQuestions[currentQuestion].answer === option) {
      //Need to change background color of option to green.
      console.log("Correct!");
      setScore(prevScore => (
        prevScore + 1
        ))
    } else {
      //Change background color to red for all options that don't meet first condition.
      console.log("Incorrect");
    }
    //console.log(score)
    setQuestionAnswered(true);

    if (currentQuestion === JSQuestions.length - 1) {
      setIsLastQuestion(true);
    }
  };

  return (
    <div className="Quiz m-3 flex-col">
      <div className="py-10 mx-auto max-w-3xl justify-center bg-purple-500 rounded-xl">
        <h1 className="text-white text-xl text-center">
          {JSQuestions[currentQuestion].prompt}
        </h1>
        <br />
        <div className="options p-3 flex flex-col text-white text-start">
          <button
            className="bg-purple-400 m-2 p-2 rounded-md"
            onClick={() => selectOption("optionA")}
          >
            A) {JSQuestions[currentQuestion].optionA}
          </button>
          <button
            className="bg-purple-400 m-2 p-2 rounded-md"
            onClick={() => selectOption("optionB")}
          >
            B) {JSQuestions[currentQuestion].optionB}
          </button>
          <button
            className="bg-purple-400 m-2 p-2 rounded-md"
            onClick={() => selectOption("optionC")}
          >
            C) {JSQuestions[currentQuestion].optionC}
          </button>
          <button
            className="bg-purple-400 m-2 p-2 rounded-md"
            onClick={() => selectOption("optionD")}
          >
            D) {JSQuestions[currentQuestion].optionD}
          </button>

          {/* See Reults button render */}
          {questionAnswered && isLastQuestion && (
            <button
              onClick={() => {
               setGameState("results")
              }}
              className="p-3 mt-6 mx-auto  bg-purple-700 text-white rounded-sm"
            >
              See Results
            </button>
          )}

              {/* Next Question button render */}
          {questionAnswered && !isLastQuestion && (
            <button
              onClick={() => {
                setCurrentQuestion((prevCurrentQuestion) => {
                  //Need to account for moving to result page after last question.
                  setQuestionAnswered(false);
                  return prevCurrentQuestion + 1;
                });
              }}
              className="p-3 mt-6 mx-auto  bg-purple-700 text-white rounded-sm"
            >
              Next Question
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default Quiz;
