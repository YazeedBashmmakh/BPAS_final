import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import currency from './views/blindUI/currency'
import decide from './views/decide'
import blindHomePage from './views/blindUI/blindHomePage'
import volunteerHomePage from './views/volunteerUI/volunteerHomePage'
import login from './views/volunteerUI/login'
import signup from './views/volunteerUI/signup'
import createAccountB from './views/blindUI/createAccountB'
import image from './views/blindUI/displayImage'
import TextRecognitionCamera from './views/blindUI/TextRecognitionCamera'
import object from './views/blindUI/ObjectRecognitionPage'
import cam from './views/blindUI/cam'
import textPage from './views/blindUI/TextRecognition'
import call from './views/volunteerUI/call'
import VideoCall from './views/blindUI/VideoCall'
import {retrieveData} from './views/db/Userdb'


//import Video from './views/blindUI/calls/Video'


//import React, {Component} from "react";
// import PushNotification from "react-native-push-notification";
// //import PushNotificationIOS from "@react-native-community/push-notification-ios";
// //import { not } from 'react-native-reanimated';
// // var PushNotification = require("react-native-push-notification");

// class PushController extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { 
//         room:'',
//     };
//   }
//     componentDidMount(){
//       console.log('in')
//       PushNotification.configure({
          
//         // (optional) Called when Token is generated (iOS and Android)
//         onRegister: function(token) {
//           console.log("TOKEN:", token);
//         },
      
//         // (required) Called when a remote or local notification is opened or received
//         onNotification: (notification)=> {
//           console.log("NOTIFICATION:")
//           console.log("NOTIFICATION:", notification.room)
//           this.noti(notification)
      
//           // process the notification here
      
//           // required on iOS only 
//           //notification.finish(PushNotificationIOS.FetchResult.NoData);
//         },
//         // Android only
//         senderID: "170601632573",
//         // iOS only
//         permissions: {
//           alert: true,
//           badge: true,
//           sound: true
//         },
//         popInitialNotification: true,
//         requestPermissions: true

//       })
      
//     }
//     noti=async(notification)=>{
//       console.log(notification)
//       this.props.navigation.navigate('callP',{room:notification.room})
    
//       //   console.log('in2')
//     //   PushNotification.localNotification({
//     //     /* iOS and Android properties */
//     // title: "My Notification Title", // (optional)
//     // message: "My Notification Message", // (required)
//     // playSound: false, // (optional) default: true
//     // soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
//     // number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
//     // repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
//     // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
//     // })
//     // console.log('out')
//   }
//     render(){
    
//         return (
//           <View style={{flex:1,justifyContent:'center'}}>
//             <TouchableOpacity
//             onPress={()=>this.noti()}>
//               <Text>token s</Text>
//             </TouchableOpacity>
//           </View>
//         )
//     }
// }

class PushController extends React.Component{
  componentDidMount= async()=>{
    var data
      try{
        const data= await retrieveData()
        console.log(data)
      }catch(error){
        console.log(error)
        
      }
      if(!data){
        console.log('in')
        this.props.navigation.navigate('decideP')
      }
  }
  render(){
    return(
      <View>
        <Text>
          text
        </Text>
      </View>
    )
  } 
 }






    const AppNavigator = createStackNavigator({
      // PushControllerP:{
      //   screen: PushController,
      // },
      decideP: {
        screen: decide,
      },
      blindHomePageP:{
        screen: blindHomePage,
      },
      volunteerHomePageP:{
        screen: volunteerHomePage,
      },
      loginP:{
        screen: login,
      },
      signupP:{
        screen: signup,
      },
      createAccountBP:{
        screen: createAccountB,
      },
      CurrencyP:{
        screen: currency
      },
      imageP:{
        screen: image
      },
      TextP:{
        screen: TextRecognitionCamera
      },
      objectP:{
        screen: object
      },
      CameraP:{
        screen: cam
      },
      textPageP:{
        screen: textPage
      },
      VideoCallP:{
        screen: VideoCall
      },
      callP:{
        screen: call
      },
      // videoP:{
      //   screen: Video
      // },
      });
      export default createAppContainer(AppNavigator);
 

