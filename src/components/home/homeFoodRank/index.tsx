import HomeFoodRankItem from "./homeFoodRankItem";
import {
  HomeFoodRankContainer,
  HomeFoodRankItemWrap,
  HomeFoodRankTitle,
} from "./style";

const item = [
  { rank: 1, content: "열 글자부터 점 찍어보자 얘들아" },
  { rank: 2, content: "초콜릿" },
  { rank: 3, content: "브로콜리" },
  { rank: 4, content: "초코우유" },
  { rank: 5, content: "딸기우유" },
  { rank: 6, content: "사탕" },
  { rank: 7, content: "열 글자부터 점 찍어보자 얘들아" },
  { rank: 8, content: "초콜릿" },
  { rank: 9, content: "브로콜리" },
  { rank: 10, content: "초코우유" },
  { rank: 11, content: "딸기우유" },
  { rank: 12, content: "사탕" },
  { rank: 13, content: "열 글자부터 점 찍어보자 얘들아" },
  { rank: 14, content: "초콜릿" },
  { rank: 15, content: "브로콜리" },
  { rank: 16, content: "초코우유" },
  { rank: 17, content: "딸기우유" },
  { rank: 18, content: "사탕" },
];

const HomeFoodRank = () => {
  return (
    <HomeFoodRankContainer>
      <HomeFoodRankTitle>많이 검색된 음식 순위</HomeFoodRankTitle>
      <HomeFoodRankItemWrap>
        {item.map((rank) => (
          <HomeFoodRankItem rank={String(rank.rank)} content={rank.content} />
        ))}
      </HomeFoodRankItemWrap>
    </HomeFoodRankContainer>
  );
};

export default HomeFoodRank;
