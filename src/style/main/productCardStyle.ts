import styled from 'styled-components';

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 1rem;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 1rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 1rem;
  }
`;

export const StyledProductCard = styled.div`
  width: 100%;
  min-width: 250px;
  cursor: pointer;
`;

export const StyledThumbnail = styled.div`
  height: 280px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const StyledImage = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  src: url(${(props) => props.src});
`;

export const StyledCardTextWrap = styled.div``;

export const StyledProductTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
`;

export const StyledProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: right;
`;

export const StyledDiscount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 0.5rem;
`;

export const StyledOriginalPrice = styled.span`
  text-decoration: line-through;
`;

export const StyledScore = styled.span`
  font-weight: bold;
`;

export const StyledSalePrice = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: 0.5rem;
`;
