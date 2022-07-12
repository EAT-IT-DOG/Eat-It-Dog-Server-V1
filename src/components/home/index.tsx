import HomeFoodCarousel from "./homeFoodCarousel";
import HomeFoodRank from "./homeFoodRank";
import HomePanel from "./homePanel";
import { HomeBottomWrap, HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomePanel />
      <HomeFoodCarousel />
      <HomeBottomWrap>
        <HomeFoodRank />
      </HomeBottomWrap>
    </HomeContainer>
  );
};

export default Home;
