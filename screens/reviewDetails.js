import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
import {globalStyles} from '../styles/global'

export default function ReviewDetails({navigation}) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Screen</Text>
            <Button style={globalStyles.navButton} title="back to home screen" onPress={pressHandler}/>
        </View>
    )
}