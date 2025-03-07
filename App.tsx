import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { ChatProvider } from './src/context/ChatContext';
import RootNavigator from './src/navigation/RootNavigator';
import { View } from 'react-native';
import { commonStyles } from './src/styles/commonStyles';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={commonStyles.rootContainer}>
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
