import { useGetFoodNamesBySearch } from "../../../../queries/food/food.query";
import HomeFoodRankItem from "../HomeFoodRankItem";

const HomeFoodRankingList = () => {
  const { data: serverFoodNamesData } = useGetFoodNamesBySearch({
    suspense: true,
  });

  return (
    <>
      {serverFoodNamesData?.map((foodNames, idx) => (
        <HomeFoodRankItem rank={idx + 1} content={foodNames.name} />
      ))}
    </>
  );
};

export default HomeFoodRankingList;
