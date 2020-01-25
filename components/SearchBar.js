import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image, Dimensions, Text, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modalbox';

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class UserInput extends Component {
    state = {
        search: '',
        isTopOpen: true,
        };

        updateSearch = search => {
        this.setState({ search });
        };

    renderButtons(){
        let children = [];
        
        for (let i = 0 ; i < this.props.data.length; i+=2){
            children.push(
                <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>{this.props.data[i]}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>{this.props.data[i+1]}</Text>
                        </TouchableOpacity>
                </View >
            )
        }
        return children.map(value => // parcourir toutes les lignes insérées
            value // represnete une ligne
        )
    }   

    render() {
    const { search } = this.state;
        return (
            <Modal style={{backgroundColor: '#00000000', flexDirection: 'column'}}
                    ref={"modalTop"}
                    swipeToClose={this.state.swipeToClose}
                    entry='top'
                    position='center'
                    startOpen= {this.state.isTopOpen}
                    backdropOpacity= {0}
                    onOpened={() => {this.setState({isTopOpen: true})}}
                    onClosed={() => {this.setState({isTopOpen: false})}}
                    >
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
                

                <ScrollView horizontal  style={{paddingTop: 20, backgroundColor:"#fff"}}>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Etudiant</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Freelanceur</Text>
                        </TouchableOpacity>
                        
                    </View >
                        
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Développeur</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Employé</Text>
                        </TouchableOpacity>
                        
                    </View >
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Designer</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text>Developpeur</Text>
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

                <TouchableOpacity style={styles.closeButton} onPress={()=> this.refs.modalTop.close()}>
                    <Text style={{fontSize: 25, color: "#00000080"}}>X</Text>
                </TouchableOpacity>
                

            </View>
            </Modal>
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
        
        backgroundColor: "#fff"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        marginLeft: 25,
        marginRight: 25,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 15,
        width: 100,
        marginBottom: 20,
        marginTop: 5
    },
    closeButton: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})