import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Deliveries from '~/pages/Dashboard/Deliveries';

const { Navigator, Screen } = createStackNavigator();

export default function Dashboard() {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="Deliveries"
        component={Deliveries}
      />
    </Navigator>
  );
}
