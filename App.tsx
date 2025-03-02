import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { ChatProvider } from './src/context/ChatContext';
import RootNavigator from './src/navigation/AppNavigator';
import { View } from 'react-native';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <StatusBar style="dark" />
        <AuthProvider>
          <ChatProvider>
            <RootNavigator />
          </ChatProvider>
        </AuthProvider>
      </View>
    </SafeAreaProvider>
  );
}
