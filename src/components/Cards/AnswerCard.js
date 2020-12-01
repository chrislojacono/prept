import React from 'react';
import { deleteQuestion } from '../../helpers/data/questionData';

export default function AnswerCard({ questionData, showNextQuestion }) {
  return (
    <>
<div className='d-flex flex-column justify-content-center m-3 w-25'>
    <h1>Answer:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{questionData.answer}</h5>
        <div className="d-flex flex-column">
        <button className="btn btn-info"onClick={() => showNextQuestion()}>Show Next Question</button>
        <button className="btn btn-danger" onClick={() => deleteQuestion(questionData.firebaseKey)}>
        Delete Card
      </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
