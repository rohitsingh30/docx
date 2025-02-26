import { StyleProp, ViewStyle } from 'react-native';
import { twMerge, ClassNameValue, twJoin } from 'tailwind-merge';

export function cn(...inputs: ClassNameValue[]): StyleProp<ViewStyle> {
  return twJoin(inputs) as unknown as StyleProp<ViewStyle>;
}
