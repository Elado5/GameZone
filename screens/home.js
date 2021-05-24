import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global'


export default function Home({navigation}) {


const [reviews, setReviews] = useState([
    {title: 'Naruto Shippuden', rating: 5, body: 'Rasengan!', key: '1'},
    {title: 'Bleach', rating: 5, body:'Getsuga Tenshou', key: '2'},
    {title: 'One Piece', rating: 5, body:'Pirate King', key: '3'}
])

//item is individual review
//we send in navigate the item data
    return (
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress ={() => navigation.navigate('Details', item )}>
                    <Text style={globalStyles.titleText}> {item.title}</Text>
                </TouchableOpacity>
            )}
            />            
        </View>
    )
}