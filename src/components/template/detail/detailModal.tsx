import styled from 'styled-components';
import theme from '../../../style/theme';
import { ModalProps } from '../../../interfaces/interface';
import {
  Button,
  StyledModal,
  StyledModalContent,
} from '../../../style/common/commonStyle';
import {
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledLabel,
  StyledFlexContainer,
  StyledHLine,
} from '../../../style/payment/paymentStyle';
import { v4 as uuidv4 } from 'uuid';

const DetailModal: React.FC<ModalProps> = ({ setShowModal }) => {
  // 모달 밖 영역 클릭 시 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  const roomName: string = '더블 스탠다드룸';
  const basePeople: number = 2;
  const maxPeople: number = 4;
  const roomFeature = {
    occupancy: `기준 ${basePeople}인 / 최대 ${maxPeople}인`,
    smoking: '금연객실',
    bedType: '퀸 침대 1개',
    roomSize: '23.1㎡',
  };

  const amenityArr: string[] = ['무료 와이파이', '발코니', '욕실'];

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="40rem"
        $heigh="40rem">
        <StyledTitle $mt="4rem">{roomName}</StyledTitle>
        <StyledLabel>더 노벰버 스테이 인 랜드마크</StyledLabel>
        <StyledModalFlexContainer>
          <StyledModalText $color="#808080">
            <img src="/icon/person.svg" alt="person" />
            {roomFeature.occupancy}
          </StyledModalText>
          <StyledModalText $color="#808080">
            <img src="/icon/noSmoking.svg" alt="no smoking" />
            {roomFeature.smoking}
          </StyledModalText>
          <StyledModalText $color="#808080" style={{ marginTop: '0.2rem' }}>
            <img src="/icon/bed.svg" alt="bed" />
            {roomFeature.bedType}
          </StyledModalText>
          <StyledModalText $color="#808080" style={{ marginTop: '0.2rem' }}>
            <img src="/icon/size.svg" alt="size" />
            {roomFeature.roomSize}
          </StyledModalText>
        </StyledModalFlexContainer>

        <StyledSubTitle $mt="1rem">주요 서비스 및 편의시설</StyledSubTitle>
        <StyledFlexContainer
          $justifyContent="flex-start "
          $gap="1rem"
          style={{ marginBottom: '2rem' }}>
          {amenityArr.map((item) => (
            <StyledFlexContainer key={uuidv4()} $gap="0.3rem">
              <img src="/icon/check.svg" alt="check" />
              <StyledText $color="#808080">{item}</StyledText>
            </StyledFlexContainer>
          ))}
        </StyledFlexContainer>

        <StyledModalFlexContainer
          $justifyContent="flex-stat"
          $alignItems="left"
          $flexDirection="column">
          <StyledText
            $fontSize={theme.fontSizes.sm}
            $fontWeight={theme.fontWeights.bold}>
            숙박
          </StyledText>
          <StyledText
            $fontSize={theme.fontSizes.md}
            $fontWeight={theme.fontWeights.bold}>
            룸온리
          </StyledText>
          <StyledText $fontSize={theme.fontSizes.xs}>
            체크인 15:00 ~ 체크아웃 12:00
          </StyledText>

          <StyledText
            $fontSize={theme.fontSizes.lg}
            $fontWeight={theme.fontWeights.bold}
            style={{ alignSelf: 'flex-end' }}>
            65,000원
          </StyledText>
          <StyledText
            $fontSize={theme.fontSizes.xs}
            $fontWeight={theme.fontWeights.bold}
            style={{ alignSelf: 'flex-end' }}>
            취소 및 환불 불가
          </StyledText>
        </StyledModalFlexContainer>

        <StyledSubTitle $mt="1rem">후기</StyledSubTitle>
        <StyledModalFlexContainer
          $justifyContent="flex-stat"
          $alignItems="left"
          $flexDirection="column">
          후기
        </StyledModalFlexContainer>
        <Button>168개 객실후기 보기</Button>

        <StyledSubTitle $mt="1rem">취소 수수료</StyledSubTitle>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>기간</StyledTh>
              <StyledTh>취소수수료율</StyledTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledTd>11.26 17:00 전까지</StyledTd>
              <StyledTd>취소 패널티 0%</StyledTd>
            </tr>
            <tr>
              <StyledTd>11.28 17:00 전까지</StyledTd>
              <StyledTd>취소 패널티 50%</StyledTd>
            </tr>
            <tr>
              <StyledTd>11.30 00:00 전까지</StyledTd>
              <StyledTd>취소 패널티 100%</StyledTd>
            </tr>
            <tr>
              <StyledTd>체크인 당일 및 No-show</StyledTd>
              <StyledTd>취소 불가 및 환불 불가</StyledTd>
            </tr>
          </tbody>
        </StyledTable>

        <StyledModalHLine />
        <Button onClick={closeModal}>예약하기</Button>
      </StyledModalContent>
    </StyledModal>
  );
};

export default DetailModal;

const StyledModalText = styled(StyledText)`
  display: flex;
  width: 40%;
  align-items: center;
  gap: 0.1rem;
`;

const StyledModalFlexContainer = styled(StyledFlexContainer)`
  border: 1px solid #d8d8d8;
  border-radius: 0.5rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledModalHLine = styled(StyledHLine)`
  margin-top: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f2f2f2;
  text-align: start;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
