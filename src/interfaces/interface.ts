export interface JoinData {
  id: string;
  password: string;
  name: string;
  phone: number;
}

export interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
