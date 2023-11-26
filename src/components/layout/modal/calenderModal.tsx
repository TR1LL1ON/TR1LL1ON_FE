import styled from 'styled-components';
import DatePicker from './DatePicker';
import { useState } from 'react';
import { Moment } from 'moment';

interface CalenderModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (dates: {
    startDate: Moment | null;
    endDate: Moment | null;
    nights: number;
  }) => void;
}
const CalenderModal: React.FC<CalenderModalProps> = ({
  setShowModal,
  onSave,
}) => {
  const closeModal = () => {
    setShowModal(false);
  };
  const [nights, setNights] = useState(0);

  const handleSaveDates = (
    startDate: Moment | null,
    endDate: Moment | null,
  ) => {
    onSave({
      startDate,
      endDate,
      nights,
    });
  };

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="42rem"
        $height="40rem">
        {nights !== 0 ? (
          <StyledModalTitle>{`${nights}박`}</StyledModalTitle>
        ) : (
          <StyledModalTitle>날짜 선택</StyledModalTitle>
        )}
        <DatePicker
          setNights={setNights}
          onSave={handleSaveDates}
          onCloseModal={closeModal}
        />
      </StyledModalContent>
    </StyledModal>
  );
};

export default CalenderModal;

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
