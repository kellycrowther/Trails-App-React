import React from 'react';
import { TabNavigator, StackNavigator, Icon } from 'react-navigation';

import  TrailsList  from '../screens/listing';
import  TrailDetails  from '../screens/details';
import Home from '../screens/home';

export const ListingStack = StackNavigator({
  List: {
    screen: TrailsList,
    navigationOptions: {
      title: 'Trails',
      headerMode: 'none',
    },
  },
  Details: {
    screen: TrailDetails,
    navigationOptions: {
      title: 'Details',
      headerMode: 'none',
    },
  }
});

export const Tabs = TabNavigator({
  List: {
    screen: ListingStack,
    navigationOptions: {
      tabBarLabel: 'Listing'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  }
});
