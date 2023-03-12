import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import {
  getFoodByNameParam,
  getFoodNamesByTypeParam,
} from "../../repositories/food/FoodRepository";
import FoodRepositoryImpl from "../../repositories/food/FoodRepositoryImpl";
import { Food, FoodName } from "../../types/food/food.type";

export const useGetFoodNamesByType = (
  { type }: getFoodNamesByTypeParam,
  options?: UseQueryOptions<
    FoodName[],
    AxiosError,
    FoodName[],
    ["food/getFoodNamesByType", string]
  >
) =>
  useQuery(
    ["food/getFoodNamesByType", type],
    () => FoodRepositoryImpl.getFoodNamesByType({ type }),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      enabled: !!type,
      ...options,
    }
  );

export const useGetFoodByName = (
  { name }: getFoodByNameParam,
  options?: UseQueryOptions<
    Food,
    AxiosError,
    Food,
    ["food/getFoodByName", string]
  >
) =>
  useQuery(
    ["food/getFoodByName", name],
    () => FoodRepositoryImpl.getFoodByName({ name }),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      enabled: !!name,
      ...options,
    }
  );

export const useGetFoodNamesBySearch = (
  options?: UseQueryOptions<
    FoodName[],
    AxiosError,
    FoodName[],
    "food/getFoodNamesBySearch"
  >
) =>
  useQuery(
    "food/getFoodNamesBySearch",
    () => FoodRepositoryImpl.getFoodNamesBySearchCount(),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60,
      ...options,
    }
  );

export const useGetRandomFood = (
  options?: UseQueryOptions<Food, AxiosError, Food, "food/getRandomFood">
) =>
  useQuery("food/getRandomFood", () => FoodRepositoryImpl.getRandomFood(), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60,
    ...options,
  });
