import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

// this is on account of the built-in type in useColorScheme suggesting the null
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
