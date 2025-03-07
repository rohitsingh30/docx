import React from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from '../../../styles/SettingsScreenStyles'; // Fixed import path

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>
      {/* Add more settings options here */}
    </View>
  );
};

export default SettingsScreen;
