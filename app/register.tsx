import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const saveUser = (userData: any) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  };

  const isEmailTaken = (email: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some((user: { email: string }) => user.email === email);
  };

  const handleRegister = () => {
    if (!email.endsWith('@gmail.com')) {
      Alert.alert('Error', 'Please use a valid Gmail address.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    if (isEmailTaken(email)) {
      Alert.alert('Error', 'This account is already in use.');
      return;
    }

    const userData = {
      username,
      middleName,
      gender,
      age,
      birthDate,
      address,
      email,
      password,
    };

    saveUser(userData);
    Alert.alert('Success', 'Registration successful!');
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Middle Name" onChangeText={setMiddleName} value={middleName} />
      
      <TextInput
        style={styles.input}
        placeholder="Gender (Male, Female, Other)"
        onChangeText={setGender}
        value={gender}
      />
      
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setAge} value={age} />
      <TextInput style={styles.input} placeholder="Birth Date (YYYY-MM-DD)" onChangeText={setBirthDate} value={birthDate} />
      <TextInput style={styles.input} placeholder="Address" onChangeText={setAddress} value={address} />

      <TextInput style={styles.input} placeholder="Gmail" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry onChangeText={setConfirmPassword} value={confirmPassword} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.footerText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#007BFF',
    marginTop: 10,
  },
});
