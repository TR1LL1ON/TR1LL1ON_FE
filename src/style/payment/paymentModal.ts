import styled from 'styled-components';

export const StyledPaymentModal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledPayInput = styled.input`
  width: 6rem;
  min-width: 4rem;
  outline: none;
  border: none;
  padding: 1rem 0;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  background-color: transparent;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledRadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export const StyledRadioLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: border 0.15s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray};
  }
`;
