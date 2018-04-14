import React, { Component } from 'react';

class TriviaBox extends Component {
  constructor(props) {
    super(props);

    this.getTriviaQuestion = this.getTriviaQuestion.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getTriviaQuestion() {
    let randomNum = this.getRandomInt(17904);

    console.log(randomNum);

    fetch(`https://qriusity.com/v1/questions/${randomNum}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(JSON.stringify(data[0]));

      let triviaQuestion = {};
      triviaQuestion.question = data[0].question;
      triviaQuestion.options = [
        data[0].triviaOption1,
        data[0].triviaOption2,
        data[0].triviaOption3,
        data[0].triviaOption4,
      ];
      triviaQuestion.answer = data[0].answers;

      console.log(triviaQuestion);
      return triviaQuestion;
    });
  }

  render() {
    let triviaQuestionInfo = this.getTriviaQuestion();

    let triviaQuestion = triviaQuestionInfo;
    // let triviaAnswer = triviaQuestionInfo.answers;
    //
    // let triviaOption1 = triviaQuestionInfo.triviaOption1;
    // let triviaOption2 = triviaQuestionInfo.triviaOption2;
    // let triviaOption3 = triviaQuestionInfo.triviaOption3;
    // let triviaOption4 = triviaQuestionInfo.triviaOption4;

    console.log('---------');

    return (
      <div id='TriviaBox'>
        {triviaQuestion}
      </div>
    );
  }
}

export default TriviaBox;
