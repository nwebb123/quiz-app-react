import React from 'react';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


function Navbar() {
  return (
    <div className="py-3 text-white">
        <ul className="px-4 flex justify-end space-x-5 text-3xl">
        <a
            href="https://www.linkedin.com/in/nicholas-webb-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linked-In Icon"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/nwebb123/quiz-app-react"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Icon"
          >
            <AiFillGithub />
          </a>
        </ul>
    </div>
  )
}

export default Navbar