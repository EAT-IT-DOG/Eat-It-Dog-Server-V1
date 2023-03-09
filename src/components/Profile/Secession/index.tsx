import * as S from "./style";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import AriticleImage from "../../../assets/images/profile/articleImage2.svg";
import { useState } from "react";
import Dialog from "../../Common/Dialog";

const Secession = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Container>
        <S.Title onClick={() => setIsOpen(true)}>
          회원 탈퇴 <IoIosArrowForward />
        </S.Title>
        <S.AritcleImg src={AriticleImage} />
      </S.Container>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Text>정말로 먹어보시개를 떠나실 건가요?</Dialog.Text>
        <Dialog.Buttons>
          <button className="cancel" onClick={() => setIsOpen(false)}>
            취소
          </button>
          <button className="submit">확인</button>
        </Dialog.Buttons>
      </Dialog>
    </>
  );
};

export default Secession;
