import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Theme configuration for the app
export const theme = {
  // Base theme configuration
  mode: 'light',
  roundness: 4,
  colors: {
    // Primary brand colors
    primary: '#0073EA',
    primaryDark: '#005BB7',
    primaryLight: '#E6F2FF',
    secondary: '#F97316',
    accent: '#6366F1',

    // Interface colors
    background: '#FFFFFF',
    surface: '#F9FAFB',
    card: '#F0F2F5',
    text: '#111827',
    textSecondary: '#4B5563',
    textTertiary: '#9CA3AF',
    textInverted: '#FFFFFF',
    border: '#E5E7EB',
    divider: '#E5E7EB',
    
    // Feedback colors
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    disabled: '#D1D5DB',

    // Additional colors
    lightText: '#A1A1A1',
    shadow: '#000000',
    typingDot: '#0073EA',
    botMessageBackground: '#F9FAFB',
    userMessageBackground: '#E6F2FF',
    suggestionBackground: '#F9FAFB',
    suggestionText: '#0073EA',
    errorText: '#EF4444',
  },
  
  spacing: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    letterSpacing: {
      tight: -0.5,
      normal: 0,
      wide: 0.5,
    },
    lineHeight: {
      normal: 1.5,
      tight: 1.2,
      loose: 1.8,
    },
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
  
  borderRadius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
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

export type Theme = typeof theme;

// Component-specific styles
export const textStyles = {
  h1: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  userTypeText:{
    fontSize: theme.typography.fontSize.sm,
  },
  label:{
    fontSize: theme.typography.fontSize.sm,
  },
  tagline:{
    fontSize: theme.typography.fontSize.sm,
  },
  input:{
    fontSize: theme.typography.fontSize.md,
  },
  appName:{
    fontSize: theme.typography.fontSize.xl,
  },
  errorText:{
    fontSize: theme.typography.fontSize.xs,
  },
  titleText:{
    fontSize: theme.typography.fontSize.xl,
  },
  sectionTitle:{
    fontSize: theme.typography.fontSize.md,
  },
  actionText:{
    fontSize: theme.typography.fontSize.sm,
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
