import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function MainMenu() {
  //Destructuring gamestate and set gamestate from state in Context. This is shared across multiple components.
  const { setGameState } = useContext(QuizContext);

  return (
    <>
      <div className="m-3">
        <div className="py-10 mx-auto max-w-3xl flex justify-center bg-purple-500 rounded-xl">
          <button
            onClick={() => {
              setGameState("quiz");
            }}
            className="p-2 m-1 bg-purple-700 text-white rounded-sm"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
