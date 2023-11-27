import styled from 'styled-components';

export const StyledPaymentModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30rem;
  padding: 1rem 2rem;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const StyledInputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledPayInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 1rem;
  letter-spacing: 0.5rem;

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
