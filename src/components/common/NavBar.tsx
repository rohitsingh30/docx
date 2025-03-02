import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faCalendarCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

const NavBar = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  
  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => handleTabPress('home')}
        activeOpacity={0.7}
      >
        <FontAwesomeIcon 
          icon={faHome} 
          size={22} 
          color={activeTab === 'home' ? theme.colors.primary : theme.colors.textTertiary} 
        />
        <Text style={[
          styles.tabLabel,
          activeTab === 'home' && styles.activeTabLabel
        ]}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => handleTabPress('search')}
        activeOpacity={0.7}
      >
        <FontAwesomeIcon 
          icon={faSearch} 
          size={22} 
          color={activeTab === 'search' ? theme.colors.primary : theme.colors.textTertiary} 
        />
        <Text style={[
          styles.tabLabel,
          activeTab === 'search' && styles.activeTabLabel
        ]}>Search</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => handleTabPress('appointments')}
        activeOpacity={0.7}
      >
        <FontAwesomeIcon 
          icon={faCalendarCheck} 
          size={22} 
          color={activeTab === 'appointments' ? theme.colors.primary : theme.colors.textTertiary} 
        />
        <Text style={[
          styles.tabLabel,
          activeTab === 'appointments' && styles.activeTabLabel
        ]}>Appointments</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => handleTabPress('profile')}
        activeOpacity={0.7}
      >
        <FontAwesomeIcon 
          icon={faUser} 
          size={22} 
          color={activeTab === 'profile' ? theme.colors.primary : theme.colors.textTertiary} 
        />
        <Text style={[
          styles.tabLabel,
          activeTab === 'profile' && styles.activeTabLabel
        ]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    ...theme.shadows.sm
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xs,
    minWidth: 70,
  },
  tabLabel: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textTertiary,
    marginTop: theme.spacing.xxs,
    fontWeight: '500', // Using explicit string value instead of theme value to match TypeScript fontWeight type
  },
  activeTabLabel: {
    color: theme.colors.primary,
    fontWeight: '600', // Using explicit string value to match TypeScript fontWeight type
  },
});

export default NavBar;
