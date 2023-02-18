import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function MainMenu() {
  //Destructuring gamestate and set gamestate from state in Context. This is shared across multiple components.
  const { setGameState } = useContext(QuizContext);
  const {currentQuestionBank, setCurrentQuestionBank} = useContext(QuizContext);

  return (
    <>
      <div className="text-white text-xl max-w-lg p-2 m-2 mx-auto text-center">
        Purpose of this application is to have a study tool available while on-the-go. The quiz currently contains questions about Javascript but I plan to include other languages/topics over time. Good luck!
      </div>
      <div className="m-3">
        <div className="py-10 mx-auto max-w-3xl flex justify-center bg-purple-500 rounded-xl">
          <button
            onClick={() => {
              setGameState("quiz");
              setCurrentQuestionBank("js");
            }}
            className="p-2 m-1 bg-purple-700 text-white rounded-sm"
          >
            JS Quiz
          </button>
          <button
            onClick={() => {
              setGameState("quiz");
              setCurrentQuestionBank("react");
            }}
            className="p-2 m-1 bg-purple-700 text-white rounded-sm"
          >
            React Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
