import {
  StyledHeaderButton,
  StyledHeaderContainer,
  StyledHeaderItemGroup,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledVLine,
} from '../../style/header/headerStyle';
import { StyledTitle } from '../../style/payment/paymentStyle';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledTitle>TR1LL1ON</StyledTitle>
      <StyledHeaderItemGroup>
        <StyledHeaderButton>내 주변</StyledHeaderButton>
        <StyledVLine />
        <StyledHeaderButton>장바구니</StyledHeaderButton>
        <StyledVLine />
        <StyledHeaderButton>
          지역으로 찾기{' '}
          <StyledSearchContainer>
            <StyledSearchIcon />
          </StyledSearchContainer>
        </StyledHeaderButton>
      </StyledHeaderItemGroup>
    </StyledHeaderContainer>
  );
};

export default Header;
