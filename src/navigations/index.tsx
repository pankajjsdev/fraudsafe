import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

// Screens
import HomeScreen from '../screens/Home';
import Login from '../screens/Login';

// Components
import Header from '../components/header/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator
const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home1" component={HomeScreen} />
  </Stack.Navigator>
);

// Authentication Stack Navigator
const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

// Inner Home Navigator with Tabs
const InnerHomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Homet1" component={HomeStackNavigator} />
    <Tab.Screen name="Homet2" component={HomeScreen} />
    <Tab.Screen name="Homet3" component={HomeScreen} />
    <Tab.Screen name="Homet4" component={HomeScreen} />
  </Tab.Navigator>
);

// Root Stack Navigator with Drawer
const RootStackNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={InnerHomeNavigator}
      // Uncomment and customize the header if needed
      // options={{ header: () => <Header title="okb" /> }}
    />
  </Drawer.Navigator>
);

// Conditional Navigator based on Authentication State
const SetNavigator = () => {
  const { isLoggedIn } = useSelector((state:any) => state.login);
  return isLoggedIn ? <RootStackNavigator /> : <AuthStackNavigator />;
};

// Main Navigator Component
const Navigations = () => (
  <NavigationContainer>
    <SetNavigator />
  </NavigationContainer>
);

export default Navigations;
