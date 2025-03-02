import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from './BackButton';
import { theme, colors, spacing, commonStyles } from '../../styles/commonStyles';
import { AuthContext } from '../../context/AuthContext';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  alignTitle?: 'left' | 'center' | 'right';
  rightComponent?: React.ReactNode;
  gradient?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = true, 
  alignTitle = 'left',
  rightComponent,
  gradient = false
}) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { user } = authContext;

  const gradientProps = gradient ? {
    colors: [colors.primary, colors.primaryDark],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }
  } : {};

  return (
    <>
      <View style={styles.leftContainer}>
        {showBackButton && <BackButton />}
      </View>
      
      <Text style={[
        styles.title,
        alignTitle === 'right' && styles.rightAligned,
        alignTitle === 'center' && styles.centerAligned,
        gradient && styles.gradientTitle
      ]}>
        {title}
      </Text>
      
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.medium,
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.primaryDark,
    flex: 1,
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  gradientTitle: {
    color: colors.textInverted,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2
  },
  centerAligned: {
    textAlign: 'center',
  },
  rightAligned: {
    textAlign: 'right',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  }
});

export default Header;