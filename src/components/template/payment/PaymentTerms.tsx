import {
  StyledCheckboxInput,
  StyledInputLabel,
} from '@/style/payment/paymentStyle';
import { ChangeEvent } from 'react';

const PaymentTerms = ({
  setAgreement,
}: {
  setAgreement: (agreed: boolean) => void;
}) => {
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };

  return (
    <StyledInputLabel htmlFor="age">
      <StyledCheckboxInput type="checkbox" id="age" onChange={handleCheckbox} />
      본인은 만 14세 이상입니다.
    </StyledInputLabel>
  );
};

export default PaymentTerms;
