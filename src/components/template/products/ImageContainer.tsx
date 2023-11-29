import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ImageSlideModal from './ImageSlideModal';

const ImageContainer: React.FC = () => {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const images: string[] = [
    'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bca57cdc-bc62-4366-91e9-03ba6c4059ee.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bf91b1f5-1942-4ecd-95b0-328bb617c47e.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/a100b178-2ec2-45a8-a9e8-9d3b4dd5c777.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/94b5ed5b-508e-4500-b842-d51e71993e5e.jpeg?im_w=720',
  ];
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
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={() => setShowImageModal(false)}
          onNext={() =>
            setSelectedImageIndex((prev) => (prev + 1) % images.length)
          }
          onPrev={() =>
            setSelectedImageIndex(
              (prev) => (prev - 1 + images.length) % images.length,
            )
          }
        />
      )}
      <StyledGridImgWrap>
        {images.map((img, index) => (
          <StyledGridImgBox
            key={img}
            backgroundImage={img}
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
