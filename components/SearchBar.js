import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image, Dimensions, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
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
            <View style={{backgroundColor: '#00000000'}}>
            <ImageBackground source={require("../assets/images/SearchBarBackground.png")} style={styles.backStyle}>
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
                

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingTop: 20, backgroundColor:"#fff"}}>
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
               
                <TouchableOpacity style={styles.openButton} onPress={()=> this.refs.modalTop.close()}>
                    <Text style={{fontSize: 30, color: "#00000060"}}>...</Text>
                </TouchableOpacity>

                </ImageBackground>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={()=> this.refs.modalTop.close()}>

                    <Text style={{fontSize: 35, color: "#00000080"}}>×</Text>
                </TouchableOpacity>
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
    backStyle:{
        width: undefined,  
        height: undefined,
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        marginLeft: 10,
        marginRight: 10,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 15,
        width: 130,
        marginBottom: 20,
        marginTop: 5
    },
    closeButton: {
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 0,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
    }
})