import React, { useState, useEffect } from 'react';
import questions from '../resources/quizQuestion.json';

const Result = () => {
    const correctAnswers = parseInt(localStorage.getItem("score")) || 0;
    const incorrectAnswers = parseInt(localStorage.getItem("incorrect")) || 0;

    const calculateScore = () => {
        const newScore = Math.floor((correctAnswers / questions.length) * 100);
        setScore(newScore);
    };

    useEffect(() => {
        calculateScore();
    }, []);

    const [score, setScore] = useState(0)

    const handlePlayAgain = () => {
      history.push('/quiz');
    };

  return (
    <div className='resultScreen'>
      <div className='result'>
          <h1 className='resultTitle'>Result</h1>
          <div className='scorePage'>
              <h3 className='feedback'>You need more practice</h3>
              <h2 className='score'>Your score is {score}%</h2>

              <div className='descriptionContainer'>
                <div className='description1'>
                  <p className='description'><span>Total number of questions</span> <span>{questions.length}</span></p>
                  <p className='description'><span>Number of attempted questions</span> <span>{correctAnswers + incorrectAnswers}</span></p>
                  <p className='description'><span>Number of correct answers</span> <span>{correctAnswers}</span></p>
                  <p className='description'><span>Number of wrong answers</span> <span>{incorrectAnswers}</span></p>
                </div>
              </div>
          </div>
          <div className='resultButton'>
              <button className='playAgain' onClick={() => window.location.assign('/quiz')}>Play Again</button>
              <button className='back' onClick={() => window.location.assign('/')}>Back to home</button>
          </div>
      </div>
    </div>
  )
}

export default Result

