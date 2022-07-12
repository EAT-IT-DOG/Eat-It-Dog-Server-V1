import HomeFoodCarousel from "./homeFoodCarousel";
import HomeFoodRank from "./homeFoodRank";
import HomeFoodRecommend from "./homeFoodRecommend";
import HomePanel from "./homePanel";
import { HomeBottomWrap, HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomePanel />
      <HomeFoodCarousel />
      <HomeBottomWrap>
        <HomeFoodRank />
        <HomeFoodRecommend />
      </HomeBottomWrap>
    </HomeContainer>
  );
};

export default Home;
