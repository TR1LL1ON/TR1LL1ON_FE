import styled from 'styled-components';
import { ModalProps, ReviewMutationParams } from '@/interfaces/interface';
import { StyledButton } from '@/style/payment/paymentStyle';
import { StyledTitle, StyledFlexContainer } from '@/style/payment/paymentStyle';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {
  postReviews,
  getReviews,
  putReviews,
  deleteReviews,
} from '@/api/service';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { findMyReview } from '@/util/util';

const ReviewWriteModal = ({
  setShowModal,
  orderDetailData,
}: Pick<ModalProps, 'setShowModal' | 'orderDetailData'>) => {
  const queryClient = useQueryClient();

  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setShowModal(false);
  };

  const [reviewText, setReviewText] = useState('');
  const [reviewId, setReviewId] = useState('');
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(0);

  const { data } = useQuery({
    queryKey: ['accommodation'],
    queryFn: () => getReviews(),
    enabled: !!orderDetailData?.reviewWritten,
  });

  useEffect(() => {
    if (data?.data && orderDetailData?.orderItemId) {
      const myReview = findMyReview(data.data, orderDetailData.orderItemId);
      if (myReview) {
        setReviewText(myReview.content);
        setScore(myReview.score);
        setReviewId(myReview.reviewId.toString());
      }
    }
  }, [data, orderDetailData]);

  const reviewMutate = useMutation<
    AxiosResponse,
    AxiosError,
    ReviewMutationParams
  >({
    mutationFn: (reviewParams) => {
      // 리뷰 수정
      if (reviewParams.reviewId) {
        return putReviews(
          reviewParams.reviewId,
          reviewParams.content,
          reviewParams.score,
        );
      }
      // 새 리뷰 제출
      else if (orderDetailData?.orderItemId) {
        return postReviews(
          orderDetailData.orderItemId,
          reviewParams.score,
          reviewParams.content,
        );
      }
      // 조건에 해당하지 않는 경우 오류 발생
      else {
        throw new Error(
          'orderDetailData를 찾을 수 없거나, reviewId가 제공되지 않았습니다.',
        );
      }
    },

    onSuccess: (res, reviewParams) => {
      console.log(
        reviewParams.reviewId
          ? '리뷰가 성공적으로 수정되었습니다.'
          : '리뷰가 성공적으로 제출되었습니다.',
        res,
      );
      queryClient.invalidateQueries({
        queryKey: ['ReservationDetailData'],
      });
      setShowModal(false);
    },
    onError: (error) => {
      console.error('리뷰 처리 중 에러가 발생했습니다.', error);
      setShowModal(false);
    },
  });

  // 리뷰 제출 또는 수정 실행 함수
  const submitReview = (reviewParams: ReviewMutationParams) => {
    reviewMutate.mutate(reviewParams);
  };

  const deleteReviewMutate = useMutation<AxiosResponse, AxiosError>({
    mutationFn: () => {
      return deleteReviews(reviewId);
    },
    onSuccess: (res) => {
      console.log('리뷰가 성공적으로 삭제되었습니다.', res);
      queryClient.invalidateQueries({
        queryKey: ['ReservationDetailData'],
      });
      setShowModal(false);
    },
    onError: (error) => {
      console.error('리뷰 삭제 중 에러가 발생했습니다.', error);
      setShowModal(false);
    },
  });

  const deleteReview = () => {
    deleteReviewMutate.mutate();
  };

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="40rem"
        $height="25rem">
        <StyledModalBody>
          <StyledTitle $mt="0">
            {orderDetailData?.reviewWritten ? '리뷰수정' : '리뷰작성'}
          </StyledTitle>
          <StyledFlexContainer $justifyContent="">
            <div>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                const handleClick = () => {
                  if (ratingValue === score) {
                    setScore((prevScore) => Math.max(prevScore - 1, 0));
                  } else {
                    setScore(ratingValue);
                  }
                };

                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={handleClick}
                      style={{ display: 'none' }}
                    />
                    <FaStar
                      className="star"
                      color={
                        ratingValue <= (hover || score) ? '#ffc107' : '#e4e5e9'
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(score)}
                      size={'2rem'}
                    />
                  </label>
                );
              })}
              <span
                style={{
                  marginLeft: '10px',
                  fontSize: '2rem',
                  color: '#ffc107',
                }}>
                {score}
              </span>
            </div>
            {orderDetailData?.reviewWritten && (
              <StyledButton onClick={deleteReview}>리뷰삭제</StyledButton>
            )}
          </StyledFlexContainer>
          <StyledTextArea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="리뷰를 입력해주세요."
            style={{ marginTop: '1rem' }}
          />
          <StyledFlexContainer
            $justifyContent="center"
            $gap="3rem"
            style={{ marginTop: '1rem' }}>
            <StyledButton
              $variant="primary"
              onClick={closeModal}
              style={{
                width: '40%',
                backgroundColor: '#ddd',
                color: 'black',
              }}>
              취소하기
            </StyledButton>
            <StyledButton
              $variant="primary"
              onClick={() =>
                submitReview({
                  reviewId: reviewId, // 이 값이 undefined이면 새 리뷰를 제출
                  content: reviewText,
                  score: score,
                })
              }
              style={{ width: '40%' }}>
              {orderDetailData?.reviewWritten ? '수정하기' : '등록하기'}
            </StyledButton>
          </StyledFlexContainer>
        </StyledModalBody>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ReviewWriteModal;

const StyledModalBody = styled.div`
  overflow-y: auto;
  padding: 2rem;
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
  z-index: 100;
`;

export const StyledModalContent = styled.div<{
  $width?: string;
  $height?: string; // Fixed the typo in height
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'}; // Fixed the typo in height
  max-height: 80vh;
  overflow-y: auto;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  resize: none;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;
