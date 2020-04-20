import React from 'react';
import {AsyncStorage} from 'react-native';

export const saveUserdata = async(loginData)=>{
    await AsyncStorage.setItem('login',JSON.stringify(loginData));
}

export const retrieveData = async()=>{
    try{
        const loginData = await AsyncStorage.getItem('login')
        const dataToJson = JSON.parse(loginData)
    }catch(error){
    return 'non'
    }
    return dataToJson
}

export const saveData =async(email, pass, type)=>{
    try {
        const data = await AsyncStorage.setItem('login', JSON.stringify({email,pass,type}));
      } catch (error) {
        return false
      }
      return true
}