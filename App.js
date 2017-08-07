import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBebJUboqr8oXT3l9L6271ieM-zvtRcAyE",
      authDomain: "one-time-password-16608.firebaseapp.com",
      databaseURL: "https://one-time-password-16608.firebaseio.com",
      projectId: "one-time-password-16608",
      storageBucket: "one-time-password-16608.appspot.com",
      messagingSenderId: "1080978866197"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
