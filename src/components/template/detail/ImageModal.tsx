import { StyledH2Text } from '@/style/detail/detailStyle';
import ModalContainer from '@/components/layout/modal/ModalContainer';

interface ImageModalProps {
  imgSrc: string;
  onClose: () => void;
}

const ImageModal = ({ imgSrc, onClose }: ImageModalProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <img src={imgSrc} alt="숙소 이름" />
      <StyledH2Text>숙소 이름</StyledH2Text>
    </ModalContainer>
  );
};

export default ImageModal;
