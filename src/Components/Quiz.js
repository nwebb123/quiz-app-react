import { React, useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  // Destructuring setGamestate, setScore, and questionsBank/setQuestionsBank 
  // state from Quiz context since these values were set or initialized in Main Menu component.
  const { setGameState } = useContext(QuizContext);
  const { setScore } = useContext(QuizContext);
  const { questionsBank, setQuestionsBank } = useContext(QuizContext);

  //Initial state for Quiz component; These states help determine how the quiz should function/display.
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  //This onClick function is added to each option to
  const selectOption = (option) => {
    setOptionChosen(option);
    setQuestionAnswered(true);

    if (currentQuestion === questionsBank.length - 1) {
      setIsLastQuestion(true);
    }
  };

  //Console.log statements in this function act as a way to inform the user whether or not a submitted question is correct/incorrect.
  //In the future I might want to output this to the results component to inform user which questions they got wrong/right.
  const submitOption = () => {
    if (questionsBank[currentQuestion].answer === optionChosen) {
      console.log(`Question ${currentQuestion + 1}: Correct`);
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log(`Question ${currentQuestion + 1}: Incorrect`);
    }
  };

  //This needs to be abstracted into a reusable component since it's used here and the results component.
  const resetQuiz = () => {
    setScore(0);
    setGameState("menu");
    setQuestionsBank([]);
  };

  return (
    <>
      <button
        onClick={() => {
          resetQuiz();
        }}
        className="p-2 m-1 mx-auto bg-red-500 hover:bg-red-600 active:bg-red-800 focus:bg-red-800 focus:ring focus:ring-red-300 border border-black text-white rounded-sm"
      >
        Main Menu
      </button>

      <div className="m-3 flex-col">
        <div className="py-10 mx-auto max-w-3xl justify-center bg-purple-500 rounded-xl">
          <h1 className="text-white text-xl text-center">
            {questionsBank[currentQuestion].question}
          </h1>
          <br />
          
          <div className="p-3 flex flex-col text-white text-start">
            {/* Option A */}
            <button
              className="Quiz--option"
              onClick={() => selectOption("optionA")}
            >
              A) {questionsBank[currentQuestion].optionA}
            </button>
            {/* Option B */}
            <button
              className="Quiz--option"
              onClick={() => selectOption("optionB")}
            >
              B) {questionsBank[currentQuestion].optionB}
            </button>

            {/* If question is not a mult. choice question, do not display options C & D */}
            {questionsBank[currentQuestion].isMultChoice && (
              <>
                {/* Option C */}
                <button
                  className="Quiz--option"
                  onClick={() => selectOption("optionC")}
                >
                  C) {questionsBank[currentQuestion].optionC}
                </button>
                {/* Option D */}
                <button
                  className="Quiz--option"
                  onClick={() => selectOption("optionD")}
                >
                  D) {questionsBank[currentQuestion].optionD}
                </button>
              </>
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
                className="Quiz--submit-btn"
              >
                Next Question
              </button>
            )}

            {/* See Reults button render */}
            {questionAnswered && isLastQuestion && (
              <button
                onClick={() => {
                  submitOption();
                  setGameState("results");
                }}
                className="Quiz--submit-btn"
              >
                See Results
              </button>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
