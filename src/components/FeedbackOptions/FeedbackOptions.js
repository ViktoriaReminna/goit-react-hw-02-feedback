import { Buttons, FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(option => (
        <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </Buttons>
  );
};
