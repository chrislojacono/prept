import React from 'react';
import AppModal from '../AppModal';
import QuestionForm from '../Form';

export default function QuestionCard({ questionData, showAnswer }) {
  return (
    <>
    <div className='d-flex flex-column m-3 w-25'>
    <h1>Question:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{questionData.question}</h5>
        <div className="d-flex flex-column">
        <button className="btn btn-success card-buttons"onClick={() => showAnswer()}>Show Answer</button>
      <AppModal buttonLabel={'Edit Question'} className="card-buttons" title={'Edit Question'} btnColor={'warning'}>
        <QuestionForm questionData={questionData}/>
      </AppModal>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
