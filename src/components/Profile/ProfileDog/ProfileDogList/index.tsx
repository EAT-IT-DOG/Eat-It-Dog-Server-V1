import { useState } from "react";
import ProfileDogSection from "../ProfileDogSection";
import * as S from "./style";

const ProfileDogList = () => {
  const [viewIdx, setViewIdx] = useState(0);

  const viewArray = [<ProfileDogSection />, <ProfileDogSection />];

  return (
    <S.Container>
      {viewArray.map((view, idx) => idx === viewIdx && view)}
      <S.DotWrap>
        {Array.from({ length: viewArray.length }).map((_, idx) => (
          <S.Dot onClick={() => setViewIdx(idx)} />
        ))}
      </S.DotWrap>
    </S.Container>
  );
};

export default ProfileDogList;
