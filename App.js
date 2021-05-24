//import react stuff
import React from 'react';
import {useState} from 'react'
//import screens
import Home from './screens/home'
import About from './screens/about'
import ReviewDetails from './screens/reviewDetails'
//react navigation
import { NavigationContainer } from '@react-navigation/native';
//
import AppLoading from 'expo-app-loading'
//so we can use external fonts
import * as Font from 'expo-font'


const getFonts = () => Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/nunito-regular.ttf'),
    'nunito-bold': require('./assets/fonts/nunito-bold.ttf')
  })


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  //if the fonts are already loaded start regularly
  if(fontsLoaded) {
    return (
      <Home />
    )
  }
  //load the fonts and then start
  else {
    return(
    <AppLoading 
      startAsync={getFonts}
      onError = {console.warn}
      onFinish={() => setFontsLoaded(true)}
    />
    )
  }

  
}