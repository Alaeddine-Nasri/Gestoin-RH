
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Profil from '../components/Profil';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Profil navigation={this.props.navigation} />
    );
  }
}

export default SettingsScreen;
