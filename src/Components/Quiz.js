import { React, useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { JSQuestions } from "../Helpers/JSQuestionsBank";
import { ReactQuestions } from "../Helpers/ReactQuestionsBank";

function Quiz() {
  //Destructuring gamestate and set gamestate function from Quiz context.
  const { setGameState } = useContext(QuizContext);
  const { setScore } = useContext(QuizContext);
  const { currentQuestionBank, setCurrentQuestionBank } = useContext(QuizContext);


  //Initial state for Quiz component;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

//  switch (currentQuestionBank) {
//   case value:
    
//     break;
 
//   default:
//     break;
//  }


  const selectOption = (option) => {
    setOptionChosen(option);
    setQuestionAnswered(true);

    if (currentQuestion === JSQuestions.length - 1) {
      setIsLastQuestion(true);
    }
  };

  const submitOption = () => {
    if (JSQuestions[currentQuestion].answer === optionChosen) {
      //Cool feature would be to change background color of correct option to light-green and incorrect option to light-red.
      console.log("Correct!");
      setScore((prevScore) => prevScore + 1);
    } else {
      //Change background color to red for all options that don't meet first condition.
      console.log("Incorrect");
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setGameState("menu");
    setQuestionBank("");
  };

  return (
    <>
      <button
        onClick={() => {
          resetQuiz();
        }}
        className="p-1 m-1 mx-auto bg-red-500 border border-black text-white rounded-sm"
      >
        Main Menu
      </button>

      <div className="Quiz m-3 flex-col">
        <div className="py-10 mx-auto max-w-3xl justify-center bg-purple-500 rounded-xl">
          <h1 className="text-white text-xl text-center">
            {JSQuestions[currentQuestion].question}
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

            {/* If question is not a mult. choice question, do not display options C & D */}
            {JSQuestions[currentQuestion].isMultChoice && (
              <>
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
              </>
            )}

            {/* See Reults button render */}
            {questionAnswered && isLastQuestion && (
              <button
                onClick={() => {
                  submitOption();
                  setGameState("results");
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
                  submitOption();
                  //Increment state of currentQuestion along with resetting whether or not the question is answered (from true to false)
                  setCurrentQuestion((prevCurrentQuestion) => {
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
    </>
  );
}

export default Quiz;
