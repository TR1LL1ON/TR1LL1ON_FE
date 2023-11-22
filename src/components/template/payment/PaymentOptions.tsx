import {
  StyledDropdown,
  StyledDropdownItem,
  StyledDropdownList,
  StyledSubTitle,
  StyledText,
  StyledWrapper,
} from '../../../style/payment/paymentStyle';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import ArrowDown from '../../../assets/arrow-down.svg';

const PaymentOptions = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    if (isMenuOpen) setMenuOpen(false);
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
      <StyledDropdown onClick={toggleMenu} ref={dropdownRef}>
        <span>결제 수단을 선택하세요.</span>
        <div className={`icon ${isMenuOpen ? 'open' : ''}`}>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
      </StyledDropdown>
      <StyledWrapper>
        {isVisible && (
          <StyledDropdownList $isOpen={isMenuOpen}>
            <StyledDropdownItem>
              <StyledText>신용카드</StyledText>
            </StyledDropdownItem>
            <StyledDropdownItem>
              <StyledText>신용카드</StyledText>
            </StyledDropdownItem>
            <StyledDropdownItem>
              <StyledText>신용카드</StyledText>
            </StyledDropdownItem>
          </StyledDropdownList>
        )}
      </StyledWrapper>
    </>
  );
};

export default PaymentOptions;
