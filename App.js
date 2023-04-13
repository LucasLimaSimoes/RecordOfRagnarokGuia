import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Inicio from './tabs/Inicio';
import Humanos from './tabs/Humanos';
import Deuses from './tabs/Deuses';
import Lutas from './tabs/Lutas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Inicio'>
          <Tab.Screen name="Inicio" component={Inicio} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name='home' color={color} size={size}/>)}}/>
          <Tab.Screen name="Humanos" component={Humanos} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name='human' color={color} size={size}/>)}}/>
          <Tab.Screen name="Deuses" component={Deuses} options={{tabBarIcon: ({color, size}) => (<FontAwesome5 name='church' color={color} size={size}/>)}}/>
          <Tab.Screen name="Lutas" component={Lutas} options={{tabBarIcon: ({color, size}) => (<FontAwesome5 name='fist-raised' color={color} size={size}/>)}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
