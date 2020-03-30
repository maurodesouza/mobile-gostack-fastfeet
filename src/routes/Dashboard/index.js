import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Deliveries from '~/pages/Dashboard/Deliveries';
import Details from '~/pages/Dashboard/Details';
import Problems from '~/pages/Dashboard/Problems';
import InformProblem from '~/pages/Dashboard/InformProblem';
import Camera from '~/pages/Dashboard/Camera';
import Confirm from '~/pages/Dashboard/Confirm';

const { Navigator, Screen } = createStackNavigator();

export default function Dashboard() {
  const route = useRoute();

  const RouteName = route.state && route.state.routes[route.state.index].name;

  if (RouteName === 'Camera') StatusBar.setHidden(true);
  else StatusBar.setHidden(false);

  return (
    <>
      {RouteName && RouteName !== 'Deliveries' && (
        <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      )}

      <Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerLeft: e => (
            <TouchableOpacity onPress={() => e.onPress()}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      >
        <Screen
          options={{ headerShown: false }}
          name="Deliveries"
          component={Deliveries}
        />
        <Screen
          name="Details"
          component={Details}
          options={{ title: 'Detalhes da encomenda' }}
        />
        <Screen
          name="Problems"
          component={Problems}
          options={{ title: 'Visualizar problemas' }}
        />
        <Screen
          name="InformProblem"
          component={InformProblem}
          options={{ title: 'Informar problema' }}
        />
        <Screen
          name="Camera"
          component={Camera}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="Confirm"
          component={Confirm}
          options={{ title: 'Confirmar entrega' }}
        />
      </Navigator>
    </>
  );
}
