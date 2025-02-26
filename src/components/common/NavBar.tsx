import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { cn } from '../../lib/utils';

const NavBar = () => {
  return (
    <View style={cn('flex-row justify-around items-center border-t border-gray-200 bg-white py-2')}>
      <TouchableOpacity style={cn('items-center')}>
        <FontAwesomeIcon icon={faHome} size={20} color="#3b82f6" />
        <Text style={cn('text-xs text-blue-500')}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cn('items-center')}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#9ca3af" />
        <Text style={cn('text-xs text-gray-400')}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cn('items-center')}>
        <FontAwesomeIcon icon={faBookmark} size={20} color="#9ca3af" />
        <Text style={cn('text-xs text-gray-400')}>Saved</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
