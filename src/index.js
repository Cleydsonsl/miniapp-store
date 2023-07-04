
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from './screens';
 
const App = ({ globalContext = {} }) => {
  const StoreStack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <StoreStack.Navigator>
        {Screens.map(screen => (
          <StoreStack.Screen
            key={screen.id}
            name={screen.id} 
            options={({ route, navigation }) => ({
              // title: route.params.userId,
              title: screen.label,
              headerShown: false
            })}
          >
            {(props) => {
              const Page = screen.component
              return <Page {...props} globalContext={globalContext} />
            }}
          </StoreStack.Screen>
        ))}
        
      </StoreStack.Navigator>
    </NavigationContainer>
  )
}

export default App;
 