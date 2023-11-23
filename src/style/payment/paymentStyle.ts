import styled from 'styled-components';
import { fadeIn, fadeOut } from './paymentAnimation';
import { ReactComponent as kakaoPaymentLogo } from '../../assets/kakaoPay.svg';
import { ReactComponent as naverPayLogo } from '../../assets/naverPay.svg';
import { ReactComponent as mastercardLogo } from '../../assets/mastercard.svg';

export const StyledGridContainer = styled.div<{ $px?: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding-inline: ${(props) => props.$px || '0'};
`;

export const StyledFlexContainer = styled.div<{
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || 'row'};
  gap: ${(props) => props.$gap || '0'};
  align-items: ${(props) => props.$alignItems || 'center'};
  justify-content: ${(props) => props.$justifyContent || 'space-between'};
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledHLine = styled.div<{ $mBlock?: string }>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-block: ${(props) => props.$mBlock || '1.5rem'};
`;

export const StyledTitle = styled.h1<{
  $mb?: string;
  $mt?: string;
  $mx?: string;
  $px?: string;
}>`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${(props) => props.$mt || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  padding-inline: ${(props) => props.$px || '0'};
`;

export const StyledSubTitle = styled.h2<{ $mb?: string; $mt?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  margin-top: ${(props) => props.$mt || '1rem'};
`;

export const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 0.5rem;
`;

export const StyledText = styled.p<{
  $fontSize?: string;
  $fontWeight?: number;
  $opacity?: number;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.sm};
  font-weight: ${(props) =>
    props.$fontWeight || props.theme.fontWeights.regular};
  line-height: 1.5;
  opacity: ${(props) => props.$opacity || 1};
  color: ${(props) => props.$color || ''};
`;

export const StyledButton = styled.button<{ $variant?: string }>`
  font-size: ${(props) =>
    props.$variant === 'primary'
      ? props.theme.fontSizes.md
      : props.theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: ${(props) =>
    props.$variant === 'primary' ? 'none' : 'underline'};
  text-underline-offset: 0.2rem;
  background-color: ${(props) =>
    props.$variant === 'primary' ? props.theme.colors.primary : 'transparent'};
  color: ${(props) => (props.$variant === 'primary' ? '#fff' : '#000')};
  padding: ${(props) => (props.$variant === 'primary' ? '1rem 2rem' : '0')};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
`;

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  &[aria-expanded='true'] {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    user-select: none;
    transition: transform 0.2s ease-in-out;

    &.open {
      transform: rotate(180deg);
    }
  }

  .selected {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const StyledDropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  z-index: 1;
  overflow: hidden;
  animation: ${(props) => (props.$isOpen ? fadeIn : fadeOut)} 0.2s ease-in-out;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;

export const StyledDropdownItem = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledCheckboxInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.25rem;
  cursor: pointer;

  &:checked {
    border-color: black;
    background-color: black;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='check'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z' fill='%23ffffff' class='color000000 svgShape'%3E%3C/path%3E%3C/svg%3E");
  }
`;

export const StyledInputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  user-select: none;
  cursor: pointer;
`;

export const StyledSpacer = styled.div<{ $height?: string }>`
  height: ${(props) => props.$height || '2rem'};
`;

export const StyledImageContainer = styled.div<{
  $w?: string;
  $h?: string;
  $borderR?: string;
}>`
  position: relative;
  width: ${(props) => props.$w || '124px'};
  height: ${(props) => props.$h || '106px'};
  border-radius: ${(props) => props.$borderR || '0.5rem'};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const KakaoPayLogo = styled(kakaoPaymentLogo)`
  width: 33px;
  height: 33px;
  object-fit: cover;
`;

export const NaverPayLogo = styled(naverPayLogo)`
  width: 33px;
  height: 33px;
  object-fit: cover;
`;

export const MastercardLogo = styled(mastercardLogo)`
  width: 33px;
  height: 33px;
  object-fit: cover;
`;
