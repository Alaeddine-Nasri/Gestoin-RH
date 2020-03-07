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

export default class ProfPage extends Component {

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
        <View style={styles.body}>

          <View style={styles.boxadd}>
            <Text style={{ textAlign: 'left', marginTop: 6, left: 10, color: 'white', fontSize: 24,fontWeight :'bold' }}>NASRI Ala Eddine</Text>
            <Text style={{ textAlign: 'left', marginTop: 2, left: 10, color: 'white', fontSize: 18, }}>Etudiant en 2CP</Text>
          </View>
          
          <View style={styles.line}></View>
          <View style={styles.num}></View>
          <View style={styles.num}></View>
          <View style={styles.num}></View>
          <View style={styles.num}></View>
          <View style={styles.textss}>
          <Text style={styles.infor}>ia_nasri@esi.dz</Text>
          <Text style={styles.infor}>0698367901</Text>
          <Text style={styles.infor}>Batna, Algeria</Text>
          <Text style={styles.infor}>03/05/2000</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.box1}>
            <Text style={{ textAlign: 'center', marginTop: 7, color: 'white', fontSize: 17, }}>Java</Text>
          </View>
          <View style={styles.box2}>
            <Text style={{ textAlign: 'center', marginTop: 7, color: 'white', fontSize: 17, }}>C#</Text>
          </View>
          <View style={styles.box3}>
            <Text style={{ textAlign: 'center', marginTop: 7, color: 'white', fontSize: 17, }}>React</Text>
          </View>
          

          <View style={styles.line}></View>

          <View style={styles.field}>
            <Text style={{fontSize: 30, fontWeight : 'bold',color:'#4A70AD'}}>Motivation To join CSE</Text>
            <Text style={{lineHeight: 20,}}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son</Text>
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
  field: {
    width : '86%'

  },
  line:{
    width : '100%',
    height : 2,
    backgroundColor : '#A6A6A6',
    marginBottom : -20,
    margintop : -70,
  },
  
  textss:{
    marginBottom :0,
    marginTop :-91,
    marginLeft : -160,
  },
  num:{
    width : 12,
    height : 12,
    backgroundColor : '#A6A6A6',
    alignSelf : 'flex-start',
    marginLeft : 25,
    marginBottom : 10

  },
  infor:{
    color : '#A6A6A6',
    marginBottom : 5


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
    alignSelf: 'center',
    width: '95%',
    borderRadius: 4,
    height: 65,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F3F3',
  },
  box1: {
    marginTop: 10,
    backgroundColor: '#02A5DC',
    alignSelf: 'flex-start',
    left : 20,
    width: '27.33%',
    borderRadius: 4,
    height: 40,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F3F3',
  },
  box2: {
    marginTop: -40,
    backgroundColor: '#02A5DC',
    alignSelf: 'center',
    width: '27.33%',
    borderRadius: 4,
    height: 40,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F3F3',
  },
  box3: {
    marginTop: -40,
    backgroundColor: '#02A5DC',
    alignSelf: 'flex-end',
    right : 20,
    width: '27.33%',
    borderRadius: 4,
    height: 40,
    color: '#FFFFFF',
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

