import {React, useState} from 'react'
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import Results from './Components/Results'
import { QuizContext } from './Helpers/Contexts'


function App() {
const [gameState, setGameState] = useState("menu")
const [score, setScore] = useState(0);

// setGameState()

  return (
    <div className="App bg-gradient-to-b from-purple-700 to-purple-900  min-h-screen flex justify-center flex-col">
      
     <h1 className='p-2 m-3 flex justify-center text-4xl text-white'>Quiz App</h1>

     <QuizContext.Provider value={{gameState, setGameState, score, setScore }} >
    {/* Example of short-circuiting to dynamically rendering display based on the state of the game. */}
     {gameState === "menu" && <MainMenu />}
     {gameState === "quiz" && <Quiz />}
     {gameState === "results" && <Results />}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
