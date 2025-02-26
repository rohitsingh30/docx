import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  primary: '#4299E1',
  secondary: '#EBF8FF',
  text: '#2D3748',
  lightText: '#718096',
  background: '#FFFFFF',
  shadow: '#000000',
  success: '#48BB78',
  error: '#F56565',
  disabled: '#A0AEC0',
  border: '#E2E8F0',
};

export const spacing = {
  xs: 4,
  small: 8,
  medium: 16,
  large: 24,
  xl: 32,
  xxl: 40,
};

export const fontSizes = {
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const typography = {
  header: {
    fontSize: fontSizes.xlarge,
    fontWeight: '600' as const,
    color: colors.text,
  },
  title: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: colors.text,
  },
  body: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
  },
  caption: {
    fontSize: 14,
    color: colors.lightText,
  },
};

export const commonStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
    paddingHorizontal: spacing.medium,
  },
  headerTitle: {
    ...typography.header,
  },
  headerRight: {
    width: 40,
  },
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: colors.background,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: spacing.small,
  },
  headerText: {
    ...typography.header,
    marginLeft: spacing.small,
  },
  sectionContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.medium,
  },
  titleText: {
    ...typography.title,
    marginBottom: spacing.small,
  },
  bodyText: {
    ...typography.body,
    color: colors.lightText,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    ...typography.body,
    color: colors.background,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: colors.disabled,
    opacity: 0.7,
  },
  disabledText: {
    color: colors.lightText,
    textDecorationLine: 'line-through',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  messageContainer: {
    marginBottom: spacing.medium,
    maxWidth: '85%',
    borderRadius: 16,
    padding: spacing.medium,
    backgroundColor: colors.background,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  suggestionButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: 20,
    marginRight: spacing.small,
    marginBottom: spacing.small,
    borderWidth: 1,
    borderColor: colors.border,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  disabledSuggestion: {
    backgroundColor: colors.disabled,
    opacity: 0.5,
  },
  bottomDrawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    padding: spacing.medium,
    borderTopWidth: 1,
    borderColor: colors.border,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
