/*import React, { Component } from 'react';
import {
    Image,
    TextInput,
    Text,
    View
  } from 'react-native';

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
  
  

export default class ProfileCard extends Component {
    render() {
        return (
            <View style={{ margin: 30, borderColor: "black",
                shadowColor: "#000",
                shadowOffset: {
	            width: 0,
	            height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 4}}> 
                <View style={styles.rowContainer}>
                    <View style={{ flex: 1}}>
                    <Image
                        style={{ borderWidth: 1, borderColor: '#d6d7da', borderRadius: 100, width: 100, height: 100, marginTop: 15}}
                        source={require('../assets/images/hamou.jpg')}
                    />
                    </View>
                    <View style={{ flex: 2 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20}}>
                    <Image
                        style={{width: 20, height: 20, right: 0}}
                        source={require('../assets/images/star.png')}
                        />
                    </View> 
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        style={{width: 20, height: 20}}
                        source={require('../assets/images/person.png')}
                        />
                        <Text style={{fontWeight: 'bold'}}>
                        Hamou Ait Abderrahim
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        style={{width: 20, height: 20}}
                        source={require('../assets/images/search.png')}
                        />
                        <Text style={styles.participantInfo}>
                        Developpeur Full Stack
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        style={{width: 15, height: 15, marginRight: 5}}
                        source={require('../assets/images/profession.jpeg')}
                        />
                        <Text style={styles.participantInfo}>
                        Etudiant
                        </Text>  
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        style={{width: 15, height: 15, marginRight: 5}}
                        source={require('../assets/images/building.png')}
                        />
                        <Text style={styles.participantInfo}>
                        Ecole nationale superieure d'informatique Alger
                        </Text>
                    </View> 
                    </View>
                </View>
                <TextInput 
                style={{ height: 100, borderColor: 'gray', borderWidth: 1, borderRadius: 15, marginTop: 10, marginLeft: 30, marginRight: 30, marginBottom: 20 }}
                placeholder = 'Description'
                >
                    
                </TextInput>
                </View>
        )
    }
}*/