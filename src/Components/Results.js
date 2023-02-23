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
      <button onClick={resetQuiz} className="flex mx-auto mt-6 primary-btn">Main Menu</button>
    </div>
  </div>
  )
}

export default Results