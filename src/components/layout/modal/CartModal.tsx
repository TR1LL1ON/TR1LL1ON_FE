import { useRef } from 'react';
import { StyledModal } from '@/style/account/AccountStyle';
import { useClickOutside } from '@/hooks/useClickOutside';
import styled from 'styled-components';
import {
  StyledButton,
  StyledFlexContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import { useNavigate } from 'react-router-dom';

interface ICartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: ICartModalProps) => {
  const navigate = useNavigate();
  const cartModalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(cartModalRef, () => onClose());

  const handleMoveToCart = (): void => {
    navigate('/cart');
  };

  return (
    <StyledModal>
      <StyledContainer
        ref={cartModalRef}
        $flexDirection="column"
        $justifyContent="center"
        $gap="4rem">
        <StyledText $fontSize="1.3rem" $fontWeight={700}>
          상품이 장바구니에 담겼습니다.
        </StyledText>
        <StyledFlexContainer
          $gap="1rem"
          style={{ width: '100%', padding: '1rem' }}>
          <StyledButton
            $variant="primary"
            style={{ width: '100%' }}
            onClick={handleMoveToCart}>
            장바구니로 이동
          </StyledButton>
          <StyledButton
            $variant="primary"
            style={{ width: '100%' }}
            onClick={onClose}>
            취소
          </StyledButton>
        </StyledFlexContainer>
      </StyledContainer>
    </StyledModal>
  );
};

export default CartModal;

const StyledContainer = styled(StyledFlexContainer)`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
`;
