import { Statist } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <Statist>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage.toFixed(2)}%</p>
    </Statist>
  );
};
