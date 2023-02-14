import {React, useState, useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'

function Results() {

  const { score, setScore } = useContext(QuizContext);

  return (
    <div className="Quiz m-3 flex-col">
    <div className="py-10 mx-auto max-w-3xl justify-center bg-purple-500 rounded-xl">
      <h1 className="text-white text-xl text-center">
       Results:
      </h1>
      <br />
      <h3 className="text-white text-lg text-center">{score} / 10</h3>
    </div>
  </div>
  )
}

export default Results