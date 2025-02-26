import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A365D',
  },
  headerRight: {
    width: 40,
  },
  patientInfo: {
    flexDirection: 'row',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  patientImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  patientDetails: {
    flex: 1,
  },
  patientName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  condition: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 2,
  },
  reviewedBy: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#48BB78',
  },
  section: {
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4299E1',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 24,
  },
  downloadButton: {
    flex: 2,
    backgroundColor: '#4299E1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 12,
  },
  downloadButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#EBF8FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 12,
  },
  moreButton: {
    flex: 1,
    backgroundColor: '#EBF8FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  consultButton: {
    backgroundColor: '#4299E1',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  consultButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
