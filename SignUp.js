import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here, such as making an API call to a server
    console.log('Signing up with email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  }

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Text>Confirm Password:</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        placeholder="Confirm your password"
        secureTextEntry={true}
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
      />
    </View>
  );
};

export default SignupPage;
