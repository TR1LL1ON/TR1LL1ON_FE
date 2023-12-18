import { useState } from 'react';
import styled from 'styled-components';
import ModalContainer from '@/components/layout/modal/ModalContainer';
import { AccommodationFacility, RoomFacility } from '@/interfaces/interface';
import NoticeModal from './NoticeModal';
import FacilityModal from './FacilityModal';

interface TabModalProps {
  onClose: () => void;
  productsFacility: AccommodationFacility;
  roomsFacility: Array<keyof RoomFacility>;
}

const TabModal = ({
  onClose,
  productsFacility,
  roomsFacility,
}: TabModalProps) => {
  const [activeTab, setActiveTab] = useState('notice');
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <ModalContainer onClose={onClose}>
      <StyledModalWrap>
        <StyledTabContainer>
          <StyledFilterTab
            onClick={() => handleTabClick('notice')}
            active={activeTab === 'notice'}>
            객실 이용 안내
          </StyledFilterTab>
          <StyledFilterTab
            onClick={() => handleTabClick('facility')}
            active={activeTab === 'facility'}>
            전체 편의시설
          </StyledFilterTab>
        </StyledTabContainer>
        {activeTab === 'notice' && <NoticeModal />}
        {activeTab === 'facility' && (
          <FacilityModal
            productsFacility={productsFacility}
            roomsFacility={roomsFacility}
          />
        )}
      </StyledModalWrap>
    </ModalContainer>
  );
};

export default TabModal;

const StyledModalWrap = styled.div`
  height: 80vh;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledTabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
const StyledFilterTab = styled.button<{ active: boolean }>`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? props.theme.colors.primary : 'black')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  z-index: 2;
  background: transparent;
  margin-bottom: 1rem;
`;
