import { LuUser, LuBedSingle } from 'react-icons/lu';
import { useState } from 'react';
import theme from '@/style/theme';
import {
  StyledWrap,
  StyledBrandText,
  StyledOnClick,
  StyledFlexRowGroup,
  StyledImgItem,
  StyledTextItem,
  StyledH2Text,
  StyledPriceText,
  StyledTextRow,
  StyledReservationBtn,
} from '@/style/products/productsStyle';
import { StyledFlexContainer, StyledText } from '@/style/payment/paymentStyle';
import CartBtn from '@/components/layout/Button/cartBtn';
import DetailModal from './detailModal/detailModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  reservationState,
  guestCountState,
  cartsDataState,
} from '@/states/atom';
import { useNavigate } from 'react-router-dom';
import {
  ProductReview,
  Room,
  AccommodationData,
  AddCart,
} from '@/interfaces/interface';
import Carousel from './detailModal/carousel';
import CartModal from '@/components/layout/modal/CartModal';
import { calculateCancellation } from '@/util/calculateCancellation';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getCarts, postCart } from '@/api/service';
import InformSignInModal from '@/components/layout/modal/InformSignInModal';
import AccountModal from '@/components/layout/modal/accountModal';
import { getCookie } from '@/util/util';

interface RoomCardProps {
  roomData: Room;
  productReview: ProductReview[] | undefined;
  name: string;
  infoData: AccommodationData;
}
const RoomCard: React.FC<RoomCardProps> = ({
  roomData,
  productReview,
  name,
  infoData,
}) => {
  const navigate = useNavigate();
  const isSignIn = getCookie('accessToken');
  const imageUrls = roomData.image.map((item) => item.imageUrl);
  const guestCount = useRecoilValue(guestCountState);
  const { checkIn, checkOut } = useRecoilValue(reservationState);
  const setCartsData = useSetRecoilState(cartsDataState);
  const [showInformSignInModal, setShowInformSignInModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const { cancellationStatus, isCancelable } = calculateCancellation(checkIn);
  const textColor = isCancelable ? 'green' : 'red'; // 취소 가능하면 녹색, 불가능하면 빨간색
  const cartsDataQuery = useQuery({
    queryKey: ['CartsData'],
    queryFn: () => {
      if (isSignIn) {
        return getCarts();
      } else {
        return null;
      }
    },
  });
  const addCartMutation = useMutation({
    mutationFn: (cart: AddCart) => postCart(cart),
    onSuccess: async () => {
      const res = await cartsDataQuery.refetch();
      const getCartsData = res.data ?? [];
      setCartsData(getCartsData);
    },
    onError: (error) => {
      if (error.message.includes('404')) {
        alert('유효하지 않은 상품입니다.');
      }
    },
  });

  const cart = {
    checkIn,
    checkOut,
    personNumber: guestCount.totals,
    price: roomData.averPrice,
    productId: roomData.roomId,
  };

  const handleAddCart = () => {
    addCartMutation.mutate(cart);
  };

  const handleDetailModal = () => {
    setShowDetailModal(true);
  };

  const handleSignInNavigation = (link: string): void => {
    if (!isSignIn) {
      setShowInformSignInModal(true);
    } else {
      handleAddCart();
      navigate(link);
    }
  };

  return (
    <StyledWrap>
      {showInformSignInModal && (
        <InformSignInModal
          setShowAccountModal={setShowAccountModal}
          setShowInformSignInModal={setShowInformSignInModal}
        />
      )}
      {showAccountModal && (
        <AccountModal setShowAccountModal={setShowAccountModal} />
      )}
      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
      <StyledFlexRowGroup $gap="1rem">
        <StyledImgItem style={{ overflow: 'hidden' }}>
          <Carousel imageUrls={imageUrls} />
        </StyledImgItem>
        <StyledTextItem
          $flexDirection="column"
          $justifyContent="space-between"
          $gap="0.5rem">
          <div>
            <StyledFlexContainer $flexDirection="row">
              <StyledH2Text>숙박</StyledH2Text>
              <StyledOnClick onClick={handleDetailModal}>
                상세보기
              </StyledOnClick>
              {showDetailModal && (
                <DetailModal
                  setShowModal={setShowDetailModal}
                  roomData={roomData}
                  infoData={infoData}
                  imageUrls={imageUrls}
                  productReview={productReview}
                  name={name}
                  handleAddCart={handleAddCart}
                  handleSignInNavigation={handleSignInNavigation}
                  setShowCartModal={setShowCartModal}
                  setShowInformSignInModal={setShowInformSignInModal}
                />
              )}
            </StyledFlexContainer>
            <StyledH2Text
              $color="darkGray"
              $fontSize="1rem"
              $mt="0"
              $mb="0"
              $fontWeight={400}>
              {`체크인: ${roomData.checkIn} ~ 체크아웃: ${roomData.checkOut}`}
            </StyledH2Text>
          </div>
          <StyledPriceText>
            {`${roomData.averPrice.toLocaleString()}원`}
            <StyledText
              $fontSize={theme.fontSizes.md}
              $fontWeight={theme.fontWeights.bold}
              $color={textColor}>
              {cancellationStatus}
            </StyledText>
          </StyledPriceText>

          <StyledFlexContainer $flexDirection="row">
            <StyledBrandText>{`남은객실 ${roomData.count}`}</StyledBrandText>
            <StyledFlexContainer $gap=".5rem">
              <CartBtn
                handleAddCart={handleAddCart}
                setShowCartModal={setShowCartModal}
                setShowInformSignInModal={setShowInformSignInModal}
              />
              <StyledReservationBtn
                onClick={() =>
                  handleSignInNavigation(
                    `/payment?productId=${roomData.roomId}`,
                  )
                }
                $full={false}
                $variant="primary">
                예약하기
              </StyledReservationBtn>
            </StyledFlexContainer>
          </StyledFlexContainer>
        </StyledTextItem>
      </StyledFlexRowGroup>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledH2Text>{roomData.roomName}</StyledH2Text>
        <StyledTextRow>
          <LuUser className="icon" />
          {`기준 ${roomData.standardNumber}인 | 최대 ${roomData.maxNumber}인`}
        </StyledTextRow>
        <StyledTextRow>
          <LuBedSingle className="icon" />
          싱글 침대 1개
        </StyledTextRow>
      </StyledFlexContainer>
    </StyledWrap>
  );
};
export default RoomCard;
