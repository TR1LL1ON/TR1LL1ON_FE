import {
  StyledPayInput,
  StyledPaymentModal,
  StyledRadioInput,
  StyledRadioLabel,
} from '../../../style/payment/paymentModal';
import {
  MastercardLogo,
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
  StyledText,
} from '../../../style/payment/paymentStyle';
import { useForm } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { StyledButton } from '../../../style/common/commonStyle';
import { useRecoilState } from 'recoil';
import { cardState } from '../../../states/atom';

export interface CardInfoValues {
  cardNumber: { first: string; second: string; third: string; fourth: string };
  cardExpirationMonth: string;
  cardExpirationYear: string;
  cardPassword: string;
  isSaveCard?: boolean;
}

const AddCreditCard = () => {
  const { register, handleSubmit, setFocus } = useForm<CardInfoValues>({
    defaultValues: {
      cardNumber: { first: '', second: '', third: '', fourth: '' },
      cardExpirationMonth: '',
      cardExpirationYear: '',
      cardPassword: '',
    },
  });
  const [cardInfo, setCardInfo] = useRecoilState(cardState);

  const focusNextInput = (
    e: ChangeEvent<HTMLInputElement>,
    nextRef: string,
    limit: number = 4,
  ) => {
    if (e.target.value.length >= limit) {
      e.target.value = e.target.value.slice(0, limit);
      setFocus(nextRef as keyof CardInfoValues);
    }
  };

  const onSubmit = (data: CardInfoValues) => {
    const {
      cardNumber,
      cardExpirationMonth,
      cardExpirationYear,
      cardPassword,
    } = data;
    const cardData = {
      cardNumber: {
        first: cardNumber.first,
        second: cardNumber.second,
        third: cardNumber.third,
        fourth: cardNumber.fourth,
      },
      cardExpirationMonth,
      cardExpirationYear,
      cardPassword,
      isSaveCard: true,
    };

    setCardInfo(cardData);
  };

  if (cardInfo.isSaveCard) {
    return (
      <StyledFlexContainer $justifyContent="flex-start">
        <MastercardLogo />
        <StyledText>
          {cardInfo.cardNumber.first} - {cardInfo.cardNumber.second} - **** -
          ****
        </StyledText>
      </StyledFlexContainer>
    );
  }

  return (
    <StyledPaymentModal>
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
        <StyledFlexContainer $justifyContent="flex-start" $alignItems="center">
          <StyledPayInput
            type="number"
            {...register('cardNumber.first', {
              required: true,
              maxLength: 4,
              minLength: 4,
              onChange: (e) => focusNextInput(e, 'cardNumber.second'),
            })}
            placeholder="0000"
          />
          <StyledPayInput
            type="number"
            {...register('cardNumber.second', {
              required: true,
              maxLength: 4,
              minLength: 4,
              onChange: (e) => focusNextInput(e, 'cardNumber.third'),
            })}
            placeholder="0000"
          />
          <StyledPayInput
            type="password"
            {...register('cardNumber.third', {
              required: true,
              maxLength: 4,
              minLength: 4,
              onChange: (e) => focusNextInput(e, 'cardNumber.fourth'),
            })}
            placeholder="0000"
          />
          <StyledPayInput
            type="password"
            {...register('cardNumber.fourth', {
              required: true,
              maxLength: 4,
              minLength: 4,
              onChange: (e) => focusNextInput(e, 'cardExpirationMonth'),
            })}
            placeholder="0000"
          />
        </StyledFlexContainer>

        <StyledSubTitle $mb="0.5rem">만료일</StyledSubTitle>
        <StyledFlexContainer $justifyContent="flex-start" $alignItems="center">
          <StyledPayInput
            type="number"
            {...register('cardExpirationMonth', {
              required: true,
              maxLength: 2,
              minLength: 2,
              onChange: (e) => focusNextInput(e, 'cardExpirationYear', 2),
            })}
            placeholder="MM"
          />
          <StyledPayInput
            type="number"
            {...register('cardExpirationYear', {
              required: true,
              maxLength: 2,
              minLength: 2,
            })}
            placeholder="YY"
          />
        </StyledFlexContainer>

        <StyledSubTitle $mb="0.5rem">비밀번호 앞 2자리</StyledSubTitle>
        <StyledFlexContainer>
          <StyledPayInput
            type="password"
            {...register('cardPassword', {
              required: true,
              maxLength: 2,
              minLength: 2,
            })}
            placeholder="**"
          />
        </StyledFlexContainer>

        <StyledButton $variant="primary">등록</StyledButton>
      </form>
    </StyledPaymentModal>
  );
};

export default AddCreditCard;
