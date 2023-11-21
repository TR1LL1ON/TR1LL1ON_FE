import { ModalProps } from '../../../interfaces/interface';
import { Button, Modal, ModalContent } from '../../../style/common/commonStyle';

const DetailModal: React.FC<ModalProps> = ({ setShowModal }) => {
  // 모달 밖 영역 클릭 시 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  const roomName: string = '더블 스탠다드룸';
  const basePeople: number = 2;
  const maxPeople: number = 4;
  const 객실특징: string = '금연객실';

  return (
    <Modal onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div> {roomName}</div>
        <div>{`기준 ${basePeople}인 / 최대 ${maxPeople}인`}</div>
        주요 서비스 및 편의시설
        <Button onClick={closeModal}>예약하기</Button>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
