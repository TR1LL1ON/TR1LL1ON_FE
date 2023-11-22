import styled, { css } from 'styled-components';
import { Button } from '../common/commonStyle';
import { StyledFlexContainer } from '../payment/paymentStyle';

export const StyledWrap = styled.article`
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 2.2rem;
  margin: 0 0 2.5rem;
  font-family: 'Pretendard', system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export const StyledBorderWrap = styled(StyledWrap)`
  padding: 2.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
export const StyledServiceInfo = styled(StyledFlexContainer)<{
  $fontSize?: string;
  $fontWeight?: number;
  $opacity?: number;
  $color?: string;
  $mt?: string;
  $mb?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.lg};
  font-weight: ${(props) =>
    props.$fontWeight || props.theme.fontWeights.medium};
  color: ${(props) => props.$color || props.theme.colors.darkGray};
  margin-top: ${(props) => props.$mb || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};

  & > p {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;
export const StyledSubText = styled.h2<{
  $fontSize?: string;
  $fontWeight?: number;
  $color?: string;
  $mt?: string;
  $mb?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.lg};
  font-weight: ${(props) => props.$fontWeight || props.theme.fontWeights.bold};
  color: ${(props) => props.$color || props.theme.colors.darkGray};
  margin-top: ${(props) => props.$mt || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  line-height: 1rem;
`;

export const StyledBrandText = styled.b`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
`;

export const StyledOnClick = styled.a<{
  $color?: string;
  $borderColor?: string;
  $borderBottom?: string;
}>`
  line-height: 1.6rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.md};
  border-bottom: ${(props) => props.$borderBottom || '1px solid'};
  border-color: ${(props) => props.$borderColor || props.theme.colors.blue};
  color: ${(props) => props.$color || props.theme.colors.blue};
  cursor: pointer;
  white-space: nowrap;
`;

export const StyledSelect = styled(StyledFlexContainer)`
  font-size: ${(props) => props.theme.fontSizes.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledPriceText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const StyledFlexRowGroup = styled(StyledFlexContainer)`
  height: 14rem;
`;

export const StyledImgItem = styled.div`
  width: 40%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
`;

export const StyledTextItem = styled(StyledFlexContainer)`
  width: 60%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  & > div,
  h2 {
    width: 100%;
  }
`;

export const SmallButton = styled(Button)`
  width: 10rem;
`;

export const StyledTextRow = styled.p<{
  $fontSize?: string;
  $fontWeight?: number;
  $opacity?: number;
}>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 1.6rem;
`;

export const StyledImgBox = styled.div<{ backgroundImage: string }>`
  height: 100%;
  background-image: ${(props) => `url('${props.backgroundImage}')`};
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  background-image: ${(props) => `url('${props.backgroundImage}')`};
  ${(props) => `url('${props.backgroundImage}')`}
`;
StyledImgBox.shouldForwardProp = (prop) => !['backgroundImage'].includes(prop);
