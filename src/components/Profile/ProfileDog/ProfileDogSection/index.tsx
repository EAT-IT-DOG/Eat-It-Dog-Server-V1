import Avatar from "../../../Common/Avatar";
import Button from "../../../Common/Button";
import { Flex } from "../../../Common/Flex";
import * as S from "./style";

const ProfileDogSection = () => {
  return (
    <>
      <S.Container>
        <Avatar imageUrl="https://storage.surfit.io/user/avatar/2040136534/2040136534-84195924064086d68094e5.png" />
        <S.TextWrap>
          <Flex align="center" direction="row">
            <S.TextTitle>이름</S.TextTitle>
            <S.TextContent>정우재</S.TextContent>
          </Flex>
          <Flex align="center" direction="row">
            <S.TextTitle>생일</S.TextTitle>
            <S.TextContent>2005년 1월 1일</S.TextContent>
          </Flex>
          <Flex align="center" direction="row">
            <S.TextTitle>성별</S.TextTitle>
            <S.TextContent>여</S.TextContent>
          </Flex>
          <Flex align="center" direction="row">
            <S.TextTitle>종</S.TextTitle>
            <S.TextContent>잡종</S.TextContent>
          </Flex>
        </S.TextWrap>
      </S.Container>
      <Button
        buttonType="Submit"
        customStyle={{ marginLeft: "auto", marginTop: "auto" }}
      >
        수정
      </Button>
    </>
  );
};

export default ProfileDogSection;
