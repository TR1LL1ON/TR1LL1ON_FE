import { StyledGridContainer } from '@/style/main/productCardStyle';
import { StyledSubTitle, StyledWrapper } from '@/style/payment/paymentStyle';

import WishCard from './wishCard';

const WishList = () => {
  return (
    <>
      <StyledSubTitle
        $mt="4rem"
        style={{ paddingInline: '5rem', fontSize: '1.2rem' }}>
        찜리스트
      </StyledSubTitle>
      <StyledWrapper
        style={{
          paddingInline: '5rem',
          fontFamily:
            'Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif',
          overflowY: 'auto',
          height: '30vh',
        }}>
        <StyledGridContainer>
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
        </StyledGridContainer>
      </StyledWrapper>
    </>
  );
};

export default WishList;
