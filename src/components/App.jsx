import { useState } from "react";
import { GlobalStyle } from "GlobalStyle";
import {Section} from "./Section/Section"
import {Container} from "./App.styled"


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const handleFeedback = (evt) => {
    const targetValue = (evt.target.textContent).toLowerCase();
    
    switch (targetValue) {
      case "good": 
      setGood(good => good+1)
        break;

        case "neutral": 
        setNeutral(neutral => neutral + 1)
        break;

        case "bad":
          setBad(bad => bad + 1)
        break;
    
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
      return good + neutral + bad
  };

    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return(
    <Container>
    <Section title="Please leave feedback" onLeaveFeedback={handleFeedback}></Section>
    <Section title="Statistics" good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Section>
    <GlobalStyle />
    </Container>
  );
};