import { useState } from 'react';
import styled from 'styled-components';
import ModalContainer from '@/components/layout/modal/ModalContainer';
import NoticeModal from './NoticeModal';
import FacilityModal from './FacilityModal';
import { AccommodationFacility, RoomFacility } from '@/interfaces/interface';

interface ModalTabsProps {
  onClose: () => void;
  productsFacility: AccommodationFacility;
  roomsFacility: Array<keyof RoomFacility>;
}

const ModalTab = ({
  onClose,
  productsFacility,
  roomsFacility,
}: ModalTabsProps) => {
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

export default ModalTab;
interface StyledFilterTabProps {
  active: boolean;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}
const StyledFilterTab = ({ active, ...props }: StyledFilterTabProps) => (
  <StyledTab active={active} {...props}></StyledTab>
);

const StyledModalWrap = styled.div`
  width: 500px;
  height: 80vh;
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

const StyledTab = styled.button<{ active: boolean }>`
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
