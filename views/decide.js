import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles'

import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

export default class decide extends React.Component{
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        //headerShown: false
    };
    componentDidMount= async()=>{
        PushNotification.configure({
          
                    // (optional) Called when Token is generated (iOS and Android)
                    // onRegister: function(token) {
                    //   console.log("TOKEN:", token);
                    // },
                  
                    // (required) Called when a remote or local notification is opened or received
                    onNotification: (notification)=> {
                      console.log("NOTIFICATION:")
                      console.log("NOTIFICATION:", notification.room)
                      this.props.navigation.navigate('callP',{
                          room:notification.room,
                          id:'4ed3c1e0fb52417994f45aeeb720db46'
                        })
                  
                      // process the notification here
                  
                      // required on iOS only 
                      notification.finish(PushNotificationIOS.FetchResult.NoData);
                    },
                    // Android only
                    senderID: "170601632573",
                    // iOS only
                    permissions: {
                      alert: true,
                      badge: true,
                      sound: true
                    },
                    popInitialNotification: true,
                    requestPermissions: true
            
                  })
        
        //var data
        //   try{
        //     const data= await retrieveData()
        //     console.log(data)
        //   }catch(error){
        //     console.log(error)
            
        //   }
        //   if(!data){
        //     return 
        //   }
        //   if(data.type == "blind"){

        //   }else{

        //   }
      }
    render(){
        return(
            <View style={styles.container}>
            
                <TouchableOpacity style={styles.blinde} onPress={()=> this.props.navigation.navigate('createAccountBP')}>
                    <Text style={styles.text}>كفيف</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.volunteer} onPress={()=> this.props.navigation.navigate('loginP')}>
                    <Text style={styles.text}>متطوع</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

