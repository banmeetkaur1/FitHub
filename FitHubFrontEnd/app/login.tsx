import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TouchableOpacity, Modal, } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { createClient, Provider } from 'urql';
import React, {useState, useEffect} from 'react';
import { Link } from 'expo-router';
import { Button } from './components/button';
import { router } from 'expo-router';
import { defaultPageTheme, styles } from './utility/style';
import { TextInput } from 'react-native';
import { useApiContext } from './../api/ApiContext';
import { ApiContext } from '../api/ApiContext';
import { TextBox } from './components/textbox';
import { Ionicons } from '@expo/vector-icons';
/*
// Manages API
  const {loginUser} = useApiContext();
  const loginAPI = async (user, pass) => { await loginUser(user,pass); }

// Form Validation
const [error, setError] = useState('');
const showFormError = (error, showError) => {
  showError(error);
  setTimeout(() => {showError('')}, 1000);
}

const validateForm = (user, pass) => {
  if (user.length < 3) return showFormError('Username is too short!', setError);
  else return 0;
}
*/


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const openModal = () => {
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }

  const handleSignUp = async () => {
    try {
      let signup_user = await signupUser(newUsername, newPassword, newEmail);
      // Optionally, close the modal after successful sign up
      console.log("si",signup_user)
      console.log(signupUser)
      if(signup_user == "User created successfully"){
        console.log('hello');
        closeModal();
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  // Here you would typically save the token to localStorage/sessionStorage and redirect the user
  const {loginUser, signupUser} = useApiContext();
  return (
    <View style={defaultPageTheme().container}>
      <Image 
        source={require('./../assets/logo.png')}
        style={{width: 120, height: 120}}
      />
      <TextInput
        style= {[styles.input, {marginTop: 50}]}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
        autoCapitalize = 'none'
      />
      <TextInput
      style = {styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry = {true}
      />
      <Button 
        onPress={async () => {await loginUser(username,password);}}
        title="Log In"
        style = {styles.setupbutton}
      />
      {/*<Button 
        onPress={async () => {await signupUser(username,password, 'test@gmail.com');}}
        title="Sign Up"
        style = {styles.setupbutton}
      />*/}
        <TouchableOpacity onPress = {openModal}>
        <Text style={[styles.text, {marginTop: 50}]}>Don't have an account registered? Sign up here</Text>
        </TouchableOpacity>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TextInput
              style={[styles.input, { marginBottom: 10 }]}
              placeholder="Username"
              value={newUsername}
              onChangeText={setNewUsername}
              autoCapitalize="none"
            />
            <TextInput
              style={[styles.input, { marginBottom: 10 }]}
              placeholder="Email"
              value={newEmail}
              onChangeText={setNewEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={[styles.input, { marginBottom: 10 }]}
              placeholder="Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={true}
            />
            
            <Button onPress={handleSignUp} title="Sign Up" style={[styles.setupbutton, { marginTop: 10 }]} />
            {/* Close button */}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      
      <StatusBar style="auto"/>
    </View>
  );
}