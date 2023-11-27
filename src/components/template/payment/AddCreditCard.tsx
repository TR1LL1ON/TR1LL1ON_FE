import { createPortal } from 'react-dom';
import {
  StyledPayInput,
  StyledPaymentModal,
  StyledRadioInput,
  StyledRadioLabel,
} from '@/style/payment/paymentModal';
import {
  MastercardLogo,
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
  StyledText,
  StyledTitle,
} from '@/style/payment/paymentStyle';
import { useForm } from 'react-hook-form';

interface CardInfoValues {
  cardNumber: string;
  cardExpirationDate: string;
  cardPassword: string;
}

const AddCreditCard = () => {
  const { register, handleSubmit } = useForm<CardInfoValues>();

  const onSubmit = (data: CardInfoValues) => {
    console.log(data);
  };

  return createPortal(
    <StyledPaymentModal>
      <StyledTitle>카드 추가</StyledTitle>
      <StyledText>구입하기 전까지는 요금이 청구되지 않습니다.</StyledText>
      <StyledHLine />

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFlexContainer>
          <StyledRadioInput type="radio" id="mastercard" name="card" />
          <StyledRadioLabel htmlFor="mastercard">
            <MastercardLogo />
            <StyledText $fontSize="0.75rem">Mastercard</StyledText>
          </StyledRadioLabel>
        </StyledFlexContainer>
        <StyledHLine />

        <StyledSubTitle $mb="0.5rem">카드 번호</StyledSubTitle>
        <StyledFlexContainer $gap="0.5rem">
          <StyledPayInput
            type="number"
            {...register('cardNumber', {
              required: true,
              minLength: 16,
              maxLength: 16,
            })}
            placeholder="0000 0000 0000 0000"
          />
        </StyledFlexContainer>
        <StyledSubTitle $mb="0.5rem">만료일</StyledSubTitle>
        <StyledSubTitle $mb="0.5rem">비밀번호 앞 2자리</StyledSubTitle>
      </form>
    </StyledPaymentModal>,
    document.body,
  );
};

export default AddCreditCard;
