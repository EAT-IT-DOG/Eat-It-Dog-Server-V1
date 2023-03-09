import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

export const Article = styled.div`
  width: 242px;
  height: 394px;
  border-radius: 15px;
  background: linear-gradient(180deg, #edbacc 0%, #eccd8c 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const ArticleTitle = styled.p`
  color: white;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
`;

export const ArticleImg = styled.img`
  object-fit: scale-down;
  width: 153px;
  margin-top: 37px;
`;
