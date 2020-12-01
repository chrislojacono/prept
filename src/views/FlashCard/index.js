import React from 'react';
import { getQuestions } from '../../helpers/data/questionData';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';

export default class FlashCard extends React.Component {
  state = {
    questions: [],
    currentCard: {},
    answer: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.state.answer) {
      getQuestions().then((response) => {
        this.setState({
          questions: response,
          currentCard: response[0],
        });
      });
    } else {
      const { questions } = this.state;
      const NextQuestion = questions.indexOf(this.state.currentCard) + 1;
      this.setState({
        answer: false,
        currentCard: questions[NextQuestion] || questions[0],
      });
    }
  };

  shuffleCards = () => {
    const randomCard = this.state.questions[
      Math.floor(Math.random() * this.state.questions.length)
    ];
    this.setState({
      currentCard: randomCard,
    });
  };

  showAnswer = () => {
    this.setState({
      answer: !this.state.answer,
    });
  };

  render() {
    const { answer, currentCard } = this.state;
    const renderQuestions = () => (
      <QuestionCard
        key={currentCard.firebaseKey}
        questionData={currentCard}
        showAnswer={this.showAnswer}
      />
    );
    const renderAnswer = () => (
      <AnswerCard
        key={currentCard.firebaseKey}
        questionData={currentCard}
        showNextQuestion={this.loadData}
        showAnswer={this.showAnswer}
      />
    );
    return (
      <>
        <div className='flash-card d-flex flex-wrap justify-content-center'>
          {answer === false ? renderQuestions() : renderAnswer()}
        </div>
      </>
    );
  }
}
