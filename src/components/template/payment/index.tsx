import {
  StyledButton,
  StyledCheckboxInput,
  StyledDropdown,
  StyledDropdownItem,
  StyledDropdownList,
  StyledFlexContainer,
  StyledGridContainer,
  StyledHLine,
  StyledInputLabel,
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
    <StyledGridContainer>
      {/* LEFT */}
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

        <StyledHLine />

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

        <StyledHLine />
        <StyledInputLabel htmlFor="age">
          <StyledCheckboxInput type="checkbox" id="age" />
          본인은 만 14세 이상입니다.
        </StyledInputLabel>
      </StyledWrapper>

      {/* RIGHT */}
      <StyledWrapper></StyledWrapper>
    </StyledGridContainer>
  );
};

export default PaymentContainer;
