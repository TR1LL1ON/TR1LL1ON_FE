import {
  StyledButton,
  StyledDropdown,
  StyledDropdownItem,
  StyledDropdownList,
  StyledFlexContainer,
  StyledGridContainer,
  StyledLabel,
  StyledSubTitle,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from '../../../style/payment/paymentStyle';
import ArrowDown from '../../../assets/arrow-down.svg';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';

const PaymentContainer = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
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
    <StyledGridContainer>
      <StyledWrapper>
        <StyledTitle>확인 및 결제</StyledTitle>
        <StyledSubTitle>예약 정보</StyledSubTitle>
        <StyledLabel>날짜</StyledLabel>
        <StyledFlexContainer>
          <StyledWrapper>
            <StyledText>포시즌스 호텔 서울</StyledText>
            <StyledText>시그니엘 서울</StyledText>
          </StyledWrapper>
          <StyledWrapper>
            <StyledButton>수정</StyledButton>
          </StyledWrapper>
        </StyledFlexContainer>
        <StyledSubTitle>결제 수단</StyledSubTitle>
        <StyledDropdown onClick={toggleMenu} ref={dropdownRef}>
          <span>결제 수단을 선택하세요.</span>
          <div className="icon">
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
      </StyledWrapper>
      <StyledWrapper></StyledWrapper>
    </StyledGridContainer>
  );
};

export default PaymentContainer;
