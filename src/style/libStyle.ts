import { css, FlattenSimpleInterpolation } from "styled-components";

export const heightOverflowEllipsisLine = (
  lineClamp: number
): FlattenSimpleInterpolation => css`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -ms-word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineClamp};
`;

export const widthOverflowEllipsisLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const skeletonAnimtaion = css`
  animation: skeleton 1s infinite ease-in-out;
`;
