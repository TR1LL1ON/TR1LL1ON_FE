import GuestModal from '../../components/layout/modal/GuestModal/guestModal';
import DetailContainer from '../../components/template/detail/DetailContainer';
import DetailModal from '../../components/template/detail/detailModal';
import { useState } from 'react';

const Detail = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const handleDetailModal = () => {
    setShowDetailModal(true);
  };
  const handleGuestModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGuestModal(true);
  };

  return (
    <div>
      <DetailContainer onOpen={handleGuestModal} />
      <button onClick={handleDetailModal}>상세보기</button>
      {showDetailModal && <DetailModal setShowModal={setShowDetailModal} />}

      {showGuestModal && (
        <GuestModal onClose={() => setShowGuestModal(false)} />
      )}
    </div>
  );
};

export default Detail;
