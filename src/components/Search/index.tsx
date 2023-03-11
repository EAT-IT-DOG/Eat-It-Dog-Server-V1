import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
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

  return (
    <>
      <FoodTypeList />
      <S.Container>
        {search && (
          <Suspense fallback={<>로딩중...</>}>
            <FoodList />
          </Suspense>
        )}
        {name && (
          <ErrorBoundary key={name} FallbackComponent={FoodNotFound}>
            <Suspense fallback={<>로딩중...</>}>
              <FoodDetail />
            </Suspense>
          </ErrorBoundary>
        )}
      </S.Container>
    </>
  );
};

export default Search;
