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
  StyledSpacer,
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
    <>
      <StyledTitle $mt="4rem" $px="5rem">
        확인 및 결제
      </StyledTitle>
      <StyledGridContainer $px="5rem">
        {/* LEFT */}
        <StyledWrapper>
          <StyledSubTitle>예약 정보</StyledSubTitle>
          <StyledLabel>날짜</StyledLabel>
          <StyledFlexContainer>
            <StyledWrapper>
              <StyledText>포시즌스 호텔 서울 11.12 - 11.13</StyledText>
              <StyledText>시그니엘 서울 11.13 - 11.14</StyledText>
            </StyledWrapper>
            <StyledWrapper>
              <StyledButton>수정</StyledButton>
            </StyledWrapper>
          </StyledFlexContainer>

          <StyledSpacer $height="1rem" />

          <StyledLabel>게스트</StyledLabel>
          <StyledFlexContainer>
            <StyledWrapper>
              <StyledText>성인 2명</StyledText>
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

          <StyledSpacer />

          <StyledSubTitle>요금 세부정보</StyledSubTitle>
          <StyledFlexContainer>
            <StyledText>180,000 x 1박 - 포시즌스 호텔 서울</StyledText>
            <StyledText>180,000원</StyledText>
          </StyledFlexContainer>
          <StyledFlexContainer>
            <StyledText>200,000 x 1박 - 시그니엘 서울</StyledText>
            <StyledText>200,000원</StyledText>
          </StyledFlexContainer>
          <StyledHLine $mBlock="1rem" />
          <StyledFlexContainer>
            <StyledText $fontSize="1.25rem" $fontWeight={600}>
              총 합계
            </StyledText>
            <StyledText $fontSize="1.25rem" $fontWeight={600}>
              380,000원
            </StyledText>
          </StyledFlexContainer>

          <StyledSpacer $height="1rem" />
          <StyledButton $variant="primary">확인 및 결제</StyledButton>
        </StyledWrapper>

        {/* RIGHT */}
        <StyledWrapper></StyledWrapper>
      </StyledGridContainer>
    </>
  );
};

export default PaymentContainer;
