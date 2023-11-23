import { Link } from 'react-router-dom';
import {
  StyledHeaderButton,
  StyledHeaderContainer,
  StyledHeaderGroup,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledVLine,
} from '../../style/header/headerStyle';
import { StyledText, StyledTitle } from '../../style/payment/paymentStyle';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledTitle>
        <Link to="/">TR1LL1ON</Link>
      </StyledTitle>
      <StyledHeaderGroup>
        <StyledHeaderButton>
          <StyledText>내 주변</StyledText>
        </StyledHeaderButton>
        <StyledVLine />
        <StyledHeaderButton>
          <StyledText>지역으로 찾기</StyledText>{' '}
          <StyledSearchContainer>
            <StyledSearchIcon />
          </StyledSearchContainer>
        </StyledHeaderButton>
      </StyledHeaderGroup>

      <StyledHeaderGroup>
        <StyledHeaderButton>
          <Link to="/cart">
            <StyledText>장바구니</StyledText>
          </Link>
        </StyledHeaderButton>
        <StyledVLine />
        <StyledHeaderButton>
          <Link to="/mypage">
            <StyledText>마이페이지</StyledText>
          </Link>
        </StyledHeaderButton>
      </StyledHeaderGroup>
    </StyledHeaderContainer>
  );
};

export default Header;
