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
  const handleTabClick = (event, tabName) => {
    event.stopPropagation();
    setActiveTab(tabName);
  };
  return (
    <ModalContainer onClose={onClose}>
      <StyledModalWrap>
        <StyledTabContainer>
          <FilteredTab
            StyledTab
            onClick={(e) => handleTabClick(e, 'notice')}
            active={activeTab === 'notice'}>
            객실 이용 안내
          </FilteredTab>
          <FilteredTab
            onClick={(e) => handleTabClick(e, 'facility')}
            active={activeTab === 'facility'}>
            숙소 편의시설
          </FilteredTab>
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

interface FilteredTabProps {
  active: boolean;
}
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
  color: ${(props) => (props.active ? 'red' : 'black')}
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')}; 
    z-index: 10;
    background:transparent;


`;
const FilteredTab = ({ active, ...props }: FilteredTabProps) => (
  <StyledTab active={active} {...props} />
);
