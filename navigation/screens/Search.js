// bottom half of screen, ssearching for a particular bus route (main chunk of front-end strings off of this page)
import * as React from 'react';
import { View, Text } from 'react-navigation';

export default function Search({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text   
                onPress={() => navigation.navigate('ListOfBuses')} // we will change in final version, however this will take you to the ListOfBuses page when pressed
                style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
        </View>
    );
}