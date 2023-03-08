import styled, { css } from "styled-components";
import { palette } from "../../../style/palette";
import { ButtonType } from "./button.type";

export const Container = styled.button<{ buttonType: ButtonType }>`
  width: 80px;
  height: 36px;
  font-size: 14px;
  border-radius: 80px;

  ${({ buttonType }) =>
    buttonType === "Submit"
      ? css`
          border: 1px solid ${palette.pinkMain};
          color: ${palette.pinkMain};

          &:hover {
            background-color: ${palette.pinkMain};
            color: ${({ theme }) => theme.contrast};
          }
        `
      : css`
          border: 1px solid ${palette.gray[200]};
          color: ${palette.gray[200]};

          &:hover {
            color: ${({ theme }) => theme.contrast};
            background-color: ${palette.gray[200]};
          }
        `}
`;
