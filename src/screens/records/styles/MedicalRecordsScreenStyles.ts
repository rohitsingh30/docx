import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    padding: 16,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  statusTime: {
    fontSize: 14,
    color: '#4A5568',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3748',
    flex: 1,
    textAlign: 'center',
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  searchInput: {
    backgroundColor: '#F7FAFC',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 40,
    fontSize: 16,
    color: '#4A5568',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: -7 }],
  },
  reportsList: {
    flex: 1,
  },
  reportCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
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
  reviewedCard: {
    backgroundColor: '#EBF8FF',
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  reportHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevron: {
    marginRight: 12,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4299E1',
  },
  reportDate: {
    fontSize: 14,
    color: '#718096',
    marginTop: 2,
  },
  reportStatus: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusInProgress: {
    color: '#D69E2E',
    backgroundColor: '#FEFCBF',
  },
  statusReviewed: {
    color: '#4299E1',
    backgroundColor: '#EBF8FF',
  },
  reportDetails: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 12,
  },
});
