import { StyledFlexContainer, StyledText } from '@/style/payment/paymentStyle';
import { StyledH2Text } from '@/style/products/productsStyle';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledH2Text $textAlign="left" $fontSize="24px">
        TR1LL1ON
      </StyledH2Text>
      <StyledText $fontSize="0.75rem" $opacity={0.8}>
        TR1LL1ON은 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약,
        이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        TR1LL1ONd이 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트
        정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단
        복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및 콘텐츠산업
        진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
      </StyledText>

      <StyledFlexContainer>
        <StyledNameText>Jang Hojin</StyledNameText>
        <StyledNameText>Lee Jaejun</StyledNameText>
        <StyledNameText>Ji Hongkyu</StyledNameText>
        <StyledNameText>Sim Junga</StyledNameText>
        <StyledNameText>Yun Jiyoung</StyledNameText>
        <StyledNameText>Sung Jiwoon</StyledNameText>
        <StyledNameText>Kim Soobin</StyledNameText>
        <StyledNameText>Jeon Yurim</StyledNameText>
        <StyledText>Seo Eun</StyledText>
      </StyledFlexContainer>
      <span>copyright© 2023 TR1LL1ON allrights reserved.</span>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 2rem;
  gap: 1rem;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
const StyledNameText = styled.footer`
  &::after {
    content: '|';
    margin: 1rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;
