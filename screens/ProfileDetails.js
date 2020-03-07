import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ProfPage from "../components/profpage";
class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ProfPage />
    );
  }
}

export default ProfileDetails;
