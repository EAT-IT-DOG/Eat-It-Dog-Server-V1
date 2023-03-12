import { useParams } from "react-router-dom";
import { useGetFoodByName } from "../../../queries/food/food.query";
import { safenessGuideTransform } from "../../../utils/dataTransform";
import { Flex } from "../../Common/Flex";
import SafenessLabel from "../../Common/SafenessLabel";
import * as S from "./style";

const FoodDetail = () => {
  const { name } = useParams();
  const { data: serverFoodData } = useGetFoodByName(
    { name: name || "" },
    { suspense: true }
  );

  return (
    <S.Container>
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

      {serverFoodData?.benefit && (
        <div>
          <S.SubTitle>주성분 및 기능</S.SubTitle>
          <S.Content>{serverFoodData.benefit}</S.Content>
        </div>
      )}

      {serverFoodData?.symptom && (
        <div>
          <S.SubTitle>증상</S.SubTitle>
          <S.Content>{serverFoodData.symptom}</S.Content>
        </div>
      )}

      {serverFoodData?.caution && (
        <div>
          <S.SubTitle>유의 사항</S.SubTitle>
          <S.Content>{serverFoodData.caution}</S.Content>
        </div>
      )}
    </S.Container>
  );
};

export default FoodDetail;
