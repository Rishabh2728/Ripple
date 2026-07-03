import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigation/AppNavigator';
import { store } from './src/store/store';
import { useAppSelector } from './src/store/hooks';
import { getNavigationTheme } from './src/theme/navigationTheme';

const queryClient = new QueryClient();

function RippleShell() {
  const mode = useAppSelector((state) => state.theme.mode);
  const navigationTheme = getNavigationTheme(mode);

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RippleShell />
      </QueryClientProvider>
    </Provider>
  );
}
