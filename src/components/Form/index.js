import React, { Component } from 'react';
// import getUser from '../../helpers/data/authData';
import { addQuestion, updateQuestion } from '../../helpers/data/questionData';

export default class QuestionForm extends Component {
  state = {
    firebaseKey: this.props.board?.firebaseKey || '',
    question: this.props.board?.question || '',
    answer: this.props.board?.answer || '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      addQuestion(this.state)
        .then(() => {
          this.props.onUpdate?.();
          this.setState({ success: true });
          setTimeout(() => {
            this.setState({
              question: '',
              answer: '',
              success: false,
            });
          }, 3000);
        });
    } else {
      updateQuestion(this.state)
        .then(() => {
          this.props.onUpdate?.(this.props.board.firebaseKey);
          this.setState({ success: true });
        });
    }
  }

  render() {
    const { success } = this.state;
    return (
      <>
      { success && (<div className="alert alert-success" role="alert">Your Question was Updated/Created</div>)
      }
      <form onSubmit={this.handleSubmit}>
        <div>
        <input
          type='text'
          name='question'
          value={this.state.question}
          onChange={this.handleChange}
          placeholder='What is the Question'
          className="form-control form-control-lg m-1"
          required
        />
        </div>
        <div>
        <input
          type='text'
          name='answer'
          value={this.state.answer}
          onChange={this.handleChange}
          placeholder='The Answer'
          className="form-control form-control-lg m-1"
          required
        />
        </div>
         <button ref={(btn) => { this.btn = btn; }} className="btn btn-primary m-2">Submit</button>
      </form>
      </>
    );
  }
}
