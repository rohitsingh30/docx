import { StyleSheet, Platform, TextStyle } from 'react-native';
import { theme } from './theme';

// Color palette
export const colors = {
  primary: theme.colors.primary,
  primaryDark: theme.colors.primaryDark,
  primaryLight: theme.colors.primaryLight,
  secondary: theme.colors.secondary,
  background: theme.colors.background,
  surface: theme.colors.surface,
  card: theme.colors.card,
  text: theme.colors.text,
  textSecondary: theme.colors.textSecondary,
  textTertiary: theme.colors.textTertiary,
  textInverted: theme.colors.textInverted,
  border: theme.colors.border,
  error: theme.colors.error,
  success: theme.colors.success,
  warning: theme.colors.warning,
  disabled: theme.colors.disabled,
  shadow: '#000000',
  lightText: theme.colors.textTertiary,
  typingDot: theme.colors.typingDot,
  botMessageBackground: theme.colors.botMessageBackground,
  userMessageBackground: theme.colors.userMessageBackground,
  suggestionBackground: theme.colors.suggestionBackground,
  suggestionText: theme.colors.suggestionText,
  errorText: theme.colors.errorText,
};

// Spacing
export const spacing = {
  xxs: theme.spacing.xxs,
  xs: theme.spacing.xs,
  small: theme.spacing.sm,
  medium: theme.spacing.md,
  large: theme.spacing.lg,
  xl: theme.spacing.xl,
  xxl: theme.spacing.xxl,
};

// Typography
export const typography = {
  header: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: colors.text,
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: colors.text,
  },
  body: {
    fontSize: theme.typography.fontSize.md,
    color: colors.text,
  },
  small: {
    fontSize: theme.typography.fontSize.sm,
    color: colors.textSecondary,
  },
  caption: {
    fontSize: theme.typography.fontSize.xs,
    color: colors.textTertiary,
  }
};

// Common component styles
export const commonStyles = StyleSheet.create({
  typingIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.small,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.typingDot,
    marginHorizontal: 4,
  },
  chatContent: {
    padding: spacing.medium,
  },
  chat: {
    flex: 1,
  },
  message: {
    marginBottom: spacing.medium,
    padding: spacing.medium,
    borderRadius: spacing.small,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.botMessageBackground,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.userMessageBackground,
  },
  messageText: {
    color: colors.text,
  },
  suggestion: {
    marginTop: spacing.small,
    padding: spacing.small,
    borderRadius: spacing.small,
    backgroundColor: colors.suggestionBackground,
  },
  suggestionText: {
    color: colors.suggestionText,
  },
  // Layout
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.medium,
  },
  
  // Flexbox helpers
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  
  // Header and navigation
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerTitle: {
    ...typography.header,
    marginLeft: spacing.small,
  },
  headerText: {
    ...typography.header as TextStyle,
    color: colors.text,
  },
  backButton: {
    padding: spacing.small,
    borderRadius: 20,
  },
  
  // Cards and sections
  sectionContainer: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.medium,
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
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.medium,
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
  
  // Text styles
  titleText: {
    ...typography.title,
    marginBottom: spacing.small,
  } as TextStyle,
  bodyText: {
    ...typography.body,
  },
  smallText: {
    ...typography.small,
  },
  
  // Buttons
  primaryButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
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
  secondaryButton: {
    backgroundColor: colors.surface,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  primaryButtonText: {
    ...typography.body,
    color: colors.textInverted,
    fontWeight: '600',
  },
  secondaryButtonText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.7,
    backgroundColor: colors.disabled,
  },
  
  // List items
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.small,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  
  // Profile elements
  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.medium,
  },
  name: {
    ...typography.title,
    marginBottom: spacing.xxs,
  },
  email: {
    ...typography.small,
  },
  
  // Form elements
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.medium,
    backgroundColor: colors.background,
    marginBottom: spacing.medium,
  },
  inputError: {
    borderColor: colors.error,
  },
  label: {
    ...typography.small,
    marginBottom: spacing.xxs,
    fontWeight: '500',
  },
  errorText: {
    ...typography.small,
    color: colors.error,
    marginTop: spacing.xxs,
  },
  
  // Chat elements
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
  
  // Section styles
  section: {
    marginBottom: spacing.large,
  },
  sectionTitle: {
    ...typography.title,
    marginBottom: spacing.medium,
  },

  // Utility styles
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
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.medium,
  },
  logoutButton: {
    backgroundColor: colors.error,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textInverted,
    fontSize: 16,
    fontWeight: '600',
  }
});

export { theme };