import React from 'react';

export default function AnswerCard({ questionData, showNextQuestion }) {
  return (
    <>
<div className='d-flex flex-column justify-content-center m-3 w-25'>
    <h1>Answer:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{questionData.answer}</h5>
      </div>
      <button className="m-2 btn btn-info"onClick={() => showNextQuestion()}>Show Next Question</button>
    </div>
    </div>
    </>
  );
}
