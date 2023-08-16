import styled from 'styled-components';
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const FeedbackButton = styled.button`
  text-transform: capitalize;
  padding: 8px 10px;
  min-width: 120px;
  border-radius: 20px;
  border-color: #0000ff;
  color: white;
  background-color: #40e0d0;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background-color: #00ff00;
    border-color: #32cd32;
  }
`;
