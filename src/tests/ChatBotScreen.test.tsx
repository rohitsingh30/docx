import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ChatBotScreen from '../screens/chat/ChatBotScreen';
import { ChatContext } from '../context/ChatContext';

// Mock the ChatContext
const mockAddSymptom = jest.fn();
const mockGenerateReport = jest.fn(() => ({
  symptoms: [],
  possibleConditions: [],
  recommendations: ['Test recommendation'],
  shouldSeeDoctor: false,
}));

const mockChatContextValue = {
  addSymptom: mockAddSymptom,
  generateReport: mockGenerateReport,
  symptoms: [],
  clearSymptoms: jest.fn(),
};

describe('ChatBotScreen', () => {
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
      expect(getByText(/how severe is your headache?/)).toBeTruthy();
    });
  });

  it('handles report generation without crashing', async () => {
    const { getByText } = render(
      <ChatContext.Provider value={mockChatContextValue}>
        <ChatBotScreen />
      </ChatContext.Provider>
    );

    // Simulate conversation flow
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

    // Verify report generation
    expect(mockGenerateReport).toHaveBeenCalled();
    await waitFor(() => {
      expect(getByText(/I've analyzed your symptoms/)).toBeTruthy();
    });
  });
});