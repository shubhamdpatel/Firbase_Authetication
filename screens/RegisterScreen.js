import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import companyAction from '../redux/actions/auth';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [confirmPassword, setconfirmPassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Your Company</Text>
      <FormInput
        labelValue={email}
        onChangeText={emailId => setEmail(emailId)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />
      {/* <FormInput
        labelValue={email}
        onChangeText={confirmPassword => confirmPassword(confirmPassword)}
        placeholderText="Confirm Password"
        secureTextEntry={true}
      /> */}
      {/* <FormInput
        labelValue={email}
        onChangeText={confirmPassword => confirmPassword(confirmPassword)}
        placeholderText="Confirm Password"
        secureTextEntry={true} 
      />*/}
      <FormButton
        buttonTitle="Register"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
});
export default RegisterScreen;
