import { useEffect } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RippleLogo } from '../../components/RippleLogo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { colors } from '../../theme/colors';
import { hydrateTheme, persistTheme } from '../../theme/themeSlice';

export function HomeScreen() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const hydrated = useAppSelector((state) => state.theme.hydrated);
  const isDark = mode === 'dark';

  useEffect(() => {
    void dispatch(hydrateTheme());
  }, [dispatch]);

  const toggleTheme = () => {
    void dispatch(persistTheme(isDark ? 'light' : 'dark'));
  };

  return (
    <SafeAreaView style={[styles.screen, isDark && styles.screenDark]}>
      <View style={styles.header}>
        <RippleLogo />
        <View>
          <Text style={[styles.title, isDark && styles.titleDark]}>Ripple</Text>
          <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>Community, focused.</Text>
        </View>
      </View>

      <View style={[styles.card, isDark && styles.cardDark]}>
        <Text style={[styles.cardTitle, isDark && styles.titleDark]}>Milestone 1</Text>
        <Text style={[styles.cardText, isDark && styles.subtitleDark]}>
          The mobile shell is ready with Redux, React Query, React Navigation, AsyncStorage-backed theme persistence, and a replaceable brand mark.
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={toggleTheme}
        style={[styles.button, !hydrated && styles.buttonDisabled]}
        disabled={!hydrated}
      >
        <Text style={styles.buttonText}>{isDark ? 'Use Light Mode' : 'Use Dark Mode'}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 24
  },
  screenDark: {
    backgroundColor: colors.backgroundDark
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginTop: 24
  },
  title: {
    color: colors.textLight,
    fontSize: 30,
    fontWeight: '800'
  },
  titleDark: {
    color: colors.white
  },
  subtitle: {
    color: colors.textMutedLight,
    fontSize: 15,
    marginTop: 2
  },
  subtitleDark: {
    color: '#A3A3A3'
  },
  card: {
    backgroundColor: colors.softGray,
    borderRadius: 20,
    marginTop: 40,
    padding: 20
  },
  cardDark: {
    backgroundColor: colors.cardDark
  },
  cardTitle: {
    color: colors.textLight,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8
  },
  cardText: {
    color: colors.textMutedLight,
    fontSize: 15,
    lineHeight: 22
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 16,
    marginTop: 24,
    paddingVertical: 14
  },
  buttonDisabled: {
    opacity: 0.6
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700'
  }
});
