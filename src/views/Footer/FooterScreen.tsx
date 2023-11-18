import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Profile';
import HomeScreen from '../Home/HomeScreen';
import {
  Icon,
  Text,
  Button,
  OverflowMenu,
  MenuItem,
} from '@ui-kitten/components';
import commonStyles from '../../styles/commonStyles';

const Tab = createBottomTabNavigator();

const FooterScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="message-circle-outline"
              width={size}
              height={size}
              fill={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="person-outline"
              width={size}
              height={size}
              fill={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default FooterScreen;

const styles = StyleSheet.create({
  flowMenu: {
    width: 125,
  },
});
