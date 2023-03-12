import { useNavigate } from "react-router-dom";
import { FoodTypeKorean } from "../../../../types/food/food.type";
import {
  HomeFoodCarouselItemContainer,
  HomeFoodCarouselItemDescription,
  HomeFoodCarouselItemIcon,
  HomeFoodCarouselItemIconWrap,
  HomeFoodCarouselItemTextWrap,
  HomeFoodCarouselItemTitle,
} from "./style";

interface Props {
  backgroundColor: string;
  type: string;
  description: string;
  icon: string;
}

const HomeFoodCarouselItem = ({
  backgroundColor,
  type,
  description,
  icon,
}: Props) => {
  const navigate = useNavigate();

  return (
    <HomeFoodCarouselItemContainer
      backgroundColor={backgroundColor}
      onClick={() => navigate(`/search?type=${type}`)}
    >
      <HomeFoodCarouselItemIconWrap backgroundColor={backgroundColor}>
        <HomeFoodCarouselItemIcon src={icon} />
      </HomeFoodCarouselItemIconWrap>
      <HomeFoodCarouselItemTextWrap>
        <HomeFoodCarouselItemTitle>
          {FoodTypeKorean[type]}
        </HomeFoodCarouselItemTitle>
        <HomeFoodCarouselItemDescription>
          {description} 등
        </HomeFoodCarouselItemDescription>
      </HomeFoodCarouselItemTextWrap>
    </HomeFoodCarouselItemContainer>
  );
};

export default HomeFoodCarouselItem;
