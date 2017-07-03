import React from 'react';
import { ActivityIndicator,
  Button,
  StyleSheet,
  Text, View,
  FlatList,
  ListView,
  TouchableOpacity,
  Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
var TrailsList = require('./App');

export default class Details extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Details Page!
        </Text>
      </View>
    );
  }
}
