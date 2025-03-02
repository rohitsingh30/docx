import { StyleSheet } from 'react-native';
import { colors, spacing, theme } from '../../../styles/commonStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 40,
    color: colors.textInverted,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: spacing.large,
  },
  homeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 8,
    marginBottom: spacing.medium,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textInverted,
    fontSize: 16,
    fontWeight: '600',
  },
});
