//file where we configure our stack navigator
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

//create new stack navigator
const { Navigator, Screen } = createStackNavigator();

//other options: "float", "screen"
//written first = first screen, at the top of the stack
export const HomeStack = () => (
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
			<Screen name="Home" component={Home} options={{ title: "My home" }} />
			<Screen name="Details" component={ReviewDetails} options={{ title: "Review Details" }} />
		</Navigator>
	</NavigationContainer>
);
