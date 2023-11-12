import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import SplashScreen from './src/views/splashScreen/SplashScreen';
import HomeScreen from './src/views/homeScreen/HomeScreen';
import Profile from './src/views/profile/Profile';
import PostAndComments from './src/views/postAndComments/PostAndComments';
import {NavigationContainer} from '@react-navigation/native';

import {Provider, useSelector, useDispatch} from 'react-redux';
import {store} from './src/service/redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import the separately created drawer
import CustomDrawerContent from './src/navigation/CustomDrawer';
import {appColors} from './src/design/appColors';

// Create bottom tab navigator
const Tab = createBottomTabNavigator();
// Create drawer navigator
const Drawer = createDrawerNavigator();

// Define the main tab navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {backgroundColor: 'black', position: 'absolute'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // Hide the header
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-minus-outline"
              color={'gray'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false, // Hide the header
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={'gray'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main App component
export default function App() {
  // Set the status bar color globally
  StatusBar.setBackgroundColor(appColors.colorLightRed);
  StatusBar.setBarStyle('light-content');

  // State to manage splash screen visibility
  const [isSplashVisible, setSplashVisible] = React.useState(true);

  // useEffect to simulate a delay for the splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Redux provider for global state management
    <Provider store={store}>
      <NavigationContainer>
        {isSplashVisible ? (
          // Show the SplashScreen component if the splash screen is visible
          <SplashScreen />
        ) : (
          // If splash screen is not visible, render the main navigation drawer
          <Drawer.Navigator
            initialRouteName="Main"
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{headerShown: false}} // Hide the header
          >
            {/* Define the main tab navigator as a screen in the drawer */}
            <Drawer.Screen name="Main" component={MainTabNavigator} />

            {/* Include the PostAndComments screen as a separate navigator screen 
              This screen will not be part of the tab navigation*/}

            <Drawer.Screen name="PostAndComments" component={PostAndComments} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}
