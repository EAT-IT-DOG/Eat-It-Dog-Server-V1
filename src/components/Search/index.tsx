import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useParams } from "react-router-dom";
import SearchFoodDetailFallback from "../Common/FallbackLoader/SearchFoodDetailFallbackLoader";
import SearchFoodListFallbackLoader from "../Common/FallbackLoader/SearchFoodList";

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
          <ErrorBoundary key={search} FallbackComponent={FoodNotFound}>
            <Suspense fallback={<SearchFoodListFallbackLoader />}>
              <FoodList />
            </Suspense>
          </ErrorBoundary>
        )}
        {name && (
          <ErrorBoundary key={name} FallbackComponent={FoodNotFound}>
            <Suspense fallback={<SearchFoodDetailFallback />}>
              <FoodDetail />
            </Suspense>
          </ErrorBoundary>
        )}
      </S.Container>
    </>
  );
};

export default Search;
