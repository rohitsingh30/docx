import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 12,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a365d',
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 16,
  },
  dateList: {
    marginBottom: 16,
  },
  dateCard: {
    backgroundColor: '#f7fafc',
    padding: 16,
    borderRadius: 8,
    marginRight: 12,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedDateCard: {
    backgroundColor: '#4299e1',
  },
  dateText: {
    fontSize: 16,
    color: '#4a5568',
  },
  selectedDateText: {
    color: '#ffffff',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeCard: {
    backgroundColor: '#f7fafc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width: '30%',
    alignItems: 'center',
  },
  selectedTimeCard: {
    backgroundColor: '#4299e1',
  },
  timeText: {
    fontSize: 14,
    color: '#4a5568',
  },
  selectedTimeText: {
    color: '#ffffff',
  },
  confirmButton: {
    backgroundColor: '#4299e1',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  disabledButton: {
    backgroundColor: '#a0aec0',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
