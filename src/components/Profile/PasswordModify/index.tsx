import * as S from "./style";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { useState } from "react";
import PasswordModifyModal from "../PasswordModifyModal";

const PasswordModify = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Container>
        <S.Title onClick={() => setIsOpen(true)}>
          비밀번호 변경 <IoIosArrowForward />
        </S.Title>
        <S.Explain>
          주기적인 비밀번호 변경을
          <br /> 통해 개인정보를
          <br /> 안전하게 보호하세요
        </S.Explain>
      </S.Container>
      <PasswordModifyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default PasswordModify;
