import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    // For simplicity, we're just logging the email for now
    console.log('Forgot Password for Email:', email);
  };

  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Reset Your Password.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Remembered your password? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    fontFamily:'Helvetica Neue',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CDBC',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    fontFamily:'Helvetica Neue',
  },
  link: {
    marginTop: 20,
    color: '#fff',
    fontFamily:'Helvetica Neue',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
