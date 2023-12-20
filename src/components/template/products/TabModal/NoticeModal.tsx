import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';

const NoticeModal = () => {
  return (
    <StyledNoticeModal>
      <>
        <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
          <StyledList>
            <li>
              기준 인원 초과 시 추가 인원에 대한 비용이 별도로 발생할 수
              있습니다.
            </li>
            <li>
              최대 인원 초과 시 입실이 불가능할 수 있으며, 해당 사유로 환불받을
              수 없습니다.
            </li>
            <li>
              반려동물 입실 가능 펜션 외에 반려동물 동반 시 입실이 거부될 수
              있으며, 해당 사유로 환불받을 수 없습니다.
            </li>
            <li>숙박업소는 법적으로 청소년 혼숙이 금지되어 있습니다.</li>
            <li>
              미성년자의 예약 및 이용은 숙소 규정에 따라 결정되며 해당 사유로
              환불받을 수 없습니다.
            </li>
            <li>
              다음 이용 고객을 위해 입실, 퇴실 시간을 준수해 주시기 바랍니다.
            </li>
            <li>
              객실 및 주변 시설 이용 시 시설물의 훼손, 분실의 책임은 투숙객에게
              있으며, 손해배상의 책임을 질 수 있습니다.
            </li>
            <li>
              객실의 안전과 화재예방을 위해 객실 내에서 생선이나 고기 등을 굽는
              직화 방식은 허용되지 않으며, 개인적으로 준비해 오는 취사도구(그릴,
              숯, 전기/전열기구 등)은 반입이 금지되어 있습니다.
            </li>
            <li>
              객실 내에서의 흡연은 금지되어 있으며, 지정된 장소를 이용해 주시기
              바랍니다.
            </li>
            <li>
              다른 이용객에게 피해를 줄 수 있는 무분별한 오락, 음주, 고성방가는
              삼가주시기 바랍니다.
            </li>
            <li>
              실시간 예약 시 중복 예약이 발생할 수 있으며, 해당 사유의 경우
              고객센터를 통해 전액 환불받을 수 있습니다. (야놀자 펜션 고객센터
              측에서 확인 즉시 안내드립니다.)
            </li>
            <li>
              펜션별 기간 미 확정으로 인해 요금 및 요금표가 잘못 반영된 경우,
              자동 예약 취소 처리되며 정상 금액으로 재 예약할 수 있습니다.
            </li>
          </StyledList>
        </StyledFlexContainer>
      </>
    </StyledNoticeModal>
  );
};

export default NoticeModal;

const StyledNoticeModal = styled.div`

}
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  position: relative;

  li::before {
    content: '✔';
    margin-right: 0.5rem;
  }
`;
