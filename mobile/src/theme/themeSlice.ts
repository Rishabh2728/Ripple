import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'ripple:theme-mode';

type ThemeState = {
  mode: ThemeMode;
  hydrated: boolean;
};

const initialState: ThemeState = {
  mode: 'light',
  hydrated: false
};

export const hydrateTheme = createAsyncThunk('theme/hydrate', async () => {
  const storedMode = await AsyncStorage.getItem(THEME_STORAGE_KEY);
  return storedMode === 'dark' ? 'dark' : 'light';
});

export const persistTheme = createAsyncThunk('theme/persist', async (mode: ThemeMode) => {
  await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
  return mode;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrateTheme.fulfilled, (state, action) => {
        state.mode = action.payload;
        state.hydrated = true;
      })
      .addCase(hydrateTheme.rejected, (state) => {
        state.hydrated = true;
      })
      .addCase(persistTheme.fulfilled, (state, action) => {
        state.mode = action.payload;
      });
  }
});

export const { setThemeMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
