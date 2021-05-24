//file where we configure our stack navigator
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails"

//create new stack navigator
const { Navigator, Screen } = createStackNavigator();


    //other options: "float", "screen"
    //written first = first screen, at the top of the stack
export const HomeStack = () => (
    <NavigationContainer>
        <Navigator headerMode="none">
            <Screen name="Home" component={Home} /> 
            <Screen name="Details" component={ReviewDetails} />
        </Navigator>
    </NavigationContainer>
);

