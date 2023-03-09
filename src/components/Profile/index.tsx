import { Flex } from "../Common/Flex";
import PasswordModify from "./PasswordModify";
import ProfileDog from "./ProfileDog";
import ProfilePerson from "./ProfilePerson";
import Secession from "./Secession";
import * as S from "./style";
import AriticleImage from "../../assets/images/profile/articleImage.svg";

const Profile = () => {
  return (
    <S.Container>
      <Flex direction="row" gap={40}>
        <ProfilePerson />
        <Flex direction="column" gap={50}>
          <PasswordModify />
          <Secession />
        </Flex>
      </Flex>
      <Flex direction="row" gap={40}>
        <ProfileDog />
        <S.Article>
          <S.ArticleTitle>
            오늘 강아지와 산책
            <br /> 어떠신가요?
          </S.ArticleTitle>
          <S.ArticleImg src={AriticleImage} alt={"articleImg"} />
        </S.Article>
      </Flex>
    </S.Container>
  );
};

export default Profile;
