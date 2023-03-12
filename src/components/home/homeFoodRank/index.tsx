import { Suspense } from "react";
import HomeFoodRankingList from "./HomeFoodRankingList";
import {
  HomeFoodRankContainer,
  HomeFoodRankItemWrap,
  HomeFoodRankTitle,
} from "./style";

const HomeFoodRank = () => {
  return (
    <HomeFoodRankContainer>
      <HomeFoodRankTitle>많이 검색된 음식 순위</HomeFoodRankTitle>
      <HomeFoodRankItemWrap>
        <Suspense fallback={<>로딩중...</>}>
          <HomeFoodRankingList />
        </Suspense>
      </HomeFoodRankItemWrap>
    </HomeFoodRankContainer>
  );
};

export default HomeFoodRank;
