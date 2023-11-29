import styled from 'styled-components';

import { ModalProps } from '@/interfaces/interface';
import {
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledFlexContainer,
  StyledImageContainer,
  StyledHLine,
} from '@/style/payment/paymentStyle';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserDetail } from '@/api/service';

const ReviewWriteModal: React.FC<ModalProps> = ({ setShowModal, orderID }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ReservationDetailData'],
    queryFn: () => getUserDetail(orderID as number),
    enabled: orderID !== undefined,
  });

  const DetailData = data;
  console.log(DetailData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    setShowModal(false);
  };

  const [rating, setRating] = useState(0); // 선택된 별점
  const [hover, setHover] = useState(0); // 호버된 별점

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="40rem"
        $heigh="40rem">
        <StyledModalBody>
          <StyledTitle>리뷰작성</StyledTitle>

          <StyledFlexContainer
            style={{
              width: '100%',
              padding: '15px 0',
            }}
            $alignItems="flex-start"
            $gap="0.75rem">
            <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
              <img
                src={`${data?.data.orderItemList[0].orderItemDetail.productImage}`}
                style={{
                  width: '124px',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                }}
              />
            </StyledImageContainer>
            <StyledFlexContainer
              style={{ width: '100%', height: '100%' }}
              $flexDirection="column"
              $alignItems="flex-start">
              <StyledText $fontSize="0.75rem" $opacity={0.7}>
                호텔
              </StyledText>
              <StyledFlexContainer style={{ width: '100%' }}>
                <StyledText $fontWeight={700}>
                  {
                    data?.data.orderItemList[0].orderItemDetail
                      .accommodationName
                  }
                </StyledText>
              </StyledFlexContainer>
              <StyledText $fontSize="0.75rem">
                {
                  data?.data.orderItemList[0].orderItemDetail
                    .accommodationAddress
                }
              </StyledText>
              <StyledText $fontSize="0.75rem">
                {data?.data.orderItemList[0].orderItemDetail.productName} |{' '}
                {data?.data.orderItemList[0].personNumber}인
              </StyledText>

              <StyledFlexContainer style={{ width: '100%' }}>
                <StyledText $fontSize="0.75rem">
                  {data?.data.orderItemList[0].checkIn} ~{' '}
                  {data?.data.orderItemList[0].checkOut}
                </StyledText>
                <StyledText $fontSize="1rem" $fontWeight={700}>
                  {data?.data.orderItemList[0].price}원
                </StyledText>
              </StyledFlexContainer>
            </StyledFlexContainer>
          </StyledFlexContainer>
          <StyledHLine />

          <StyledSubTitle $mt="3rem">별점</StyledSubTitle>
          <div>
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 0.5;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    style={{ display: 'none' }}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(rating)}
                    size={50}
                  />
                </label>
              );
            })}
          </div>
        </StyledModalBody>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ReviewWriteModal;

// const StyledModalText = styled(StyledText)`
//   display: flex;
//   width: 40%;
//   align-items: center;
//   gap: 0.1rem;
// `;

// const StyledModalFlexContainer = styled(StyledFlexContainer)`
//   border: 1px solid #d8d8d8;
//   border-radius: 0.5rem;
//   flex-wrap: wrap;
//   padding: 1rem;
//   margin-bottom: 1rem;
// `;
// const StyledReviewButton = styled.button`
//   background-color: #fff;
//   border: 1px solid #d8d8d8;
//   width: 100%;

//   padding: 0.7rem;
//   color: #444;
//   font-size: ${(props) => props.theme.fontSizes.md};
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   border-radius: 0.5rem;
//   &:hover {
//     background-color: #eeeeee;
//   }
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const StyledTh = styled.th`
//   border: 1px solid #ddd;
//   padding: 0.5rem;
//   background-color: #f2f2f2;
//   text-align: start;
//   font-size: ${(props) => props.theme.fontSizes.sm};
//   font-weight: ${(props) => props.theme.fontWeights.bold};
// `;

// const StyledTd = styled.td`
//   border: 1px solid #ddd;
//   padding: 0.5rem;
//   text-align: left;
//   font-size: ${(props) => props.theme.fontSizes.sm};
// `;

const StyledModalBody = styled.div`
  overflow-y: auto;
  padding: 2rem;
`;

// const StyledModalFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-top: 1px solid #ddd;
//   box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px 0px;
// `;

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
  z-index: 100;
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

// const CarouselWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   overflow: hidden;
// `;
