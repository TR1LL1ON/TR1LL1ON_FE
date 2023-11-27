import ModalContainer from '@/components/layout/modal/ModalContainer';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import styled from 'styled-components';

interface ImageSlideModalProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageSlideModal = ({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: ImageSlideModalProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <StyledImgModal>
        <StyledArrowBtn className="prev" onClick={onPrev}>
          <IoIosArrowBack className="icon" />
        </StyledArrowBtn>
        <img src={images[selectedIndex]} alt="숙소 이미지" />
        <StyledArrowBtn className="next" onClick={onNext}>
          <IoIosArrowForward className="icon" />
        </StyledArrowBtn>
        <StyledPhotoIndex>
          {selectedIndex + 1} / {images.length}
        </StyledPhotoIndex>
      </StyledImgModal>
    </ModalContainer>
  );
};

export default ImageSlideModal;

export const StyledImgModal = styled.div`
  width: 60vw;
  max-height: 90vh;
  overflow-y: hidden;
  position: relative;
`;
export const StyledArrowBtn = styled.button`
  position: absolute;
  font-size: 3.4rem;
  background: transparent;
  opacity: 0.8;
  &.prev {
    left: 10px;
    top: 47%;
  }
  &.next {
    right: 10px;
    top: 47%;
  }
  & > svg {
    background: ${(props) => props.theme.colors.darkGray};
    border-radius: 1rem;
    width: 100%;
    color: #fff;
    padding: 0.4rem;
  }
`;
const StyledPhotoIndex = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #fff;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: 0.5rem 1.2rem;
  background-color: ${(props) => props.theme.colors.darkGray};
  border-radius: 1rem;
  opacity: 0.8;
`;
