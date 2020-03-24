import React from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';
import Dashboard from './Dashboard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function createRouter(signed = false) {
  return !signed ? (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />

      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </>
  ) : (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
}
