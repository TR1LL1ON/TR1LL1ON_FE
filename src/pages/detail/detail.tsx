import DetailContainer from '../../components/template/detail/DetailContainer';
import GuestModal from '../../components/template/detail/GuestModal/guestModal';

import { useState } from 'react';

const Detail = () => {
  const [showGuestModal, setShowGuestModal] = useState(false);
  const handleGuestModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGuestModal(true);
  };

  return (
    <div>
      <DetailContainer onOpen={handleGuestModal} />

      {showGuestModal && (
        <GuestModal onClose={() => setShowGuestModal(false)} />
      )}
    </div>
  );
};

export default Detail;
