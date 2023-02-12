import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function MainMenu() {
  //Destructuring gamestate and set gamestate function from Quiz context.
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu m-3">
      <div className="py-10 mx-auto max-w-3xl flex justify-center bg-purple-400  rounded-xl">
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
  );
}

export default MainMenu;
