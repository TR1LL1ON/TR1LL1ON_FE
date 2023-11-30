import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { StyledButton } from '@/style/common/commonStyle';

export const StyledWrap = styled.article`
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 2.2rem;
  margin: 0 0 2.5rem;
  overflow-x: hidden;
  font-family: 'Pretendard', system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export const StyledBorderWrap = styled(StyledWrap)`
  padding: 2.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledTextBox = styled.div<{
  $padding?: string;
  $fontSize?: string;
  $fontWeight?: number;
}>`
  padding: ${(props) => props.$padding || '1rem'};
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.md};
  font-weight: ${(props) =>
    props.$fontWeight || props.theme.fontWeights.regular};
`;
export const StyledIconBox = styled(StyledFlexContainer)<{
  $fontSize?: string;
  $fontWeight?: number;
  $cursor?: string;
}>`
  padding: 1rem;
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.xl};
  font-weight: ${(props) => props.$fontWeight || props.theme.fontWeights.bold};
  cursor: ${(props) => props.$cursor || 'default'};
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

export const StyledServiceWrap = styled(StyledServiceInfo)`
  padding: 1rem;
  & .service-col > p {
    font-size: ${(props) => props.theme.fontSizes.md};
    display: block;
    flex-shrink: none;
  }
`;
export const StyledH2Text = styled.h2<{
  $fontSize?: string;
  $fontWeight?: number;
  $color?: string;
  $mt?: string;
  $mb?: string;
  $textAlign?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.lg};
  font-weight: ${(props) => props.$fontWeight || props.theme.fontWeights.bold};
  color: ${(props) => props.$color || '#444'};
  margin-top: ${(props) => props.$mt || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  line-height: 1rem;
  text-align: ${(props) => props.$textAlign};
  width: 100%;
`;
export const StyledBold = styled.strong<{
  $fontSize?: string;
  $fontWeight?: number;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.md};
  font-weight: ${(props) => props.$fontWeight || props.theme.fontWeights.bold};
  color: ${(props) => props.$color || ''};
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

export const StyledReservationBtn = styled(StyledButton)`
  width: 10rem;
  padding: 0.6rem 2rem;
`;

export const StyledBlackBtn = styled(StyledButton)`
  background-color: #444;
  color: #fff;
  white-space: nowrap;
  width: auto;
  padding: 0.6rem 2rem;
  &:hover {
    background-color: #333;
    &:disabled {
      background-color: #eee;
    }
  }
`;

export const StyledBorderBtn = styled(StyledBlackBtn)`
  background-color: transparent;
  color: #444;
  border: 1px solid #444;
  transition: background-color 0.3s;
  &:hover {
    background-color: #444;
    color: #fff;
  }
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

export const StyledGridContainer = styled.div<{ $px?: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding-inline: ${(props) => props.$px || '0'};
`;

export const StyledItem = styled.div`
  padding: 1rem 2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.darkGray};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  & svg {
    font-size: ${(props) => props.theme.fontSizes.xl};
    margin-right: 1rem;
  }
  & .mapping {
    width: 33.3%;
    line-height: 4rem;
  }
`;

export const StyledImageContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  width: 100%;
  height: 40rem;
`;
StyledImageContainer.shouldForwardProp = (prop) =>
  !['backgroundImage'].includes(prop);
