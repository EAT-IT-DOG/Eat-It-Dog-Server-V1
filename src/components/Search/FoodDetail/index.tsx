import { useParams } from "react-router-dom";
import { useGetFoodByName } from "../../../queries/food/food.query";
import { safenessGuideTransform } from "../../../utils/dataTransform";
import { Flex } from "../../Common/Flex";
import SafenessLabel from "../../Common/SafenessLabel";
import * as S from "./style";

const FoodDetail = () => {
  const { name } = useParams();
  const { data: serverFoodData } = useGetFoodByName({ name: name || "" });

  console.log(serverFoodData);

  return (
    <Flex direction="column" gap={40}>
      <Flex justify="between" align="center">
        <S.FoodName>{serverFoodData?.name}</S.FoodName>
        {serverFoodData && (
          <SafenessLabel safenessType={serverFoodData.safeness} />
        )}
      </Flex>
      <div>
        <S.SubTitle>섭취가능여부</S.SubTitle>
        {serverFoodData && (
          <S.Content>
            {safenessGuideTransform(serverFoodData.safeness)}
          </S.Content>
        )}
      </div>
      {serverFoodData?.eatingMethod && (
        <div>
          <S.SubTitle>급여 방법</S.SubTitle>
          <S.Content>{serverFoodData.eatingMethod}</S.Content>
        </div>
      )}

      {}

      {serverFoodData?.symptom && (
        <div>
          <S.SubTitle>증상</S.SubTitle>
          <S.Content>{serverFoodData.symptom}</S.Content>
        </div>
      )}
    </Flex>
  );
};

export default FoodDetail;
