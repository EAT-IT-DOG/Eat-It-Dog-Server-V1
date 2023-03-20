import { useNavigate } from "react-router-dom";
import {
  HomeFoodRankItemContainer,
  HomeFoodRankItemName,
  HomeFoodRankItemRank,
} from "./style";

interface Props {
  rank: number;
  name: string;
}

const HomeFoodRankItem = ({ rank, name }: Props) => {
  const navigate = useNavigate();

  return (
    <HomeFoodRankItemContainer>
      <HomeFoodRankItemRank>{rank}</HomeFoodRankItemRank>
      <HomeFoodRankItemName onClick={() => navigate(`/search/${name}`)}>
        {name}
      </HomeFoodRankItemName>
    </HomeFoodRankItemContainer>
  );
};

export default HomeFoodRankItem;
