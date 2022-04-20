// bottom half of screen, list of buses
import * as React from 'react';
import { View, Text } from 'react-navigation';

export default function ListOfBuses({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text   
                onPress={() => alert('This is the ListOfBuses screen alert.')} // alerting that you pressed a button
                style={{ fontSize: 26, fontWeight: 'bold' }}>ListOfBuses Screen</Text>
        </View>
    );
}