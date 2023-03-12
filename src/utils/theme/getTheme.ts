import { THEME_KEY } from "../../constants/theme/theme.constant";
import { ETheme } from "../../enum/theme/theme.enum";
import Cookie from "../../lib/storage/Cookie";

export const getTheme = (): ETheme => {
  const themeMode = Cookie.get(THEME_KEY);

  if (typeof window !== "undefined" && themeMode === null) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: light)`
    ).matches;

    if (isDarkTheme) {
      return ETheme.DARK;
    }
    return ETheme.LIGHT;
  }

  const theme: ETheme = themeMode as ETheme;

  if (theme === ETheme.DARK) {
    return ETheme.DARK;
  }

  return ETheme.LIGHT;
};
