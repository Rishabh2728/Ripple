import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type RippleLogoProps = {
  size?: number;
};

export function RippleLogo({ size = 48 }: RippleLogoProps) {
  return (
    <View style={[styles.logo, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={[styles.logoText, { fontSize: size * 0.48 }]}>R</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center'
  },
  logoText: {
    color: colors.white,
    fontWeight: '800'
  }
});
