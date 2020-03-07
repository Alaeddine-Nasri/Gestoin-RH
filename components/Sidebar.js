import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex :1}}>
        <Text> Sidebar </Text>
      </View>
    );
  }
}

export default Sidebar;
