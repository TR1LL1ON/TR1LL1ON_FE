import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeaderButton,
  StyledHeaderContainer,
  StyledHeaderGroup,
  StyledHeaderModalButton,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledVLine,
} from '@/style/header/headerStyle';

import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import HeaderModal from '@/components/layout/modal/HeaderModal';
import AccountModal from '@/components/layout/modal/accountModal';

import { StyledText, StyledTitle } from '@/style/payment/paymentStyle';
import { useClickOutside } from '@/hooks/useClickOutside';
import RegionList from '../template/main/region';

const Header = () => {
  const headerModalRef = useRef<HTMLDivElement | null>(null);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState<boolean>(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState<boolean>(false);

  useClickOutside(headerModalRef, () => {
    setIsHeaderModalOpen(false);
  });

  const handleHeaderModal = (): void => {
    setIsHeaderModalOpen(!isHeaderModalOpen);
  };

  return (
    <StyledHeaderContainer aria-expanded={isRegionModalOpen}>
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
        <StyledHeaderButton
          onClick={() => setIsRegionModalOpen(!isRegionModalOpen)}>
          <StyledText>지역으로 찾기</StyledText>
          <StyledSearchContainer>
            <StyledSearchIcon />
          </StyledSearchContainer>
        </StyledHeaderButton>
      </StyledHeaderGroup>
      {isRegionModalOpen && <RegionList />}

      <StyledHeaderGroup
        ref={headerModalRef}
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
