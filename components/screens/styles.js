import { StyleSheet } from 'react-native';

const colors = {
  primary: '#123456',     // Your primary color (e.g., for headers or navigation)
  background: '#f1f1f1',  // Background color
  button: '#ff9800',      // Button color
  text: '#000000',        
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.button,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export { styles, colors };
