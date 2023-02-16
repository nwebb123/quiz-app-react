import { React, useState } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//Why does this import need to be wrapped in curly braces?
import { QuizContext } from "./Helpers/Contexts";

function App() {
  //Global state living
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="bg-gradient-to-b from-purple-700 to-purple-900 min-h-screen">
      <Navbar />
      <div className=" flex justify-center flex-col">
        <h1 className="p-2 m-2 flex justify-center text-4xl text-white">
          Quiz App
        </h1>
        {/* Components that need use to context need to be wrapped in the ContextProvider and provider needs a value of the states from Context. */}
        <QuizContext.Provider
          value={{ gameState, setGameState, score, setScore }}
        >
          {/* Example of short-circuiting to dynamically rendering display based on the state of the game. */}
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "results" && <Results />}
        </QuizContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
