import React from 'react';
import { Platform } from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Sidebar from '../components/Sidebar';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileDetails from '../screens/ProfileDetails';
import SettingsScreen from '../screens/SettingsScreen';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
const config = Platform.select({
  web: { headerMode: 'none' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    ProfileDetails : ProfileDetails
  },
  {
    headerMode: 'none',
    initialRouteName : 'Settings'
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},
{
    contentComponent: () => <Sidebar />
  });

const AppStack = createDrawerNavigator({
  App: tabNavigator,
}, {
  contentComponent: () => <Sidebar />
}
)

tabNavigator.path = '';

export default AppStack;
