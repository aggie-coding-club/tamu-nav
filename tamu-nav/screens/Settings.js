// bottom half of screen, settings
import * as React from 'react';
import { View, Text } from 'react-navigation';

export default function Settings({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text   
                onPress={() => navigation.navigate('ListOfBuses')} // we will change in final version, however this will take you to the ListOfBuses page when pressed
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}