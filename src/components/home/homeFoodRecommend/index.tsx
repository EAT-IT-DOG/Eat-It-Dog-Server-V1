import {
  HomeFoodRecommendContainer,
  HomeFoodRecommendFoodDescription,
  HomeFoodRecommendFoodIcon,
  HomeFoodRecommendFoodName,
  HomeFoodRecommendTitle,
} from "./style";

const HomeFoodRecommend = () => {
  return (
    <HomeFoodRecommendContainer>
      <HomeFoodRecommendTitle>먹어도 괜찮을까?</HomeFoodRecommendTitle>
      <HomeFoodRecommendFoodIcon />
      <HomeFoodRecommendFoodName>치즈</HomeFoodRecommendFoodName>
      <HomeFoodRecommendFoodDescription>
        염분과 유당 성분이 매우 적은 제품을 먹이거나 강아지 전용으로 출시된
        치즈를 구입해서 먹여야 합니다.
      </HomeFoodRecommendFoodDescription>
    </HomeFoodRecommendContainer>
  );
};

export default HomeFoodRecommend;
