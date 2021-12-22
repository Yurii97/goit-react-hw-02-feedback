import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Section from './components/Section/Section.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback=(e)=>{    
    this.setState((prevState) => (
      {[e]:prevState[e]+1}
      )
    );    
  }
  countTotalFeedback(){
    const arrayValue=Object.values(this.state);    
    return arrayValue.reduce((acc, value)=> (acc+value),0)
  };

  countPositiveFeedbackPercentage(){
    const percentage = this.state.good/this.countTotalFeedback()*100
    return percentage ? percentage.toFixed() :0;
  };

  render() {
    const feedback = this.state;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={feedback} onLeaveFeedback={this.addFeedback}/>
        </Section>
        <Section title={'Statistics'}>
        <ul>
          <li>
            Good: {feedback.good}            
          </li>
          <li>
            Neutral: {feedback.neutral}
          </li>
          <li>
            Bad: {feedback.bad}
          </li>
          <li>
            Total: {this.countTotalFeedback()}
          </li>
          <li>
            Positive feedback: {this.countPositiveFeedbackPercentage()} %
          </li>
        </ul>
        </Section>    
        
      </>
    );
  }
}

export default App;
