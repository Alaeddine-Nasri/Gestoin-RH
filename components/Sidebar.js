import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  ActivityIndicatorBase,
  Button,
  Platform,
  activateLasers,
  TouchableHighlight,
} from 'react-native';
//import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import { CheckBox } from 'react-native-elements';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cse} source={require('../assets/images/CSE.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    backgroundColor : '#131E30',
    flex: 3
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 20
  },
  participantInfo: {
    color: 'gray'
  },
  cse:{
    marginTop : 60,
    marginLeft : 40,
    height : 71,
    width : 188,
  }
});


export default Sidebar;
