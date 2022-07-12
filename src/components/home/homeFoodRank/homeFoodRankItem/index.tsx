import {
  HomeFoodRankItemContainer,
  HomeFoodRankItemContent,
  HomeFoodRankItemRank,
} from "./style";

interface Props {
  rank: string;
  content: string;
}

const HomeFoodRankItem = ({ rank, content }: Props) => {
  return (
    <HomeFoodRankItemContainer>
      <HomeFoodRankItemRank>{rank}</HomeFoodRankItemRank>
      <HomeFoodRankItemContent>{content}</HomeFoodRankItemContent>
    </HomeFoodRankItemContainer>
  );
};

export default HomeFoodRankItem;
