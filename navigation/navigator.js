import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/homeScreen';
import JobPostFormScreen from '../screens/company/jobPostFormScreen';
import JobListScreen from '../screens/company/jobListScreen';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="JobList"
          component={JobListScreen}
          options={({navigation}) => ({
            title: '',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('JobForm')}
                title="+"
                color="#2e64e5"
              />
            ),
          })}
        />
        <Stack.Screen
          name="JobForm"
          component={JobPostFormScreen}
          options={() => ({
            title: '',
            //   // headerShown: false,
            //   headerLeft: () => (
            //     <Button onPress={() => goBack()} title="<---" color="#2e64e5" />
            //   ),
          })}
        />

        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
