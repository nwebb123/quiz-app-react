import {React, useState} from 'react'
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import Results from './Components/Results'
import { QuizContext } from './Helpers/Contexts'


function App() {
const [gameState, setGameState] = useState("menu")

// setGameState()

  return (
    <div className="App bg-white min-h-screen flex justify-center flex-col">
      
     <h1 className='flex justify-center text-3xl'>Quiz App</h1>

     <QuizContext.Provider value={{gameState, setGameState}} >
    {/* Example of short-circuiting to dynamically rendering display based on the state of the game. */}
     {gameState === "menu" && <MainMenu />}
     {gameState === "quiz" && <Quiz />}
     {gameState === "results" && <Results />}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
