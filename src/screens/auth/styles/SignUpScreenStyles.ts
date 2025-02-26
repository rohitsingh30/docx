import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  signUpButton: {
    width: '75%',
    paddingVertical: 12,
    backgroundColor: '#1d4ed8',
    borderRadius: 8,
    marginBottom: 16,
  },
  loginButton: {
    width: '75%',
    paddingVertical: 12,
    backgroundColor: '#bfdbfe',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  loginButtonText: {
    color: '#1d4ed8',
    fontSize: 18,
    textAlign: 'center',
  },
});
