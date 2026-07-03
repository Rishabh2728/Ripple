import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';
import { colors } from './colors';
import type { ThemeMode } from './themeSlice';

export function getNavigationTheme(mode: ThemeMode): Theme {
  if (mode === 'dark') {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: colors.primary,
        background: colors.backgroundDark,
        card: colors.cardDark,
        text: colors.white,
        border: colors.borderDark
      }
    };
  }

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.white,
      card: colors.white,
      text: colors.textLight,
      border: colors.borderLight
    }
  };
}
