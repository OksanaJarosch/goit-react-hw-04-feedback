import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"
import { SectionContainer, Title } from "./Section.styled"


export const Section = ({title, good, neutral, bad, total, positivePercentage, onLeaveFeedback}) => {
    return (
        <SectionContainer>
        <Title>{title}</Title>
        {title === "Please leave feedback" 
        ? <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions> 
        : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>}
        </SectionContainer>
    )
}