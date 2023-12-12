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
import MapModal from './modal/MapModal';

import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import HeaderModal from '@/components/layout/modal/HeaderModal';
import AccountModal from '@/components/layout/modal/accountModal';

import { StyledText, StyledTitle } from '@/style/payment/paymentStyle';
import { useClickOutside } from '@/hooks/useClickOutside';
import RegionList from '../template/main/region';
import InformSignInModal from './modal/InformSignInModal';

const Header = () => {
  const headerModalRef = useRef<HTMLDivElement>(null);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showInformSignInModal, setShowInformSignInModal] = useState(false);
  const regionModalRef = useRef<HTMLDivElement>(null);

  const [showMapModal, setShowMapModal] = useState(false);
  const handleMapModal = () => {
    setShowMapModal(true);
  };

  useClickOutside(headerModalRef, () => {
    setIsHeaderModalOpen(false);
  });

  useClickOutside(regionModalRef, () => {
    setIsRegionModalOpen(false);
  });

  const handleHeaderModal = () => {
    setIsHeaderModalOpen(!isHeaderModalOpen);
  };

  return (
    <StyledHeaderContainer aria-expanded={isRegionModalOpen}>
      {showInformSignInModal && (
        <InformSignInModal
          setShowAccountModal={setShowAccountModal}
          setShowInformSignInModal={setShowInformSignInModal}
        />
      )}
      {showAccountModal && (
        <AccountModal setShowAccountModal={setShowAccountModal} />
      )}
      <StyledTitle>
        <Link to="/">TR1LL1ON</Link>
      </StyledTitle>
      <StyledHeaderGroup>
        <StyledHeaderButton>
          <StyledText onClick={handleMapModal}>내 주변</StyledText>
          {showMapModal && <MapModal setShowModal={setShowMapModal} />}
        </StyledHeaderButton>
        <StyledVLine />
        <StyledHeaderButton onClick={() => setIsRegionModalOpen(true)}>
          <StyledText>지역으로 찾기</StyledText>
          <StyledSearchContainer>
            <StyledSearchIcon />
          </StyledSearchContainer>
        </StyledHeaderButton>
      </StyledHeaderGroup>
      {isRegionModalOpen && <RegionList ref={regionModalRef} />}

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
          <HeaderModal
            setShowAccountModal={setShowAccountModal}
            setShowInformSignInModal={setShowInformSignInModal}
          />
        )}
      </StyledHeaderGroup>
    </StyledHeaderContainer>
  );
};

export default Header;
