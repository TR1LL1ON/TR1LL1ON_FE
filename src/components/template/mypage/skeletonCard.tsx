import styled, { keyframes } from 'styled-components';
import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
} from '@/style/payment/paymentStyle';

export const SkeletonCard = () => {
  return (
    <div style={{ paddingBottom: '2rem' }}>
      <SkeletonContainer>
        <SkeletonImage />
        <StyledFlexContainer
          style={{ width: '100%', height: '127px' }}
          $flexDirection="column"
          $alignItems="flex-start">
          <SkeletonText style={{ width: '30%', height: '30%' }} />
          <SkeletonText style={{ width: '20%', height: '15%' }} />
          <SkeletonText style={{ width: '10%', height: '10%' }} />
          <SkeletonText style={{ width: '8%', height: '10%' }} />
          <SkeletonText style={{ width: '10%', height: '15%' }} />
        </StyledFlexContainer>
      </SkeletonContainer>
    </div>
  );
};

const pulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #fdfdfd;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const SkeletonContainer = styled(StyledFlexContainer)`
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkeletonImage = styled(StyledImageContainer)`
  flex-shrink: 0;
  width: 124px;
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const SkeletonText = styled(StyledText)`
  background-color: #e0e0e0;
  height: 20px;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  animation: ${pulse} 2s infinite ease-in-out;
`;
