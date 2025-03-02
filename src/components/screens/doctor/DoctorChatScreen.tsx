import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { DoctorStackParamList } from '../../../types/NavigationTypes';
import Header from '../../common/Header';
import { colors, commonStyles, spacing } from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

type DoctorChatRouteProp = RouteProp<DoctorStackParamList, 'DoctorChat'>;
type Message = {
  id: string;
  text: string;
  sender: 'doctor' | 'patient';
  timestamp: Date;
};

const DoctorChatScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const route = useRoute<DoctorChatRouteProp>();
  const { chatId } = route.params;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  // Mock patient data
  const patient = {
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  };

  useEffect(() => {
    // In a real app, you would fetch messages from an API
    const mockMessages = [
      {
        id: '1',
        text: 'Hello Dr., I have been experiencing headaches lately.',
        sender: 'patient',
        timestamp: new Date(Date.now() - 3600000)
      },
      {
        id: '2',
        text: 'How long have you been experiencing these headaches?',
        sender: 'doctor',
        timestamp: new Date(Date.now() - 3500000)
      },
      {
        id: '3',
        text: 'For about a week now. They usually occur in the afternoon.',
        sender: 'patient',
        timestamp: new Date(Date.now() - 3400000)
      },
    ] as Message[];

    setMessages(mockMessages);
  }, [chatId]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'doctor',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Scroll to bottom
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header title={`Chat with ${patient.name}`} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1, padding: spacing.medium }}
          contentContainerStyle={{ paddingBottom: spacing.large }}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map(message => (
            <View
              key={message.id}
              style={[
                commonStyles.messageContainer,
                {
                  alignSelf: message.sender === 'doctor' ? 'flex-end' : 'flex-start',
                  backgroundColor: message.sender === 'doctor' ? colors.primary : colors.surface
                }
              ]}
            >
              <Text
                style={{
                  color: message.sender === 'doctor' ? colors.textInverted : colors.text
                }}
              >
                {message.text}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: message.sender === 'doctor' ? colors.textInverted : colors.textTertiary,
                  alignSelf: 'flex-end',
                  marginTop: spacing.xxs
                }}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            padding: spacing.medium,
            backgroundColor: colors.background,
            borderTopWidth: 1,
            borderTopColor: colors.border,
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              flex: 1,
              height: 40,
              backgroundColor: colors.surface,
              borderRadius: 20,
              paddingHorizontal: spacing.medium,
              marginRight: spacing.small
            }}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: colors.primary,
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Icon name="send" size={16} color={colors.textInverted} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DoctorChatScreen;
