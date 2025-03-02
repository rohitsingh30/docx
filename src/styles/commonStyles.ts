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
  typingDot: theme.colors.primary,
  botMessageBackground: theme.colors.surface,
  userMessageBackground: theme.colors.primaryLight,
  suggestionBackground: theme.colors.surface,
  suggestionText: theme.colors.primary,
  errorText: theme.colors.error,
};

// Spacing
export const spacing = {
  xxs: theme.spacing.xxs,
  xs: theme.spacing.xs,
  sm: theme.spacing.sm,
  small: theme.spacing.sm,
  md: theme.spacing.md,
  medium: theme.spacing.md,
  lg: theme.spacing.lg,
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
  // Core layouts
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
  scrollContent: {
    flexGrow: 1,
    padding: spacing.medium,
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
  },
  messageContainer: {
    marginBottom: spacing.medium,
    maxWidth: '85%',
    borderRadius: 16,
    padding: spacing.medium,
    backgroundColor: colors.surface,
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
    fontSize: 16,
  },
  userMessageText: {
    color: colors.text,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.small,
  },
  suggestionButton: {
    backgroundColor: colors.suggestionBackground,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 20,
    marginRight: spacing.small,
    marginBottom: spacing.small,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  suggestionText: {
    color: colors.suggestionText,
    fontSize: 14,
  },
  disabledSuggestion: {
    opacity: 0.5,
  },
  answeredSuggestion: {
    fontWeight: 'bold',
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
  },
  
  // Login styles
  loginScrollContainer: {
    flexGrow: 1,
    padding: spacing.large,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.small,
  },
  tagline: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  formContainer: {
    marginVertical: spacing.large,
  },
  userTypeContainer: {
    marginTop: spacing.medium,
    marginBottom: spacing.medium,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: colors.textInverted,
  },
  userTypeText: {
    fontSize: 16,
    color: colors.text,
  },
  loginButton: {
    marginTop: spacing.medium,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: spacing.medium,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  footerText: {
    color: colors.textSecondary,
    marginRight: spacing.small,
  },
  signUpText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  
  // Dashboard styles
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dashboardGreeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  dashboardSubGreeting: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 4,
  },
  dashboardProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  dashboardContent: {
    flex: 1,
    padding: spacing.medium,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  viewAllText: {
    fontSize: 14,
    color: colors.primary,
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.medium,
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginBottom: spacing.medium,
  },
  appointmentInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  appointmentSpecialty: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  appointmentDateTime: {
    fontSize: 14,
    color: colors.primary,
  },
  noDataText: {
    fontSize: 16,
    color: colors.textTertiary,
    textAlign: 'center',
    marginVertical: spacing.large,
  },
  bookAppointmentButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookAppointmentText: {
    color: colors.textInverted,
    fontSize: 16,
    fontWeight: 'bold',
  },
  reportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.medium,
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginBottom: spacing.medium,
  },
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  reportDate: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  reviewedBadge: {
    backgroundColor: colors.success + '20',
  },
  pendingBadge: {
    backgroundColor: colors.warning + '20',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  reviewedText: {
    color: colors.success,
  },
  pendingText: {
    color: colors.warning,
  },
  
  // Doctor Dashboard styles
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.medium,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    minWidth: '40%',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: spacing.small,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.medium,
    minHeight: 100,
  },
  timeline: {
    paddingLeft: spacing.small,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: spacing.large,
  },
  timelinePoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginTop: 6,
    marginRight: spacing.small,
  },
  timelineContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.small,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  timelineDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  timelineTime: {
    fontSize: 12,
    color: colors.textTertiary,
  },
  
  // Time slot picker styles
  slotPickerContainer: {
    width: '100%',
    padding: spacing.medium,
  },
  slotPickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: spacing.medium,
    color: colors.text,
  },
  slotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slotButton: {
    width: '48%',
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.small,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.medium,
    minHeight: 48,
  },
  selectedSlotButton: {
    backgroundColor: colors.primary,
  },
  slotText: {
    color: colors.primary,
    fontSize: 16,
  },
  selectedSlotText: {
    color: colors.textInverted,
  },
  
  // Extra utility
  bottomPadding: {
    height: 80,
  },
  chatContent: {
    paddingBottom: 20,
  },
});

export { theme };