import React from 'react';
import styled from 'styled-components';
import { StyledImgBox } from '../../../style/detail/detailStyle';

const ImageContainer: React.FC = () => {
  const imgSrc: string =
    '//a0.muscache.com/im/pictures/84a6cb4f-a4a8-45aa-a79b-b5bb13acadca.jpg';
  return (
    <StyledGridImgWrap>
      <StyledMainImgBox backgroundImage={imgSrc} />
      <StyledImgBox backgroundImage={imgSrc} />
      <StyledImgBox backgroundImage={imgSrc} />
      <StyledImgBox backgroundImage={imgSrc} />
      <StyledImgBox backgroundImage={imgSrc} />
    </StyledGridImgWrap>
  );
};

export default ImageContainer;
export const StyledGridImgWrap = styled.div`
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
`;

StyledMainImgBox.shouldForwardProp = (prop) =>
  !['backgroundImage'].includes(prop);
