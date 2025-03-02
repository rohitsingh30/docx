import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Theme configuration for the app
export const theme = {
  colors: {
    primary: '#4299E1',
    primaryDark: '#3182CE',
    primaryLight: '#BEE3F8',
    secondary: '#ED8936',
    secondaryLight: '#FEEBC8',
    background: '#FFFFFF',
    card: '#F7FAFC',
    surface: '#FFFFFF',
    text: '#2D3748',
    textSecondary: '#4A5568',
    textTertiary: '#718096',
    textInverted: '#FFFFFF',
    border: '#E2E8F0',
    notification: '#F56565',
    success: '#48BB78',
    warning: '#ECC94B',
    error: '#F56565',
    disabled: '#EDF2F7',
    placeholder: '#A0AEC0',
    typingDot: '#A0AEC0', // Add this line
    botMessageBackground: '#E2E8F0', // Add this line
    userMessageBackground: '#4299E1', // Add this line
    suggestionBackground: '#EDF2F7', // Add this line
    suggestionText: '#2D3748', // Add this line
    errorText: '#F56565', // Add this line
  },
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    none: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
    full: 9999,
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 30,
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    letterSpacing: {
      tighter: -0.8,
      tight: -0.4,
      normal: 0,
      wide: 0.4,
      wider: 0.8,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
    },
  },
  shadows: {
    none: {},
    xs: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 1,
        },
        android: {
          elevation: 1,
        },
      }),
    },
    sm: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    md: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    lg: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 6,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    xl: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 14,
        },
        android: {
          elevation: 10,
        },
      }),
    },
  },
  // Screen dimensions
  screen: {
    width,
    height,
  },
  // Animation durations
  animation: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
};

// Component-specific styles
export const textStyles = {
  h1: {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  h2: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  h3: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  body: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.text,
    lineHeight: theme.typography.lineHeight.normal,
  },
  bodySmall: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.textSecondary,
  },
  caption: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.textTertiary,
  },
  button: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textInverted,
    textAlign: 'center',
  },
  buttonSmall: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textInverted,
    textAlign: 'center',
  },
};

// Common component styles
export const componentStyles = {
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    ...theme.shadows.sm,
    marginBottom: theme.spacing.md,
  },
  button: {
    primary: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondary: {
      backgroundColor: theme.colors.primaryLight,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    outline: {
      backgroundColor: 'transparent',
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
};