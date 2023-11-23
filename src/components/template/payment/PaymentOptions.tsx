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
import PaymentOptionItem, {
  PaymentOptionType,
  getPayLogo,
} from './PaymentOptionItem';
import { paymentOption } from '../../../constants';
import AddCreditCard from './AddCreditCard';

const PaymentOptions = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<PaymentOptionType>('kakaopay');
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
          {getPayLogo(selectedOption)} {paymentOption[selectedOption]}
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
            <PaymentOptionItem
              type="kakaopay"
              setSelectedOption={setSelectedOption}
            />
            <PaymentOptionItem
              type="naverpay"
              setSelectedOption={setSelectedOption}
            />
            <PaymentOptionItem
              type="card"
              setSelectedOption={setSelectedOption}
            />
            <PaymentOptionItem
              type="cash"
              setSelectedOption={setSelectedOption}
            />
          </StyledDropdownList>
        )}
      </StyledWrapper>
      <StyledSpacer $height="0.5rem" />
      {selectedOption === 'cash' && (
        <StyledText>예약한 장소에서 현금 결제</StyledText>
      )}
      {selectedOption === 'card' && <StyledButton>카드 추가하기</StyledButton>}
      <AddCreditCard />
    </>
  );
};

export default PaymentOptions;
