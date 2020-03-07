import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  ActivityIndicatorBase,
  Button,
  Platform,
  activateLasers,
  TouchableHighlight,
} from 'react-native';
//import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import { CheckBox } from 'react-native-elements';

let ScreenHeight = Dimensions.get("window").height;

export default class Profile extends Component {

  constructor(props) {
    super(props);
    //  this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      fontloaded: false,
      image: '../assets/images/star.png',
      starbool: false,

    }
  }

  // handleLoginClick()  {
  //   console.log("Test true")
  //   this.setState({starbool: true});
  // }

  // handleLogoutClick() {
  //   console.log("Test false ")
  //   this.setState({starbool: false});
  // }
  Load_New_Image = () => {

    this.setState({

      image: '../assets/images/star3.png'


    })
  }
  buttonClickListener = () => {
    this.setState({ starbool: !this.state.starbool })
    // alert("True !!!");
  }
  async componentDidMount() {
    await Font.loadAsync({
      //    'SFProText-Bold': require('../assets/fonts/FontsFree-Net-SFProText-Bold.ttf'),
      //    'SFProText-Regular': require('../assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
      //   'SFProText-Semibold': require('../assets/fonts/FontsFree-Net-SFProText-Semibold.ttf')
    }).then(() => console.log("test"));
    this.setState({ fontloaded: true });
    //  console.log("Component did mount ")

  }

  render() {
    // const starbool = this.state.starbool;
    // let button; 
    //  if (this.state.starbool){
    //    button = <Button title="wow" onClick={this.handleLogoutClick} />;
    //  } else {
    //    button = <Button title="wowssssssssssssssssssssss" onClick={this.handleLoginClick} />;
    //  }

    //const [dataLoaded, SetDataLoaded] = useState(false);
    if (!this.state.fontloaded) return <ActivityIndicator size="small" color="#000000" />
    return (

      <ScrollView style={styles.container}>
        <View style={styles.header}>
          {/* <Text style={styles.ccch}> Talent Hunter </Text> */}
       
        <Image style={styles.notification} source={require('../assets/Icons/notification.png')} />
        <TouchableOpacity style={styles.menuicon} onPress={() => this.props.navigation.openDrawer()}>
          <Image style={styles.menuicon} source={require('../assets/Icons/menu.png')} />
        </TouchableOpacity>
        </View>
        {/* <View style={styles.star} >
          <TouchableOpacity onPress={this.buttonClickListener} style={{width: 24,
            height: 24,
            alignSelf: 'flex-end',
            position: 'absolute',
            marginTop: 140,
      //      opacity : 0,
            }}>    
            {
              (this.state.starbool)? (
                <Image 
                    source ={require('../assets/images/star3.png')}
                    
                    style = {styles.stars} /> 
              )
              :
              
              <Image 
                source ={require('../assets/images/star.png')}
                
                style = {styles.stars} /> 
              
            }
        </TouchableOpacity>
        
        </View> */}

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.intro}> Newbies </Text>
            <View>
              <TextInput placeholder="Type here to translate!" style={styles.rechinput} />
              <Image style={styles.research} source={require('../assets/Icons/research.png')} />
            </View>
          </View>
          {/* <View style={styles.menu}>

          <Image style={styles.cse} source={require('../assets/images/CSE.png')} />
          <Image style={styles.home} source={require('../assets/Icons/home.png')} />
          <Image style={styles.shape} source={require('../assets/Icons/shape.png')} /> 
           </View>   */}

          <View style={styles.boxadd}>
            <View>
              <Image style={styles.plus} source={require('../assets/Icons/plus.png')} />
            </View>
            <Text style={{ textAlign: 'left', marginTop: 10, left: 10, color: 'white', fontSize: 17, }}>Add Newbies</Text>
          </View>
          <View style={styles.boxadd2}>
            <View>
              <Image style={styles.plus} source={require('../assets/Icons/list.png')} />
            </View>
            <Text style={{ textAlign: 'left', marginTop: 10, left: 10, color: 'black', fontSize: 17, }}>Filttre</Text>
          </View>

          <View style={styles.boxx}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#F5F6F9', borderColor: '#F5F6F9', marginLeft: 0 }}
              title='Name'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            {/* <View style={{width:  10, height : 10,backgroundColor:'red',position:'absolute',marginTop : 22,right:65}}></View> */}
            <Text style={{ position: 'absolute', marginTop: 18, right: 30, }}>Status</Text>

          </View>






          <View style={styles.box}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginLeft: 0 }}
              title='Bergadi Med Aymen'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <View style={{ width: 10, height: 10, backgroundColor: 'red', position: 'absolute', marginTop: 22, right: 65, }}></View>
            <Text style={{ position: 'absolute', marginTop: 18, right: 10, }}>Refused</Text>

          </View>

          <View style={styles.box}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginLeft: 0 }}
              title='Nasri Ala eddine'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <View style={{ width: 10, height: 10, backgroundColor: 'red', position: 'absolute', marginTop: 22, right: 65, }}></View>
            <Text style={{ position: 'absolute', marginTop: 18, right: 10, }}>Refused</Text>
          </View>

          <View style={styles.box}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginLeft: 0 }}
              title='Nadir Ouagued'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <View style={{ width: 10, height: 10, backgroundColor: '#6DD400', position: 'absolute', marginTop: 22, right: 65, }}></View>
            <Text style={{ position: 'absolute', marginTop: 18, right: 7, }}>Accepted</Text>

          </View>

          <View style={styles.box}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginLeft: 0 }}
              title='Lyna Boudchicha'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <View style={{ width: 10, height: 10, backgroundColor: 'gray', position: 'absolute', marginTop: 22, right: 65, }}></View>
            <Text style={{ position: 'absolute', marginTop: 18, right: 10, }}>Pending</Text>

          </View>

          <View style={styles.box}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginLeft: 0 }}
              title='Nabil Tiaiba'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <View style={{ width: 10, height: 10, backgroundColor: '#6DD400', position: 'absolute', marginTop: 22, right: 65, }}></View>
            <Text style={{ position: 'absolute', marginTop: 18, right: 7, }}>Accepted</Text>

          </View>

          <View style={styles.box}>
            <CheckBox
              style={styles.checkb}
              containerStyle={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginLeft: 0 }}
              title='Ines Abdelaziz'
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <View style={{ width: 10, height: 10, backgroundColor: 'gray', position: 'absolute', marginTop: 22, right: 65, }}></View>
            <Text style={{ position: 'absolute', marginTop: 18, right: 10, }}>Pending</Text>

          </View>



        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop : 40,
    height: 60,
  },
  menu: {
    backgroundColor: '#131E30',
    marginTop: -120,
    width: 240,

    height: ScreenHeight,
    alignSelf: 'flex-start',

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
    marginTop: 10,
    backgroundColor: '#3D4C64',
    alignSelf: 'flex-start',
    marginLeft: 28,
    width: 180,
    left: 0,
    borderRadius: 4,
    height: 40,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F3F3',
  },
  boxadd2: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop : -40,
    marginLeft: 28,
    width: 120,
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

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
    //  marginBottom: 200,
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
    alignItems: 'center',
    padding: 0,
  },
  smallcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    //   backgroundColor : '#3570a7',
    height: 58,
    marginLeft: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    shadowOffset: { width: 10, height: 10, },
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 3,
    elevation: 20
  },
  textcard: {
    fontFamily: 'SFProText-Regular',
    color: '#000',
    fontSize: 14,
    textAlign: 'center'
  },
  textcardblod: {
    color: '#000',
    fontWeight: 'bold',
    /*marginTop : 10,
    fontWeight: 'bold',*/
    fontSize: 17,
    textAlign: 'center'
  },
  bigcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '90%',
    height: 695,
    marginTop: 57,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    shadowOffset: { width: 10, height: 10, },
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 1.0,
    paddingVertical: 20,
    shadowRadius: 3,
    elevation: 20
  },
  private: {
    textAlign: "left",
    color: 'red',
    marginBottom: 10,
    textAlign: "left",
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    /*marginLeft : 20,*/
  },
  main: {
    textAlign: 'right',
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: "#000",
    /*marginTop:-2000,*/
    textAlign: 'left'
  },
  line: {
    backgroundColor: "#ECECEC",
    width: '80%',
    height: 2,
    marginTop: 20,
    marginBottom: 20,
  }
});

