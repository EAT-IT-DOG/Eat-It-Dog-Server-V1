import { Dispatch, SetStateAction } from "react";
import InputTitleWrapper from "../../Common/InputWrapper";
import Modal from "../../Common/Modal";
import TextInput from "../../Common/TextInput";
import * as S from "./style";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const PasswordModifyModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Title>비밀번호 변경</Modal.Title>
      <S.InputWrap>
        <InputTitleWrapper direction="column">
          <InputTitleWrapper.Title
            customStyle={{ marginBottom: 10, lineHeight: "23px" }}
          >
            현재 비밀번호
          </InputTitleWrapper.Title>
          <TextInput placeholder="현재 비밀번호를 입력해 주세요" />
        </InputTitleWrapper>
        <InputTitleWrapper direction="column">
          <InputTitleWrapper.Title
            customStyle={{ marginBottom: 10, lineHeight: "23px" }}
          >
            새 비밀번호
          </InputTitleWrapper.Title>
          <TextInput placeholder="현재 비밀번호를 입력해 주세요" />
        </InputTitleWrapper>
        <InputTitleWrapper direction="column">
          <InputTitleWrapper.Title
            customStyle={{ marginBottom: 10, lineHeight: "23px" }}
          >
            새 비밀번호 확인
          </InputTitleWrapper.Title>
          <TextInput placeholder="현재 비밀번호를 입력해 주세요" />
        </InputTitleWrapper>
      </S.InputWrap>
      <Modal.Buttons>
        <button className="cancel" onClick={() => setIsOpen(false)}>
          취소
        </button>
        <button className="submit">확인</button>
      </Modal.Buttons>
    </Modal>
  );
};

export default PasswordModifyModal;
