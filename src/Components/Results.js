import {React, useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts' 


function Results() {

  const { score, setScore } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);
  const { questionsBank, setQuestionsBank } = useContext(QuizContext);

  //Need to abstract this into utils.js
  const resetQuiz = () => {
    setScore(0);
    setGameState("menu")
    setQuestionsBank([])
  }
  
  return (
    <div className="Quiz m-3 flex-col">
    <div className="py-10 mx-auto max-w-3xl justify-center bg-purple-500 rounded-xl">
      <h1 className="text-white text-2xl text-center">
       Results:
      </h1>
      <br />
      <h3 className="text-white text-2xl text-center">{score} / {questionsBank.length}</h3>
      <button onClick={resetQuiz} className="flex mx-auto p-2 m-1 mt-6 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 focus:bg-purple-800 focus:ring focus:ring-purple-300 text-white rounded-sm">Main Menu</button>
    </div>
  </div>
  )
}

export default Results