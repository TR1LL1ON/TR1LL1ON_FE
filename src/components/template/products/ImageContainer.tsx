import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ImageSlideModal from './ImageSlideModal';
import { AccommodationImage } from '@/interfaces/interface';

interface ImageContainerProps {
  imgData: AccommodationImage[];
}
const ImageContainer = ({ imgData }: ImageContainerProps) => {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleImageModal = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.stopPropagation();
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  return (
    <>
      {showImageModal && (
        <ImageSlideModal
          images={imgData.map((img) => img.image_url)}
          selectedIndex={selectedImageIndex}
          onClose={() => setShowImageModal(false)}
          onNext={() =>
            setSelectedImageIndex((prev) => (prev + 1) % imgData.length)
          }
          onPrev={() =>
            setSelectedImageIndex(
              (prev) => (prev - 1 + imgData.length) % imgData.length,
            )
          }
        />
      )}
      <StyledGridImgWrap>
        {imgData.map((img, index) => (
          <StyledGridImgBox
            key={img.image_url}
            backgroundImage={img.image_url}
            onClick={(e) => handleImageModal(e, index)}
          />
        ))}
      </StyledGridImgWrap>
    </>
  );
};

export default ImageContainer;
export const StyledGridImgWrap = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  height: 30rem;
`;

const StyledGridImgBox = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  border-radius: 1rem;
  cursor: pointer;

  &:nth-of-type(1) {
    grid-area: 1 / 1 / 3 / 3;
  }
`;
StyledGridImgBox.shouldForwardProp = (prop) =>
  !['backgroundImage'].includes(prop);
