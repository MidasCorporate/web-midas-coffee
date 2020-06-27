import * as React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Home  from './pages/Home';
import Cart  from './pages/Cart';
import Profile from './pages/Profile';

import Header from './components/Header';
import { navigationRef } from './services/navigation';

const Stack = createStackNavigator();

// function Routes() {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator
//        initialRouteName="Home"
//        headerMode="screen"
//        screenOptions={{
//          cardStyle: {
//            backgroundColor: "#191920",
//          },
//          header: props => <Header {...props} />
//        }}
//        >
//         <Stack.Screen name="Home" component={Home} options={{ title: null}} />
//         <Stack.Screen name="Cart" component={Cart} options={{ title: null}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default Routes;
export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Home,
            New: {

              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },

            Cart,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                borderTopColor: '#8d41a8',
                backgroundColor: '#8d41a8',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
