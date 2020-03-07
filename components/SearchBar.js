import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image, Dimensions, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { SearchBar } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { BlurView } from 'expo-blur';

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
        
             
             <ScrollView style={styles.container}>     
                <View>
                                  
                <Image style={styles.notification} source={require('../assets/Icons/notification.png')} />
                     
                <Image style={styles.menuicon} source={require('../assets/Icons/menu.png')} />
                   
                </View>
                <Text style={styles.intro}> Department </Text>
                
                <View style={styles.bigcard1}>
                    <View style={styles.headerc}>
                        <Text style={{color : 'white', fontWeight : 'bold', fontSize : 20, textAlign :'center',marginTop : 6,marginLeft : -3}}>Devlopement</Text>
                    </View>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 50,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 70,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 90,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 110,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 130,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 150,marginLeft : 4}}>Nom et prenom</Text>
             
                </View>
                <View style={styles.bigcard2}>
                    <View style={styles.headerc2}>
                        <Text style={{color : 'white', fontWeight : 'bold', fontSize : 20, textAlign :'center',marginTop : 6,marginLeft : -3}}>Design</Text>
                    </View>
                    <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 50,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 70,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 90,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 110,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 130,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 150,marginLeft : 4}}>Nom et prenom</Text>
             
                </View>
                <View style={styles.bigcard1}>
                    <View style={styles.headerc3}>
                        <Text style={{color : 'white', fontWeight : 'bold', fontSize : 20, textAlign :'center',marginTop : 6,marginLeft : -3}}>Formation</Text>
                    </View>
                    <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 50,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 70,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 90,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 110,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 130,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 150,marginLeft : 4}}>Nom et prenom</Text>
             
                </View>
                <View style={styles.bigcard2}>
                    <View style={styles.headerc4}>
                        <Text style={{color : 'white', fontWeight : 'bold', fontSize : 20, textAlign :'center',marginTop : 6,marginLeft : -3}}>Comm</Text>
                    </View>
                    <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 50,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 70,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 90,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 110,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 130,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 150,marginLeft : 4}}>Nom et prenom</Text>
             
                </View>
                <View style={styles.bigcard1}>
                    <View style={styles.headerc5}>
                        <Text style={{color : 'white', fontWeight : 'bold', fontSize : 20, textAlign :'center',marginTop : 6,marginLeft : -3}}>Multi</Text>
                    </View>
                    <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 50,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 70,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 90,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 110,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 130,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 150,marginLeft : 4}}>Nom et prenom</Text>
             
                </View>
                <View style={styles.bigcard2}>
                    <View style={styles.headerc6}>
                        <Text style={{color : 'white', fontWeight : 'bold', fontSize : 20, textAlign :'center',marginTop : 6,marginLeft : -3}}>RELEX</Text>
                    </View>
                    <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 50,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 70,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 90,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 110,marginLeft : 4}}>Nom et prenom</Text>
                <Text style={{fontWeight : 'bold',fontSize: 15, position:'absolute' ,marginTop : 130,marginLeft : 4}}>Respos</Text>
                <Text style={{fontWeight : 'normal',fontSize: 12 ,position : 'absolute' , marginTop : 150,marginLeft : 4}}>Nom et prenom</Text>
             
                </View>
                </ScrollView>      
            
        );
  }
}

const styles = StyleSheet.create({
    
    
    intro: {
        marginBottom: 20,
        marginTop: 80,
        fontSize: 40,
        right: -24,
        color: '#000000',
        width: 200,
        
      },
      headerc:{
        position :  'absolute',
        width : '100%',
        height : 40,
        backgroundColor : '#3D4C64'
      },
      headerc2:{
        position :  'absolute',
        width : '100%',
        height : 40,
        backgroundColor : '#F03737'
      },
      headerc3:{
        position :  'absolute',
        width : '100%',
        height : 40,
        backgroundColor : '#02A5DC'
      },
      headerc4:{
        position :  'absolute',
        width : '100%',
        height : 40,
        backgroundColor : '#6DD400'
      },
      headerc5:{
        position :  'absolute',
        width : '100%',
        height : 40,
        backgroundColor : '#EDDF0C'
      },
      headerc6:{
        position :  'absolute',
        width : '100%',
        height : 40,
        backgroundColor : '#37F09A'
      },
    
    menuicon: {
        width: 25,
        height: 25,
        marginBottom: 10,
        left: 40,
        position: 'absolute',
        marginTop: 50,
        //  marginBottom: 200,
      },

    inputContainerStyle: {
        borderRadius: 25,
        backgroundColor: "#f2f2f2"
    },
    notification: {
        width: 25,
        height: 25,
        marginBottom: 10,
        right: 40,
        position: 'absolute',
        marginTop: 50,
        //  marginBottom: 200,
      },
    bigcard1: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignSelf :'flex-start',
        marginLeft : 20,
        width: '40%',
        height : 40,
        marginTop: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        shadowOffset: { width: 10, height: 10, },
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 1.0,
        paddingVertical: 100,
        shadowRadius: 3,
        elevation: 20
    },
    bigcard2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignSelf :'flex-end',
        marginRight : 20,
        width: '40%',
        height : 40,
        marginTop: -200,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        shadowOffset: { width: 10, height: 10, },
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 1.0,
        paddingVertical: 100,
        shadowRadius: 3,
        elevation: 20
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