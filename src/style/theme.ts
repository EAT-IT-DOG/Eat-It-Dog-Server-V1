import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#fafafa",
  subBackgroundColor: "#ffffff",
  contrast: "#434343",
};

export const darkTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#181818",
  subBackgroundColor: "#434343",
  contrast: "#ffffff",
};
