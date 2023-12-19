import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { currPositionState } from '@/states/atom';
import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

const MapSearch = React.lazy(() => import('./MapSearch'));
interface MapModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const MapModal: React.FC<MapModalProps> = ({ setShowModal }) => {
  const currPosition = useRecoilValue(currPositionState);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="60rem"
        $height="42rem">
        <Suspense fallback={<LoadingSpinner />}>
          <MapSearch
            lat={currPosition.lat}
            lng={currPosition.lng}
            closeMapModal={closeModal}
          />
        </Suspense>
      </StyledModalContent>
    </StyledModal>
  );
};

export default MapModal;

export const StyledModalTitle = styled.h1<{
  $mb?: string;
  $mt?: string;
  $mx?: string;
  $px?: string;
}>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${(props) => props.$mt || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  padding-inline: ${(props) => props.$px || '0'};
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;

export const StyledModalContent = styled.div<{
  $width?: string;
  $height?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem 1.5rem;
`;
