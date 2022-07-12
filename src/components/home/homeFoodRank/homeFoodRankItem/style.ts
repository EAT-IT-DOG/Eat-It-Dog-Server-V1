import styled from "styled-components";
import { ellipsisLine } from "../../../../style/libStyle";

export const HomeFoodRankItemContainer = styled.div`
  width: 140px;
  min-height: 20px;
  max-height: 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  /* ${ellipsisLine(1)} */
`;

export const HomeFoodRankItemRank = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeFoodRankItemContent = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  text-align: start;
`;
