import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignal, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { cn } from '../../lib/utils';

const StatusBar = () => {
  return (
    <View style={cn('flex-row justify-between items-center px-4 py-2')}>
      <Text style={cn('text-sm font-medium')}>9:41 AM</Text>
      <View style={cn('flex-row space-x-2')}>
        <FontAwesomeIcon icon={faSignal} size={16} color="#6b7280" />
        <FontAwesomeIcon icon={faWifi} size={16} color="#6b7280" />
        <FontAwesomeIcon icon={faBatteryFull} size={16} color="#6b7280" />
      </View>
    </View>
  );
};

export default StatusBar;
