import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledImgBox } from '../../../style/detail/detailStyle';
import ImageModal from './ImageModal';

const ImageContainer: React.FC = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleImageModal = (
    e: React.MouseEvent<HTMLDivElement>,
    imgSrc: string,
  ) => {
    e.stopPropagation();
    setSelectedImage(imgSrc);
    setShowImageModal(true);
  };
  const imgSrc: string =
    '//a0.muscache.com/im/pictures/84a6cb4f-a4a8-45aa-a79b-b5bb13acadca.jpg';
  return (
    <>
      {showImageModal && (
        <ImageModal
          imgSrc={selectedImage}
          onClose={() => setShowImageModal(false)}
          // isShowModal={showImageModal}
        />
      )}
      <StyledGridImgWrap>
        <StyledMainImgBox
          backgroundImage={imgSrc}
          onClick={(e) => handleImageModal(e, imgSrc)}
        />
        <StyledImgBox
          backgroundImage={imgSrc}
          onClick={(e) => handleImageModal(e, imgSrc)}
        />
        <StyledImgBox
          backgroundImage={imgSrc}
          onClick={(e) => handleImageModal(e, imgSrc)}
        />
        <StyledImgBox
          backgroundImage={imgSrc}
          onClick={(e) => handleImageModal(e, imgSrc)}
        />
        <StyledImgBox
          backgroundImage={imgSrc}
          onClick={(e) => handleImageModal(e, imgSrc)}
        />
      </StyledGridImgWrap>
    </>
  );
};

export default ImageContainer;
export const StyledGridImgWrap = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 1rem;
  height: 30rem;
`;

export const StyledMainImgBox = styled.div<{ backgroundImage: string }>`
  grid-area: 1/1/3;
  background-image: ${(props) => `url('${props.backgroundImage}')`};
  background-size: cover;
  border-radius: 1rem;
  cursor: pointer;
`;

StyledMainImgBox.shouldForwardProp = (prop) =>
  !['backgroundImage'].includes(prop);
