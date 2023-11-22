import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileHomeScreen from './ProfileHomeScreen';
import NoteScreen from './NoteScreen';
import CreateNewScreen from '../NoteView/CreateNote';
import LoginScreen from '../Home/Login';
import HomeScreen from '../Home/HomeScreen';

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator initialRouteName="My">
      <Stack.Screen
        name="My"
        component={ProfileHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name = "Login" component={LoginScreen} />
      <Stack.Screen name="Note" component={NoteScreen} />
      <Stack.Screen name="NewNote" component={CreateNewScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
