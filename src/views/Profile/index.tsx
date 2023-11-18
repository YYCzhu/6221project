import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileHomeScreen from './ProfileHomeScreen';
import NoteScreen from './NoteScreen';

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator initialRouteName="My">
      <Stack.Screen
        name="My"
        component={ProfileHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Note" component={NoteScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
