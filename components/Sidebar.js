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
        <View>
        <Image style={styles.cse} source={require('../assets/images/CSE.png')} />
        </View>
        <View style={styles.compos}>
          <Text style={styles.texts}>Home</Text>
          <Image style={styles.icons} source={require('../assets/Icons/home.png')}/>
        </View>
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
  compos: {
    marginTop : 20,
    //alignContent : 'center',
    //alignItems : "center",
    alignSelf : "center",
    width : '70%',
  },
  icons:{
    marginTop : -30,
    width : 25,
    height : 25
  },
  texts:{
    alignSelf : 'flex-end',
    color : 'white',
    marginRight : 30,
    fontSize : 20,
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
    marginBottom : 50
  }
});


export default Sidebar;
