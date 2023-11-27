import styled from 'styled-components';
import theme from '@/style/theme';
import { ModalProps } from '@/interfaces/interface';
import { StyledButton } from '@/style/common/commonStyle';
import {
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledFlexContainer,
} from '@/style/payment/paymentStyle';
import { v4 as uuidv4 } from 'uuid';
import Carousel from './carousel';
import { MdKeyboardArrowRight, MdArrowForwardIos } from 'react-icons/md';
import { LuUser, LuBedSingle, LuCheck } from 'react-icons/lu';
import { IoLogoNoSmoking } from 'react-icons/io';
import { SlSizeFullscreen } from 'react-icons/sl';
import CartBtn from '@/components/layout/Button/cartBtn';
import { useNavigate } from 'react-router-dom';

const DetailModal: React.FC<ModalProps> = ({ setShowModal }) => {
  // 모달 밖 영역 클릭 시 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate(`/payment`);
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
        <StyledModalBody>
          <Carousel />
          <StyledTitle>{roomName}</StyledTitle>

          <StyledFlexContainer
            $justifyContent="flex-start"
            style={{
              marginBottom: '0.5rem',
            }}>
            <StyledText $fontWeight={theme.fontWeights.semiBold}>
              더 노벰버 스테이 인 랜드마크
            </StyledText>
            <StyledText>
              <MdArrowForwardIos
                style={{
                  marginTop: '0.2rem',
                }}
              />
            </StyledText>
          </StyledFlexContainer>

          <StyledModalFlexContainer>
            <StyledModalText $color="#808080">
              <LuUser />
              {roomFeature.occupancy}
            </StyledModalText>
            <StyledModalText $color="#808080">
              <IoLogoNoSmoking />
              {roomFeature.smoking}
            </StyledModalText>
            <StyledModalText $color="#808080" style={{ marginTop: '0.2rem' }}>
              <LuBedSingle />
              {roomFeature.bedType}
            </StyledModalText>
            <StyledModalText $color="#808080" style={{ marginTop: '0.2rem' }}>
              <SlSizeFullscreen />
              {roomFeature.roomSize}
            </StyledModalText>
          </StyledModalFlexContainer>

          <StyledSubTitle $mt="3rem">주요 서비스 및 편의시설</StyledSubTitle>

          <StyledFlexContainer
            $justifyContent="flex-start "
            $gap="1rem"
            style={{ marginBottom: '2rem' }}>
            {amenityArr.map((item) => (
              <StyledFlexContainer key={uuidv4()} $gap="0.2rem">
                <LuCheck />
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
            <StyledFlexContainer $justifyContent="flex-end">
              <StyledText
                $fontSize={theme.fontSizes.xs}
                $fontWeight={theme.fontWeights.bold}
                $color="red">
                취소 및 환불 불가
              </StyledText>
              <MdKeyboardArrowRight />
            </StyledFlexContainer>
          </StyledModalFlexContainer>

          <StyledSubTitle $mt="3rem">후기</StyledSubTitle>
          <StyledModalFlexContainer
            $justifyContent="flex-stat"
            $alignItems="left"
            $flexDirection="column">
            후기
          </StyledModalFlexContainer>
          <StyledReviewButton>168개 객실후기 보기</StyledReviewButton>

          <StyledSubTitle $mt="3rem">취소 수수료</StyledSubTitle>
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
        </StyledModalBody>

        <StyledModalFooter>
          <StyledFlexContainer
            $alignItems="baseline"
            $flexDirection="column"
            style={{ padding: '1rem', height: '5rem' }}>
            <StyledFlexContainer $gap="0.3rem">
              <StyledText
                $fontSize={theme.fontSizes.sm}
                $fontWeight={theme.fontWeights.bold}>
                11.29~11.30
              </StyledText>
              <StyledText
                $fontSize={theme.fontSizes.sm}
                $fontWeight={theme.fontWeights.bold}
                $color="red">
                취소 및 환불불가
              </StyledText>
            </StyledFlexContainer>
            <StyledFlexContainer>
              <StyledText
                $fontSize={theme.fontSizes.lg}
                $fontWeight={theme.fontWeights.bold}>
                55,000원
              </StyledText>
            </StyledFlexContainer>
          </StyledFlexContainer>
          <StyledFlexContainer style={{ height: '5rem' }}>
            <CartBtn />
            <StyledButton
              $variant="primary"
              style={{
                width: '15rem',
                margin: '0.5rem',
              }}
              onClick={handleReservationClick}>
              예약하기
            </StyledButton>
          </StyledFlexContainer>
        </StyledModalFooter>
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
const StyledReviewButton = styled.button`
  background-color: #fff;
  border: 1px solid #d8d8d8;
  width: 100%;

  padding: 0.7rem;
  color: #444;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border-radius: 0.5rem;
  &:hover {
    background-color: #eeeeee;
  }
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
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StyledModalBody = styled.div`
  overflow-y: auto;
  padding: 2rem;
`;

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px 0px;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledModalContent = styled.div<{
  $width?: string;
  $heigh?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$heigh || 'auto'};
  max-height: 80vh;
  overflow-y: auto;
`;
