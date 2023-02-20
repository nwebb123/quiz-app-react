import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { JSQuestions } from "../Helpers/JSQuestionsBank";
import { ReactQuestions } from "../Helpers/ReactQuestionsBank";

function MainMenu() {
  //Destructuring gamestate and set gamestate from state in Context. This is shared across multiple components.
  const { setGameState } = useContext(QuizContext);
  const {setQuestionsBank} = useContext(QuizContext);

  return (
    <>
      <div className="text-white text-xl max-w-lg p-2 m-2 mx-auto text-center">
        Purpose of this application is to have a study tool available while on-the-go. Good luck!
      </div>
      <div className="m-3">
        <div className="py-10 mx-auto max-w-3xl flex justify-center bg-purple-500 rounded-xl">
          <button
            onClick={() => {
              setGameState("quiz");
              setQuestionsBank(JSQuestions);
            }}
            className="p-2 m-1 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 focus:bg-purple-800 focus:ring focus:ring-purple-300 text-white rounded-sm"
          >
            JS Quiz
          </button>
          <button
            onClick={() => {
              setGameState("quiz");
              setQuestionsBank(ReactQuestions);
            }}
            className="p-2 m-1 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 focus:bg-purple-800 focus:ring focus:ring-purple-300 text-white rounded-sm"
          >
            React Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
