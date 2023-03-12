import Button from "../../Common/Button";
import * as S from "./style";

const FoodNotFound = () => {
  return (
    <>
      <S.Text>검색하신 음식이 없습니다</S.Text>
      {/* <Button
        customStyle={{ width: 160, height: 50, borderRadius: 8, fontSize: 18 }}
        buttonType="Submit"
      >
        제안하러 가기
      </Button> */}
    </>
  );
};

export default FoodNotFound;
