import styled from 'styled-components';

export const StyledGridContainer = styled.div<{ $px?: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding-inline: ${(props) => props.$px || '0'};
`;
