import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#7d40e7',
          inactiveTintColor: '#999',
          keyboardHidesTabBar: true,
          style: {
            height: 70,
          },
          tabStyle: {
            paddingTop: 12,
            paddingBottom: 12,
          },
          labelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto-Regular',
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ route }) => {
            const RouteName =
              route.state && route.state.routes[route.state.index].name;

            return {
              unmountOnBlur: true,
              tabBarLabel: 'Entregas',
              tabBarVisible: RouteName !== 'Camera',
              tabBarIcon: ({ ...rest }) => (
                <Icon name="view-headline" size={25} color={rest.color} />
              ),
            };
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu perfil',
            tabBarIcon: ({ ...rest }) => (
              <Icon name="account-circle" size={25} color={rest.color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
