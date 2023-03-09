import { Dispatch, SetStateAction } from "react";
import Modal from "../../Common/Modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfilePersonModifyModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Title>내 프로필 수정</Modal.Title>
    </Modal>
  );
};

export default ProfilePersonModifyModal;
