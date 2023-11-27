import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeaderButton,
  StyledHeaderContainer,
  StyledHeaderGroup,
  StyledHeaderModalButton,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledVLine,
} from '../../style/header/headerStyle';
import { StyledText, StyledTitle } from '../../style/payment/paymentStyle';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import HeaderModal from './modal/HeaderModal';
import AccountModal from './modal/accountModal';

const Header = () => {
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState<boolean>(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);

  const handleHeaderModal = (): void => {
    setIsHeaderModalOpen(!isHeaderModalOpen);
  };

  return (
    <StyledHeaderContainer>
      {isAccountModalOpen && (
        <AccountModal setIsAccountModalOpen={setIsAccountModalOpen} />
      )}
      <StyledTitle>
        <Link to="/">TR1LL1ON</Link>
      </StyledTitle>
      <StyledHeaderGroup>
        <StyledHeaderButton>
          <StyledText>내 주변</StyledText>
        </StyledHeaderButton>
        <StyledVLine />
        <StyledHeaderButton>
          <StyledText>지역으로 찾기</StyledText>
          <StyledSearchContainer>
            <StyledSearchIcon />
          </StyledSearchContainer>
        </StyledHeaderButton>
      </StyledHeaderGroup>

      <StyledHeaderGroup
        onClick={handleHeaderModal}
        style={{
          padding: '8px 8px 8px 14px',
          position: 'relative',
        }}>
        <StyledHeaderModalButton>
          <AiOutlineMenu />
          <BiSolidUserCircle
            style={{ width: '32px', height: '32px', marginLeft: '14px' }}
          />
        </StyledHeaderModalButton>
        {isHeaderModalOpen && (
          <HeaderModal setIsAccountModalOpen={setIsAccountModalOpen} />
        )}
      </StyledHeaderGroup>
    </StyledHeaderContainer>
  );
};

export default Header;
