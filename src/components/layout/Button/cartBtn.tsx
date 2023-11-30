import { reservationState, guestCountState } from '@/states/atom';
import { LuShoppingCart } from 'react-icons/lu';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const CartBtn = ({ handleAddCart, setShowCartModal }: any) => {
  const guestCount = useRecoilValue(guestCountState);
  const { checkIn, checkOut } = useRecoilValue(reservationState);
  const handleCartBtnClick = () => {
    handleAddCart();
    setShowCartModal(true);
  };

  return (
    <StyledCartIcon
      disabled={!checkIn || !checkOut || !guestCount.totals ? true : false}
      onClick={handleCartBtnClick}>
      <LuShoppingCart />
    </StyledCartIcon>
  );
};

export default CartBtn;

export const StyledCartIcon = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: ${(props) => props.theme.fontSizes.xl};
  padding: 0.6rem;
  background: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.gray};
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;
