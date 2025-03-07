import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';
import { Symptom, HealthReport } from '../types/types';

type ChatContextType = {
  symptoms: Symptom[];
  addSymptom: (symptom: Symptom) => void;
  clearSymptoms: () => void;
  generateReport: () => HealthReport;
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);

  const addSymptom = useCallback((symptom: Symptom) => {
    if (!symptom.name || symptom.severity < 0 || symptom.severity > 10) {
      throw new Error('Invalid symptom data');
    }
    setSymptoms(prev => [...prev, symptom]);
  }, []);

  const clearSymptoms = useCallback(() => {
    setSymptoms([]);
  }, []);

  const generateReport = useCallback((): HealthReport => {
    if (symptoms.length === 0) {
      return {
        title: 'Health Report',
        symptoms: [],
        possibleConditions: [],
        recommendations: ['No symptoms reported'],
        shouldSeeDoctor: false
      };
    }

    const shouldSeeDoctor = symptoms.some(s => 
      s.severity > 7 || 
      (s.severity > 5 && s.duration === 'More than a week')
    );
    
    const uniqueSymptoms = Array.from(new Set(symptoms.map(s => s.name)));
    const severityLevel = Math.max(...symptoms.map(s => s.severity));
    
    const recommendations = [
      'Rest and monitor symptoms',
      'Stay hydrated',
      severityLevel > 3 ? 'Take over-the-counter medication if needed' : 'Continue normal activities',
      shouldSeeDoctor ? 'Consult a doctor immediately' : 'Monitor symptoms for 24-48 hours'
    ];

    if (symptoms.some(s => s.duration === 'More than a week')) {
      recommendations.push('Consider keeping a symptom diary');
    }

    const report: HealthReport = {
      title: uniqueSymptoms.length === 1 ? 
        `${uniqueSymptoms[0]} Report` : 
        `Health Report (${uniqueSymptoms.length} symptoms)`,
      symptoms,
      possibleConditions: uniqueSymptoms.map(name => 
        `Possible condition related to ${name.toLowerCase()}`
      ),
      recommendations,
      shouldSeeDoctor
    };

    return report;
  }, [symptoms]);

  const contextValue = useMemo(() => ({
    symptoms,
    addSymptom,
    clearSymptoms,
    generateReport,
  }), [symptoms, addSymptom, clearSymptoms, generateReport]);

  return (
    <ChatContext.Provider value={contextValue}>
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