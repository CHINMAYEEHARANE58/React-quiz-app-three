import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import questions from '../resources/quizQuestion.json'

export default class QuizComponent extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            score: 0,
            incorrect: 0,
        };
    }

    handlePrev = () => {
        const { index } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = index === 0 ? lastIndex : index - 1;

        this.setState({ index: newIndex });
    };

    handleNext = () => {
        const { index } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = index === lastIndex ? 0 : index + 1;

        this.setState({ index: newIndex });
    };

    handleQuit = () => {
        if (window.confirm('Do you want to quit?')) {
          this.props.history.push('/');
        }
    }

    handleOptionClick = (selectedOption) => {
      const { index, score, incorrect } = this.state;

      const current = questions[index];
  
      if (selectedOption === current.answer) {
          alert('Correct Answer!');
          this.setState({ score: score + 1 });
          
          localStorage.setItem("score", score + 1); // Update the score in local storage
      } else {
          alert('Wrong Answer!');
          this.setState({ incorrect: incorrect + 1 });
          localStorage.setItem("incorrect", incorrect + 1); // Update the score in local storage
      }
  }
    
    handleFinish = () => {
      this.props.history.push(`/result?score=${this.state.score}`);
    }

  render() {

    const { index } = this.state;
    const current = questions[index];

    return (
      <div className='quiz'>
        <div className='questionContainer'>
            <h1 className='questionTitle'>Question</h1>
            <h3 className='questionNo'>{index + 1} of {questions.length}</h3>
            <h2 className='question'>{current.question}</h2>
            <div className='options'>
                <div className='option' onClick={() => this.handleOptionClick(current.optionA)}>{current.optionA}</div>
                <div className='option' onClick={() => this.handleOptionClick(current.optionB)}>{current.optionB}</div>
                <div className='option' onClick={() => this.handleOptionClick(current.optionC)}>{current.optionC}</div>
                <div className='option' onClick={() => this.handleOptionClick(current.optionD)}>{current.optionD}</div>
            </div>
            <div className='buttons'>
                <button className='previous' onClick={this.handlePrev}>Previous</button>
                <button className='next' onClick={this.handleNext}>Next</button>
                <button className='quit' onClick={this.handleQuit}>Quit</button>
                <Link to={`/result?score=${this.state.score}`}>
                <button className='finish'>Finish</button>
                </Link>
            </div>
        </div>
        
      </div>
    )
  }
}


