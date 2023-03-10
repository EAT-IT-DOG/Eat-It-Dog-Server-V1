import { useQuery } from "react-query";
import {
  getFoodByNameParam,
  getFoodNamesByTypeParam,
} from "../../repositories/food/FoodRepository";
import FoodRepositoryImpl from "../../repositories/food/FoodRepositoryImpl";

export const useGetFoodNamesByType = ({ type }: getFoodNamesByTypeParam) =>
  useQuery(
    ["food/getFoodNamesByType", type],
    () => FoodRepositoryImpl.getFoodNamesByType({ type }),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      enabled: !!type,
    }
  );

export const useGetFoodByName = ({ name }: getFoodByNameParam) =>
  useQuery(
    ["food/getFoodByName", name],
    () => FoodRepositoryImpl.getFoodByName({ name }),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      enabled: !!name,
    }
  );
