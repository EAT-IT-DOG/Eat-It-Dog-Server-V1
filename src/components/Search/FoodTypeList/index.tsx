import { useNavigate } from "react-router-dom";
import { SEARCH_FOOD_TYPES_ITEM } from "../../../constants/search/search.constant";
import * as S from "./style";

const FoodTypeList = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      {SEARCH_FOOD_TYPES_ITEM.map((type) => (
        <S.FoodTypeItem
          onClick={() => navigate(`/search?type=${type.type}`)}
          safenessType={type.safeness}
          key={type.title}
        >
          {type.title}
        </S.FoodTypeItem>
      ))}
    </S.Container>
  );
};

export default FoodTypeList;
