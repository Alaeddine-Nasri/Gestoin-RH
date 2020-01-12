import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image, Dimensions, Text, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { SearchBar } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class UserInput extends Component {
    state = {
        search: '',
        };

        updateSearch = search => {
        this.setState({ search });
        };
  render() {
    const { search } = this.state;
        return (
            <View style={{alignItems: "center"}}>
                <View style={{width: "100%"}}>
                    <SearchBar
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        lightTheme = {true}
                        round = {true}
                        value={search}
                        disabled = {false}
                        containerStyle= {styles.searchBar}
                        inputContainerStyle={styles.inputContainerStyle}
                    />
                </View>
                

                <ScrollView horizontal>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Test</Text>
                        </TouchableOpacity>
                        
                    </View >
                </ScrollView>
                
                <Svg
                width={DEVICE_WIDTH}
                height={80}
                fill="white"
                stroke="black"
                viewBox="0 180 1440 80"
                >
                    <Path d="M.5.5
                    h1440
                    V746.14a1115.78,1115.78,0,0,0-136.32,0
                    c-104.36,6.41-170.56,25.4-279.44,49.58
                    C872.59,829.52,843,842.18,766.61,845.31
                    c-52.25,2.14-94.28-1.11-127.89-3.82-46.37-3.73-89.62-9.71-232.08-39.09
                    C244.75,769,220.39,760.18,150.88,753.77
                    A1131.54,1131.54,0,0,0,.5,750
                    Z"/>
                </Svg>

                <View style={styles.closeButton}>

                </View>
                

            </View>
        );
  }
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#fff',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        
    },
    inputContainerStyle: {
        borderRadius: 25,
        backgroundColor: "#f2f2f2"
    },
    containerButton:{
        flexDirection: 'column',
        marginLeft: 50
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    closeButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
    }
})