import { useState } from "react";
import Avatar from "../../Common/Avatar";
import Button from "../../Common/Button";
import { Flex } from "../../Common/Flex";
import ProfilePersonModifyModal from "../ProfilePersonModifyModal";
import * as S from "./style";

const ProfilePerson = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Container>
        <S.Title>내 프로필</S.Title>
        <S.MiddleWrap>
          <Avatar imageUrl="https://storage.surfit.io/user/avatar/2040136534/2040136534-84195924064086d68094e5.png" />
          <S.TextWrap>
            <Flex align="center" direction="row">
              <S.TextTitle>이름</S.TextTitle>
              <S.TextContent>우준성</S.TextContent>
            </Flex>
            <Flex align="center" direction="row">
              <S.TextTitle>이메일</S.TextTitle>
              <S.TextContent>begopa@naver.com</S.TextContent>
            </Flex>
          </S.TextWrap>
        </S.MiddleWrap>
        <Button
          buttonType="Submit"
          customStyle={{ marginLeft: "auto", marginTop: "auto" }}
          onClick={() => setIsOpen(true)}
        >
          수정
        </Button>
      </S.Container>
      <ProfilePersonModifyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProfilePerson;
