import {
  StyledButton,
  StyledDropdown,
  StyledDropdownList,
  StyledSpacer,
  StyledSubTitle,
  StyledText,
  StyledWrapper,
} from '../../../style/payment/paymentStyle';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import ArrowDown from '../../../assets/arrow-down.svg';
import PaymentOptionItem, { getPayLogo } from './PaymentOptionItem';
import { paymentOption, paymentOptionList } from '../../../constants';
import AddCreditCard from './AddCreditCard';
import { useRecoilValue } from 'recoil';
import { orderState } from '../../../states/atom';

const PaymentOptions = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const payment = useRecoilValue(orderState);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    if (isMenuOpen) {
      setMenuOpen(false);

      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }
  });

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);

      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    } else {
      setIsVisible(true);
      setMenuOpen(true);
    }
  };

  return (
    <>
      <StyledSubTitle>결제 수단</StyledSubTitle>
      <StyledDropdown
        onClick={toggleMenu}
        ref={dropdownRef}
        aria-expanded={isMenuOpen}>
        <span className="selected">
          {getPayLogo(payment.payment)} {paymentOption[payment.payment]}
        </span>
        <div className={`icon ${isMenuOpen ? 'open' : ''}`}>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
      </StyledDropdown>
      <StyledWrapper>
        {isVisible && (
          <StyledDropdownList
            $isOpen={isMenuOpen}
            role="menu"
            aria-labelledby="payment-options">
            {paymentOptionList.map((option) => (
              <PaymentOptionItem key={option} type={option} />
            ))}
          </StyledDropdownList>
        )}
      </StyledWrapper>
      <StyledSpacer $height="0.5rem" />
      {payment.payment === 'cash' && (
        <StyledText>예약한 장소에서 현금 결제</StyledText>
      )}
      {payment.payment === 'card' && <StyledButton>카드 추가하기</StyledButton>}
      <AddCreditCard />
    </>
  );
};

export default PaymentOptions;
