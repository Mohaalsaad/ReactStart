import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SecondView = ({navigation}) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        onChangeText={text => setMessage(text)}
        value={message}
        placeholder="Enter your message"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 100,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SecondView;