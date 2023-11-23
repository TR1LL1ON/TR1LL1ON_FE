import {
  StyledBorderWrap,
  StyledServiceWrap,
  StyledSubText,
} from '../../../style/detail/detailStyle';
import { StyledFlexContainer } from '../../../style/payment/paymentStyle';
import APIServiceList from './APIServiceList';
import EssentialServiceList from './EssentialServiceList';

const DetailService = () => {
  return (
    <StyledBorderWrap>
      <StyledSubText $mt="0rem" $mb="2rem" $color="#444">
        숙소 편의시설
      </StyledSubText>
      <StyledServiceWrap
        $flexDirection="row"
        $alignItems="flex-end"
        $justifyContent="space-evenly">
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <EssentialServiceList />
        </StyledFlexContainer>
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <APIServiceList />
        </StyledFlexContainer>
        {/*    <SmallButtonBlack className="service-col">
          편의시설 모두 보기
        </SmallButtonBlack> */}
      </StyledServiceWrap>
    </StyledBorderWrap>
  );
};

export default DetailService;

// 편의시설 버튼 제거 ?
/* export const SmallButtonBlack = styled(SmallButton)`
  width: 10rem;
  color: #444;
  border: 1px solid #444;
  background-color: #fff;
  white-space: nowrap;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  transition: background-color 0.3s ease;
  margin-right:1rem;

  &:hover {
    background-color: #444;
    color:#fff;

  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${(props) => props.theme.colors.gray};
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`; */
