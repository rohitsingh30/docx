import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../styles/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xxl,
    letterSpacing: theme.typography.letterSpacing.wide,
  },
  signUpButton: {
    width: '100%',
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.md,
  },
  loginButton: {
    width: '100%',
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.sm,
  },
  buttonText: {
    color: theme.colors.textInverted,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButtonText: {
    color: theme.colors.primary,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: theme.spacing.xl,
    alignItems: 'center',
  },
  tagline: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
  },
});
