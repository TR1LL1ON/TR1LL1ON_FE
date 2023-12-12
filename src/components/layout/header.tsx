import { useEffect, useRef, useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { currPositionState } from '@/states/atom';
import { getGeolocation } from '@/util/geolocation';

const Header = () => {
  const headerModalRef = useRef<HTMLDivElement>(null);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const regionModalRef = useRef<HTMLDivElement>(null);

  const [showMapModal, setShowMapModal] = useState(false);

  const [currPosition, setCurrPosition] = useRecoilState(currPositionState);

  // 위치정보 받아오기 -
  useEffect(() => {
    let isMounted = true;

    const fetchCurrentLocation = async () => {
      try {
        const position = await getGeolocation();

        if (isMounted) {
          setCurrPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        }
      } catch (error) {
        if (isMounted) {
          console.error('위치 정보를 받아오지 못했습니다');
        }
      }
    };

    fetchCurrentLocation();
    return () => {
      isMounted = false;
    };
  }, [setCurrPosition]);
  const handleMapModal = () => {
    if (currPosition.lat === 0 && currPosition.lng === 0) {
      alert('위치 기반 검색을 위해 브라우저에서 위치 정보를 허용해주세요.');
    } else {
      setShowMapModal(true);
    }
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
      {isAccountModalOpen && (
        <AccountModal setIsAccountModalOpen={setIsAccountModalOpen} />
      )}
      <StyledTitle style={{ fontWeight: '900' }}>
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
          <HeaderModal setIsAccountModalOpen={setIsAccountModalOpen} />
        )}
      </StyledHeaderGroup>
    </StyledHeaderContainer>
  );
};

export default Header;
