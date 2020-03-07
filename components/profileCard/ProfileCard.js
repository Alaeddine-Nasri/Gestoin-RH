import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  TextInput,
  ActivityIndicatorBase,
  Button,
  Platform,
  activateLasers,
  TouchableHighlight,
  } from 'react-native'; 
  

export default class ProfileCard extends Component {
    render() {
        return (
            <View style={styles.container}> 
            <View style={styles.header}>
                {/* <Text style={styles.ccch}> Talent Hunter </Text> */}
       
                <Image style={styles.notification} source={require('../../assets/Icons/notification.png')} />
                <TouchableOpacity style={styles.menuicon} onPress={() => this.props.navigation.openDrawer()}>
                <Image style={styles.menuicon} source={require('../../assets/Icons/menu.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.intro}>Hello, Billel </Text>
                        <View>
                            <TextInput placeholder="Search!" style={styles.rechinput} />
                            <Image style={styles.research} source={require('../../assets/Icons/research.png')} />
                        </View>
                       
                    </View>
                    <View style={styles.texts}>
                        <View style={styles.text1}>
                            <Text style={{fontSize : 17,fontWeight : 'bold'}}>Members</Text>
                            <Text style={{fontSize : 35,marginTop : 10,marginLeft : 13,fontWeight : 'bold'}}>40</Text>
                        </View>
                        <View style={styles.text2}>

                            <Text style={{fontSize : 17,fontWeight : 'bold'}}>Active</Text>
                            <Text style={{fontSize : 35,marginTop : 10,fontWeight : 'bold'}}>12</Text>
                        </View>
                        <View style={styles.text3}>

                            <Text style={{fontSize : 17,fontWeight : 'bold'}}>Quit</Text>
                            <Text style={{fontSize : 35,marginTop : 10, fontWeight : 'bold'}}>04</Text>
                        </View>
                    </View>
                    <View style={{width : 270, height : 2 ,marginTop : 80,marginLeft: -10, backgroundColor: 'black'}}>
                        
                    </View>
                    <View>
                        <Image style={styles.crc} source={require('../../assets/images/crc.png')} />
                        <Text style={{position : 'absolute', marginTop : 140,marginLeft : 25,fontWeight:'bold'}}> Active </Text>
                        <Text style={{position : 'absolute', marginTop : 70,marginLeft : 60,fontWeight:'bold'}}> Quit </Text>
                    </View>


                    <View style={{width : 270, height : 2 ,marginTop : 250,marginLeft: -10, backgroundColor: 'black'}}>
                        </View>
                    <View style={styles.boxadd}>
                    <View style={{width: 14,height: 14,position:'absolute',borderRadius: 10,marginTop : 12,marginLeft:12, backgroundColor: 'orange',}}>
                         
                        </View>
                        <Text style={{ textAlign: 'right', marginTop: 7, right : 12, color: 'black', fontSize: 17, }}>Homme</Text>
                    </View>


                    <View style={styles.boxadd2}>
                        <View style={{width: 14,height: 14,position:'absolute',borderRadius: 10,marginTop : 12,marginLeft:12, backgroundColor: '#F03737',}}>
                         
                        </View>
                        <Text style={{ textAlign: 'right', marginTop: 7, right : 12, color: 'black', fontSize: 17, }}>Femme</Text>
                    </View>

                </View>
                
            </View>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        marginTop : 40,
        height: 60,
        marginLeft: -10,
        marginRight : 10,
      },
      texts:{
          marginTop : 120,
          marginLeft: 50,
          fontSize : 20,
          flex : 1
      },
      text1:{
          flex : 0.3,
          position : 'absolute',
          right :100,
      },
      text2:{
        flex : 0.3,
        position : 'absolute',
        right :0,

      },
      text3:{
        flex : 0.3,
        position : 'absolute',
        right :-100,
        
      },
      crc:{
        width : 200,
        height : 200,
        marginTop : 30,
      },
      menu: {
        backgroundColor: '#131E30',
        marginTop: -120,
        width: 240,
        alignSelf: 'flex-start',
    
      },
      menui: {
        backgroundColor: '#131E30',
        width: 240,
        height : 100,
      },
    
      checkb: {
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
      },
    
      intro: {
        marginBottom: 10,
        marginTop: -5,
        fontSize: 40,
        right: 40,
        color: '#000000',
        width: 200,
      },
    
      names: {
        marginTop: 20,
        color: '#000000',
        textAlign: 'center',
        fontSize: 18,
      },
    
      box: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 4,
        height: 60,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#F3F3F3',
      },
      boxx: {
        marginTop: 10,
        backgroundColor: '#F5F6F9',
        width: 300,
        borderRadius: 4,
        height: 60,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#F3F3F3',
      },
      boxadd: {
        marginTop : 20,
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        marginLeft: 28,
        width: 150,
        left: 0,
        borderRadius: 4,
        height: 40,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#F3F3F3',
      },
      boxadd2: {
        marginTop : 20,
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-end',
        marginTop : -40,
        marginLeft: 28,
        width: 150,
        left: -30,
        borderRadius: 4,
        height: 40,
        borderWidth: 1,
        borderColor: '#F3F3F3',
      },
    
      imageStyle: {
    
        width: 200,
        height: 300,
        resizeMode: 'center'
    
      },
    
      notification: {
        width: 25,
        height: 25,
        marginBottom: 10,
        right: 20,
        position: 'absolute',
        marginTop: 20,
        //  marginBottom: 200,
      },
      plus: {
        width: 20,
        height: 20,
        right: 14,
        marginTop: 10,
        position: 'absolute',
        //  marginBottom: 200,
      },
      shape: {
        width: 25,
        height: 25,
        marginBottom: 10,
        right: 20,
        position: 'absolute',
        marginTop: 10,
        //  marginBottom: 200,
      },
      home: {
        width: 25,
        height: 25,
        marginBottom: 10,
        right: 20,
        position: 'absolute',
        marginTop: 50,
        //  marginBottom: 200,
      },
      menuicon: {
        width: 25,
        height: 25,
        marginBottom: 10,
        left: 20,
        position: 'absolute',
        marginTop: 10,
        //  marginBottom: 200,
      },
      research: {
        width: 25,
        height: 25,
        right: 20,
        position: 'absolute',
        marginTop: 13,
        //  marginBottom: 200,
      },
      cse: {
        width: 160,
        height: 61,
        right: 30,
        position: 'absolute',
        left: 20,
        marginTop: 23,
        //  marginBottom: 200,
      },
      rechinput: {
        height: 50,
        borderRadius: 7,
        width: 300,
        backgroundColor: '#F5F6F9',
        padding: 15,
      },
      star: {
        width: '82%',
        alignSelf: 'center',
        position: 'absolute',
      },
      stars: {
        width: 24,
        height: 24,
        alignSelf: 'flex-end',
        position: 'absolute',
        //marginTop: 140,
      },
      starss: {
        width: 24,
        height: 24,
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: 150,
        opacity: 0.1,
      },
      name: {
        fontFamily: 'SFProText-Bold',
        fontSize: 22,
        color: "#000000",
      },
      info: {
        fontFamily: 'SFProText-Regular',
        fontSize: 15,
        color: "#000000",
        marginTop: 5,
        marginBottom: 20,
      },
      body: {
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      bodyContent: {
        flex: 1,
        marginTop : 520,
        alignItems: 'center',
      },
    });