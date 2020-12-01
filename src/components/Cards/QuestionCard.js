import React from 'react';

export default function QuestionCard({ questionData, showAnswer }) {
  return (
    <>
    <div className='d-flex flex-column m-3 w-25'>
    <h1>Question:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{questionData.question}</h5>
      </div>
      <button className="m-2 btn btn-info"onClick={() => showAnswer()}>Show Answer</button>
    </div>
    </div>
    </>
  );
}
