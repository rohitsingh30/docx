import React, { createContext, useContext, useState, ReactNode } from 'react';

type Symptom = {
  id: string;
  name: string;
  severity: number;
  duration: string;
};

type HealthReport = {
  symptoms: Symptom[];
  possibleConditions: string[];
  recommendations: string[];
  shouldSeeDoctor: boolean;
};

type ChatContextType = {
  symptoms: Symptom[];
  addSymptom: (symptom: Symptom) => void;
  clearSymptoms: () => void;
  generateReport: () => HealthReport;
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);

  const addSymptom = (symptom: Symptom) => {
    setSymptoms(prev => [...prev, symptom]);
  };

  const clearSymptoms = () => {
    setSymptoms([]);
  };

  // Mock AI response generation
  const generateReport = (): HealthReport => {
    const shouldSeeDoctor = symptoms.some(s => s.severity > 7);
    
    // This is where you'd integrate with a real AI model
    const report: HealthReport = {
      symptoms,
      possibleConditions: symptoms.map(s => `Possible condition related to ${s.name}`),
      recommendations: [
        'Rest and monitor symptoms',
        'Stay hydrated',
        'Take over-the-counter medication if needed',
        shouldSeeDoctor ? 'Consult a doctor immediately' : 'Monitor symptoms for 24-48 hours'
      ],
      shouldSeeDoctor
    };

    return report;
  };

  return (
    <ChatContext.Provider value={{
      symptoms,
      addSymptom,
      clearSymptoms,
      generateReport,
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};