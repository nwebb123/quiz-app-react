import {React, useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'

function Results() {

  const { score, setScore } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);

  const resetQuiz = () => {
    setScore(0);
    setGameState("menu")
  }

  return (
    <div className="Quiz m-3 flex-col">
    <div className="py-10 mx-auto max-w-3xl justify-center bg-purple-500 rounded-xl">
      <h1 className="text-white text-2xl text-center">
       Results:
      </h1>
      <br />
      <h3 className="text-white text-2xl text-center">{score} / 10</h3>
      <button onClick={resetQuiz} className="flex mx-auto p-2 m-1 mt-6 bg-purple-700 text-white rounded-sm">Main Menu</button>
    </div>
  </div>
  )
}

export default Results