import React, { Component } from 'react';
import {
    Image,
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native'; 
  

export default class ProfileCard extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.rowContainer}>
                    <View style={{ flex: 6}}>
                        <Image
                            style={styles.profilImageStyle}
                            source={require('../../assets/images/hamou.jpg')}
                        />
                    </View>
                    <View style={styles.infoStyle}>
                        <View style={styles.startStyle}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconStyleRight}
                                    source={require('../../assets/images/star.png')}
                                    />
                            </TouchableOpacity>
                        </View> 
                        <View style={{flexDirection: 'row'}}>
                            <Image
                            style={styles.iconStyle}
                            source={require('../../assets/images/person.png')}
                            />
                            <Text style={{fontWeight: 'bold'}}>
                                Hamou Ait 
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                            style={styles.iconStyle}
                            source={require('../../assets/images/search.png')}
                            />
                            <Text style={styles.participantInfo}>
                                Developpeur Full Stack
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                            style={styles.iconStyleModified}
                            source={require('../../assets/images/profession.jpeg')}
                            />
                            <Text style={styles.participantInfo}>
                                Etudiant
                            </Text>  
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                            style={styles.iconStyleModified}
                            source={require('../../assets/images/building.png')}
                            />
                            <Text style={styles.participantInfo}>
                                Ecole nationale superieure d'informatique Alger
                            </Text>
                        </View> 
                    </View>
                </View>
                <View style={styles.inputStyle}>
                    <TextInput                         
                        placeholder = 'Description'>                        
                    </TextInput>
                </View>        
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: { 
        margin: 20, 
        padding: 5,
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset:
            {
                width: 0,
                height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        flexDirection: 'column'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    inputStyle: { 
        height: 120, 
        borderColor: 'gray',
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 30,
        marginRight: 30,
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    participantInfo: {
        color: 'gray'
    },
    profilImageStyle: { 
        borderWidth: 1, 
        borderColor: '#d6d7da', 
        borderRadius: 100, 
        width: 140, 
        height: 140, 
    },
    startStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop : -20,
        marginRight: -10,
        marginBottom: 40
    },
    iconStyle: {
        width: 20, 
        height: 20
    },
    infoStyle:{
        flex: 7,
        marginTop: 10,
    },
    iconStyleModified: {
        width: 15, 
        height: 15,
        marginRight: 5
    },
    iconStyleRight: {
        width: 25,
        height: 25,
        right: 0
    },
  });