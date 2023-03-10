import { Suspense } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetFoodByName } from "../../queries/food/food.query";
import { queryStringParser } from "../../utils/queryStringParser";
import FoodDetail from "./FoodDetail";
import FoodList from "./FoodList";
import FoodNotFound from "./FoodNotFound";
import FoodTypeList from "./FoodTypeList";
import * as S from "./style";

const Search = () => {
  const { search } = useLocation();
  const { name } = useParams();

  const { data: serverFoodData, isError } = useGetFoodByName({
    name: search && queryStringParser(search).keyword,
  });

  return (
    <>
      <FoodTypeList />
      <S.Container>
        <Suspense fallback={<>로딩중...</>}>
          {search && queryStringParser(search).type && <FoodList />}
        </Suspense>
        <Suspense fallback={<>로딩중...</>}>{name && <FoodDetail />}</Suspense>
      </S.Container>
    </>
  );
};

export default Search;
