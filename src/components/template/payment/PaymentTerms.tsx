import {
  StyledCheckboxInput,
  StyledInputLabel,
} from '../../../style/payment/paymentStyle';

const PaymentTerms = () => {
  return (
    <StyledInputLabel htmlFor="age">
      <StyledCheckboxInput type="checkbox" id="age" />
      본인은 만 14세 이상입니다.
    </StyledInputLabel>
  );
};

export default PaymentTerms;
