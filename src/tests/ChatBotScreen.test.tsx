import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ChatBotScreen from '../components/screens/user/ChatBotScreen';
import { ChatContext } from '../context/ChatContext';
import { HealthReport, Symptom } from '../types/types';

// Mock navigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

// Mock the ChatContext with proper types
const mockAddSymptom = jest.fn();
const mockGenerateReport = jest.fn<() => HealthReport>(() => ({
  title: 'Health Report',
  symptoms: [],
  possibleConditions: [],
  recommendations: ['Test recommendation'],
  shouldSeeDoctor: false,
}));

const mockChatContextValue = {
  addSymptom: mockAddSymptom,
  generateReport: mockGenerateReport,
  symptoms: [] as Symptom[],
  clearSymptoms: jest.fn(),
};

describe('ChatBotScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders initial message correctly', async () => {
    const { getByText } = render(
      <ChatContext.Provider value={mockChatContextValue}>
        <ChatBotScreen />
      </ChatContext.Provider>
    );

    await waitFor(() => {
      expect(getByText(/Hi! I'm your health assistant/)).toBeTruthy();
    });
  });

  it('handles symptom selection and shows severity question', async () => {
    const { getByText } = render(
      <ChatContext.Provider value={mockChatContextValue}>
        <ChatBotScreen />
      </ChatContext.Provider>
    );

    await waitFor(() => {
      fireEvent.press(getByText('Headache'));
    });

    await waitFor(() => {
      expect(getByText(/how severe is your headache?/i)).toBeTruthy();
    });
  });

  it('handles report generation and navigation', async () => {
    const { getByText } = render(
      <ChatContext.Provider value={mockChatContextValue}>
        <ChatBotScreen />
      </ChatContext.Provider>
    );

    // Simulate complete conversation flow
    await waitFor(() => {
      fireEvent.press(getByText('Headache'));
    });

    await waitFor(() => {
      fireEvent.press(getByText('1-3 (Mild)'));
    });

    await waitFor(() => {
      fireEvent.press(getByText('Today'));
    });

    await waitFor(() => {
      fireEvent.press(getByText('No, generate report'));
    });

    // Verify report generation and symptom tracking
    expect(mockAddSymptom).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Headache',
      severity: 2,
      duration: 'Today'
    }));
    expect(mockGenerateReport).toHaveBeenCalled();

    // Verify navigation options are shown
    await waitFor(() => {
      expect(getByText(/I've analyzed your symptoms/)).toBeTruthy();
      expect(getByText('View Report')).toBeTruthy();
    });

    // Test navigation
    fireEvent.press(getByText('View Report'));
    expect(mockNavigate).toHaveBeenCalledWith('MedicalRecords', expect.any(Object));
  });
});