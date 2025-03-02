import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined || !context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  // Adding the userType to determine if user is doctor or patient
  // This could be based on a property in the user object
  const userType = context?.user || 'patient';
  
  return {
    ...context,
    userType
  };
};
