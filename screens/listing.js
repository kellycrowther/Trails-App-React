import React, {Component} from 'react';
import { ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView,
  TouchableOpacity,
  Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';


class TrailsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  // render() {
  //   return(
  //     <Text>
  //       Hello Listing Page
  //     </Text>
  //   )
  // }

  onDetails = ( trail ) => {
    this.props.navigation.navigate('Details', trail);
  };

// http://localhost:5000/api/deschutes-trails

componentDidMount() {
  return fetch('http://localhost:5000/api/deschutes-trails')
  .then((response) => response.json())
  .then((responseJson) => {
    for(let x = 0; x<responseJson.length; x++){
      console.log(x);
      console.log("ResponseJson: ", responseJson[x].trailName);

    }

    let ds = new ListView.DataSource({rowHasChanged: (r1) => r1});
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(responseJson),
    }, function() {
      //do something with new state
    });
  })
  .catch((error) => {
    console.error(error);
  });
}

render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(trail) =>
          <Button
            onPress={() => this.onDetails(trail)}
            title={trail.trailName}
          />}
        />
    </View>
  );
}


}



// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black'
  }
});

export default TrailsList;
