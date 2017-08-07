import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-16608.cloudfunctions.net';


class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => { 
    // async keyword tells BABEL that this function is going to contain async code 
    // await: wait for this line of code to complete before going to the next line.
    // use try catch for catching the error
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });      
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button
          onPress={this.handleSubmit}
          title="Submit"
        />
      </View>
    );
  }
}

export default SignUpForm;