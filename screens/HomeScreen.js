import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import ProfileCard from '../components/profileCard/ProfileCard';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#d6d7da',
      borderRadius: 10,
      flex: 3
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 20
    },
    participantInfo: {
      color: 'gray'
    }
  });

