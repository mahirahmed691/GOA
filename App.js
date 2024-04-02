import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./Screens/Homescreen";
import SettingsScreen from "./Screens/SettingsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import QRScannerScreen from "./Screens/QRCodeScanner";
import Shop from './Screens/Shop';
import LoginScreen from "./Screens/LoginScreen"; 
import RegisterScreen from "./Screens/RegisterScreen"; 
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import FavoritesScreen from './Screens/FavouritesScreen';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const SettingsStack = createStackNavigator(); // Add a stack navigator for the Settings screen

const MainScreens = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#00CDBC",
      inactiveTintColor: "#000",
      labelStyle: {
        fontSize: 8,
        fontWeight: "bold",
      },
      style: {
        backgroundColor: "#f3f3f3",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        borderRadius: 20,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} style={{ borderRadius: 10 }} />
        ),
        headerShown: false,
      }}
    />
     <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" size={size} color={color} style={{ borderRadius: 10 }} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Scanner"
      component={QRScannerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="scan-outline" size={size} color={color} style={{ borderRadius: 10 }} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Shop"
      component={Shop}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart-outline" size={size} color={color} style={{ borderRadius: 10 }} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} style={{ borderRadius: 10 }} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const AuthScreens = ({ onLogin }) => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" options={{ headerShown: false }}>
      {props => <LoginScreen {...props} onLogin={onLogin} />}
    </AuthStack.Screen>
    <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

const SettingsScreens = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
  </SettingsStack.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <MainScreens />
      ) : (
        <AuthScreens onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
