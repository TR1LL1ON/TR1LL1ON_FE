import styled from 'styled-components';

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
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
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('https://source.unsplash.com/random');
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

export const StyledSalePrice = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: 0.5rem;
`;
