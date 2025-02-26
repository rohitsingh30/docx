import React, { useState, useEffect, useRef, ErrorInfo } from 'react';
import { View, ScrollView, SafeAreaView, Platform, Animated, Easing, Text, TouchableOpacity } from 'react-native';
import BackButton from '../../components/common/BackButton';
import Header from '../../components/common/Header';
import { colors, fontSizes, spacing, commonStyles } from '../../styles/commonStyles';
import Tts from 'react-native-tts';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useChatContext } from '../../context/ChatContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles/ChatBotScreenStyles';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  suggestions?: string[];
  answeredOptions?: string[];
};

const TypingIndicator = () => {
  const [dot1] = useState(new Animated.Value(0));
  const [dot2] = useState(new Animated.Value(0));
  const [dot3] = useState(new Animated.Value(0));

  useEffect(() => {
    const animateDot = (dot: Animated.Value, delay: number) => {
      Animated.sequence([
        Animated.delay(delay),
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot, {
              toValue: 1,
              duration: 400,
              easing: Easing.ease,
              useNativeDriver: true,
            }),
            Animated.timing(dot, {
              toValue: 0,
              duration: 400,
              easing: Easing.ease,
              useNativeDriver: true,
            }),
          ])
        ),
      ]).start();
    };

    animateDot(dot1, 0);
    animateDot(dot2, 200);
    animateDot(dot3, 400);
  }, []);

  return (
    <View style={styles.typingIndicator}>
      {[dot1, dot2, dot3].map((dot, index) => (
        <Animated.View
          key={index}
          style={[
            styles.typingDot,
            {
              transform: [
                {
                  translateY: dot.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -4],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ChatBotScreen error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong. Please try again later.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const ChatBotScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { addSymptom, generateReport } = useChatContext();

  // Initialize TTS with error handling
  useEffect(() => {
    try {
      Tts.setDefaultLanguage('en-IN');
      Tts.setDefaultVoice('com.apple.ttsbundle.Rishi-premium');
      Tts.setDefaultRate(0.5);
      Tts.setDefaultPitch(1.2);
    } catch (error) {
      console.error('TTS initialization failed:', error);
    }
  }, []);

  // Speak message when bot sends it with error handling
  const speakMessage = (message: string) => {
    try {
      Tts.stop();
      Tts.speak(message);
    } catch (error) {
      console.error('TTS speech failed:', error);
    }
  };

  const [messages, setMessages] = useState<Message[]>(() => {
    // Try to load messages from cache
    const cachedMessages = localStorage.getItem('chatMessages');
    return cachedMessages ? JSON.parse(cachedMessages) : [];
  });
  const [currentStage, setCurrentStage] = useState<'initial' | 'symptoms' | 'severity' | 'duration' | 'report'>('initial');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSuggestions, setSelectedSuggestions] = useState<{[key: string]: string}>({});

  // Cache messages whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Initial message with typing animation
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [{
        id: '1',
        text: "Hi! I'm your health assistant. Let's gather some information about how you're feeling. What symptoms are you experiencing?",
        sender: 'bot',
        suggestions: ['Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Other']
      }]);
      setIsTyping(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages, isTyping]);

  const addBotMessage = (message: Omit<Message, 'id' | 'sender'>) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: 'bot',
        ...message
      }]);
      speakMessage(message.text);
      setIsTyping(false);
    }, 1500);
  };

  const clearCache = () => {
    localStorage.removeItem('chatMessages');
    setMessages([]);
    setSelectedSuggestions({});
  };

  const handleSuggestionPress = async (suggestion: string) => {
    const messageId = messages[messages.length - 1]?.id;
    if (!messageId) return;

    // Update selected suggestions
    setSelectedSuggestions(prev => ({
      ...prev,
      [messageId]: suggestion
    }));

    // Add user's selection to chat
    setMessages(prev => {
      const updatedMessages = [...prev];
      const lastMessage = updatedMessages[updatedMessages.length - 1];
      if (lastMessage?.suggestions) {
        lastMessage.answeredOptions = [...(lastMessage.answeredOptions || []), suggestion];
      }
      
      return [...updatedMessages, {
        id: Date.now().toString(),
        text: suggestion,
        sender: 'user'
      }];
    });

    // Handle View Analysis click
    if (suggestion === 'View Analysis') {
      const report = generateReport();
      navigation.navigate('MedicalRecords', { report: report });
      return;
    }

    // Show analysis button after two questions
    if (messages.filter(m => m.sender === 'user').length === 1) {
      addBotMessage({
        text: "Based on your responses, here's an initial analysis:",
        suggestions: ['View Analysis']
      });
    }

    // Handle different conversation stages
    switch (currentStage) {
      case 'initial':
        addBotMessage({
          text: `On a scale of 1-10, how severe is your ${suggestion.toLowerCase()}?`,
          suggestions: ['1-3 (Mild)', '4-7 (Moderate)', '8-10 (Severe)']
        });
        setCurrentStage('severity');
        break;

      case 'severity':
        addBotMessage({
          text: "How long have you been experiencing this?",
          suggestions: ['Today', '2-3 days', '1 week', 'More than a week']
        });
        setCurrentStage('duration');
        break;

      case 'duration':
        addSymptom({
          id: Date.now().toString(),
          name: messages[messages.length - 2].text,
          severity: messages[messages.length - 2].text.startsWith('1-3') ? 2 : 
                   messages[messages.length - 2].text.startsWith('4-7') ? 5 : 9,
          duration: suggestion
        });

        addBotMessage({
          text: "Are you experiencing any other symptoms?",
          suggestions: ['Yes', 'No, generate report']
        });
        setCurrentStage('symptoms');
        break;

      case 'symptoms':
        if (suggestion === 'Yes') {
          addBotMessage({
            text: "What other symptoms are you experiencing?",
            suggestions: ['Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Other']
          });
          setCurrentStage('initial');
        } else {
          const report = generateReport();
          addBotMessage({
            text: "I've analyzed your symptoms and generated a report. What would you like to do?",
            suggestions: report.shouldSeeDoctor ? 
              ['View Report', 'Consult Doctor Now'] :
              ['View Report', 'Consult Doctor (Optional)']
          });
          setCurrentStage('report');
        }
        break;

      case 'report':
        if (suggestion.includes('Consult Doctor')) {
          navigation.navigate('DoctorSearch');
        } else {
          navigation.navigate('MedicalRecords', { report: generateReport() });
        }
        // Always return to dashboard after completing flow
        setTimeout(() => {
          navigation.navigate('Dashboard');
        }, 2000);
        break;
    }
  };

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header title="AI Health Assistant" />
          
          <ScrollView
            ref={scrollViewRef}
            style={styles.section}
            contentContainerStyle={styles.chatContent}
            showsVerticalScrollIndicator={false}
          >

          {messages.map(message => (
            <View
              key={message.id}
              style={[
                styles.section,
                message.sender === 'user' ? styles.userMessage : styles.botMessage
              ]}
            >
              <Text style={[
                styles.messageText,
                message.sender === 'user' && styles.userMessageText
              ]}>
                {message.text}
              </Text>
              
              {message.suggestions && (
                <View style={styles.suggestionsContainer}>
                  {message.suggestions.map((suggestion, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.suggestionButton,
                        selectedSuggestions[message.id] && selectedSuggestions[message.id] !== suggestion && styles.disabledSuggestion
                      ]}
                      onPress={() => handleSuggestionPress(suggestion)}
                      disabled={!!selectedSuggestions[message.id]}
                    >
                      <Text style={[
                        styles.suggestionText,
                        (message.answeredOptions?.includes(suggestion) || selectedSuggestions[message.id]) && styles.answeredSuggestion
                      ]}>
                        {suggestion}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
          {isTyping && <TypingIndicator />}
          <View style={styles.bottomPadding} />
        </ScrollView>
        </View>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default ChatBotScreen;
