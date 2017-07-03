import React, {Component} from 'react';
import { ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Tile,
  List,
  ListItem } from 'react-native';

import { StackNavigator } from 'react-navigation';

class TrailDetails extends Component {
  render() {
    const { params } = this.props.navigation.state;

    return(
      <View>
        <Text>Hello Details Page</Text>
        <Text>{params.trailName}</Text>
        <Text>{params.description}</Text>
        <Text>{params.directions}</Text>
      </View>
    )
  }
}

// componentDidMount() {
//   return fetch('https://facebook.github.io/react-native/movies.json')
//   .then((response) => response.json())
//   .then((responseJson) => {
//     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.setState({
//       isLoading: false,
//       dataSource: ds.cloneWithRows(responseJson.movies),
//     }, function() {
//       //do something with new state
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }
//
// render() {
//   if (this.state.isLoading) {
//     return (
//       <View style={{flex: 1, paddingTop: 20}}>
//         <ActivityIndicator />
//       </View>
//     );
//   }
//
//   return (
//     <View style={{flex: 1, paddingTop: 20}}>
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={(rowData) => <Text>{rowData.title} {rowData.releaseYear} </Text>}
//         />
//     </View>
//   );
// }

export default TrailDetails;
