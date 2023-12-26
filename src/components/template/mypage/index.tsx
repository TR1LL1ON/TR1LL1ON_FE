import { StyledTitle } from '@/style/payment/paymentStyle';
import ReservationList from './reservationList';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Error } from './error';
import ReviewList from './reviewList';
import { useState } from 'react';
import WishList from './wishList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const MypageContainer = () => {
  const { reset } = useQueryErrorResetBoundary();

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <ErrorBoundary FallbackComponent={Error} onError={reset}>
      <StyledTitle>마이페이지</StyledTitle>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            '.MuiTabs-indicator': {
              backgroundColor: '#de2f5f', // 인디케이터 색상 변경
            },
            '.Mui-selected': {
              color: '#de2f5f', // 활성화된 탭의 텍스트 색상
            },
          }}>
          <Tab label="예약내역" style={{ fontSize: '1.2rem' }} />
          <Tab label="리뷰" style={{ fontSize: '1.2rem' }} />
          <Tab label="찜리스트" style={{ fontSize: '1.2rem' }} />
        </Tabs>
      </Box>

      {activeTab === 0 && <ReservationList />}
      {activeTab === 1 && <ReviewList />}
      {activeTab === 2 && <WishList />}
    </ErrorBoundary>
  );
};

export default MypageContainer;
