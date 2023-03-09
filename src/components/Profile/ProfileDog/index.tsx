import ProfileDogList from "./ProfileDogList";
import * as S from "./style";

const ProfileDog = () => {
  return (
    <S.Container>
      <S.Title>강아지 프로필</S.Title>
      <ProfileDogList />
    </S.Container>
  );
};

export default ProfileDog;
