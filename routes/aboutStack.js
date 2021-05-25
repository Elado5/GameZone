//file where we configure our stack navigator
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

//create new stack navigator
const {Navigator, Screen} = createStackNavigator();

//other options: "float", "screen"
//written first = first screen, at the top of the stack
const myStacks = () => (
	<NavigationContainer>
		<Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#333",
					height: 60
				},
				headerTintColor: "#396"
			}}>
		</Navigator>
	</NavigationContainer>
);

export default myStacks;